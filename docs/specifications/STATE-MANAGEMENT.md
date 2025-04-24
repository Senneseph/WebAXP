# WebAXP State Management Specification

## Overview

WebAXP includes a powerful state management system that provides a centralized store for application state, with support for multi-tab synchronization, persistence, and reactivity.

## Features

### 1. Centralized Store

WebAXP provides a centralized store for application state:

- **Single Source of Truth**: All application state is stored in a single location
- **Immutable Updates**: State is updated immutably to ensure predictability
- **Structured State**: State is organized in a structured way
- **Type Safety**: State is fully typed with TypeScript
- **Debugging**: State changes can be tracked and debugged

### 2. Reactivity

WebAXP provides a reactive state management system:

- **Subscriptions**: Components can subscribe to state changes
- **Selectors**: Components can select specific parts of the state
- **Derived State**: Computed values can be derived from the state
- **Batched Updates**: State updates are batched for performance
- **Optimized Rendering**: Only affected components are re-rendered

### 3. Multi-Tab Synchronization

WebAXP provides multi-tab synchronization for state:

- **Shared State**: State is shared across tabs
- **Real-Time Updates**: State changes are propagated in real-time
- **Conflict Resolution**: Conflicts are resolved automatically
- **Offline Support**: State changes are queued when offline
- **Synchronization Events**: Events are emitted during synchronization

### 4. Persistence

WebAXP provides persistence for state:

- **Local Storage**: State can be persisted to local storage
- **Session Storage**: State can be persisted to session storage
- **IndexedDB**: State can be persisted to IndexedDB
- **Custom Storage**: Custom storage adapters can be implemented
- **Selective Persistence**: Only specific parts of the state can be persisted

### 5. Middleware

WebAXP provides middleware support for state management:

- **Logging**: Log state changes
- **Validation**: Validate state changes
- **Side Effects**: Handle side effects
- **Persistence**: Persist state changes
- **Synchronization**: Synchronize state changes

## Implementation

### Creating a Store

```typescript
import { createStore } from '@net.webax/webaxp-state';

// Define the state interface
interface AppState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  products: {
    id: string;
    name: string;
    price: number;
  }[];
  cart: {
    productId: string;
    quantity: number;
  }[];
  ui: {
    theme: 'light' | 'dark';
    sidebarOpen: boolean;
  };
}

// Create the store
const store = createStore<AppState>({
  // Initial state
  initialState: {
    user: null,
    products: [],
    cart: [],
    ui: {
      theme: 'light',
      sidebarOpen: false,
    },
  },
  // Middleware
  middleware: [
    // Logging middleware
    (store) => (next) => (action) => {
      console.log('Dispatching action:', action);
      const result = next(action);
      console.log('Next state:', store.getState());
      return result;
    },
  ],
  // Persistence
  persistence: {
    // Storage adapter
    storage: localStorage,
    // Key for storage
    key: 'webaxp-app-state',
    // Paths to persist
    paths: ['user', 'cart', 'ui.theme'],
  },
  // Multi-tab synchronization
  sync: {
    // Enable synchronization
    enabled: true,
    // Channel for synchronization
    channel: 'webaxp-app-state',
    // Conflict resolution strategy
    conflictResolution: 'last-write-wins',
  },
});
```

### Using the Store in Components

```typescript
import { useStore, useSelector } from '@net.webax/webaxp-state';

function UserProfile() {
  // Get the entire store
  const { state, dispatch } = useStore();

  // Or use a selector to get a specific part of the state
  const user = useSelector((state) => state.user);

  // Dispatch an action to update the state
  const handleLogout = () => {
    dispatch({
      type: 'user/logout',
    });
  };

  if (!user) {
    return <p>Please log in</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
```

### Updating the State

```typescript
import { useStore } from '@net.webax/webaxp-state';

function ProductList() {
  const { state, dispatch } = useStore();

  // Dispatch an action to update the state
  const handleAddToCart = (productId: string) => {
    dispatch({
      type: 'cart/addItem',
      payload: {
        productId,
        quantity: 1,
      },
    });
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {state.products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Creating Selectors

```typescript
import { createSelector } from '@net.webax/webaxp-state';

// Create a selector for the cart total
const selectCartTotal = createSelector(
  (state) => state.cart,
  (state) => state.products,
  (cart, products) => {
    return cart.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  }
);

function CartSummary() {
  // Use the selector
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total: ${cartTotal}</p>
    </div>
  );
}
```

### Creating Actions

```typescript
import { createAction } from '@net.webax/webaxp-state';

// Create an action creator for adding an item to the cart
const addToCart = createAction<{
  productId: string;
  quantity: number;
}>('cart/addItem');

// Create an action creator for removing an item from the cart
const removeFromCart = createAction<{
  productId: string;
}>('cart/removeItem');

function CartItem({ productId, quantity }) {
  const { dispatch } = useStore();

  const handleRemove = () => {
    // Dispatch the action
    dispatch(removeFromCart({ productId }));
  };

  return (
    <div>
      <p>Product ID: {productId}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
```

### Creating Reducers

```typescript
import { createReducer } from '@net.webax/webaxp-state';

// Create a reducer for the cart
const cartReducer = createReducer([], {
  'cart/addItem': (state, action) => {
    const { productId, quantity } = action.payload;
    const existingItem = state.find((item) => item.productId === productId);

    if (existingItem) {
      return state.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    }

    return [...state, { productId, quantity }];
  },
  'cart/removeItem': (state, action) => {
    const { productId } = action.payload;
    return state.filter((item) => item.productId !== productId);
  },
});

// Create the root reducer
const rootReducer = {
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  ui: uiReducer,
};

// Create the store with the root reducer
const store = createStore({
  initialState: {
    user: null,
    products: [],
    cart: [],
    ui: {
      theme: 'light',
      sidebarOpen: false,
    },
  },
  reducer: rootReducer,
});
```

### Using Middleware

```typescript
import { createStore, Middleware } from '@net.webax/webaxp-state';

// Create a logging middleware
const loggingMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

// Create a persistence middleware
const persistenceMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem('webaxp-app-state', JSON.stringify(state));
  return result;
};

// Create the store with middleware
const store = createStore({
  initialState: {
    user: null,
    products: [],
    cart: [],
    ui: {
      theme: 'light',
      sidebarOpen: false,
    },
  },
  middleware: [loggingMiddleware, persistenceMiddleware],
});
```

### Using Persistence

```typescript
import { createStore } from '@net.webax/webaxp-state';

// Create the store with persistence
const store = createStore({
  initialState: {
    user: null,
    products: [],
    cart: [],
    ui: {
      theme: 'light',
      sidebarOpen: false,
    },
  },
  persistence: {
    // Storage adapter
    storage: localStorage,
    // Key for storage
    key: 'webaxp-app-state',
    // Paths to persist
    paths: ['user', 'cart', 'ui.theme'],
    // Serialize and deserialize functions
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    // Debounce time in milliseconds
    debounce: 1000,
  },
});
```

### Using Multi-Tab Synchronization

```typescript
import { createStore } from '@net.webax/webaxp-state';

// Create the store with multi-tab synchronization
const store = createStore({
  initialState: {
    user: null,
    products: [],
    cart: [],
    ui: {
      theme: 'light',
      sidebarOpen: false,
    },
  },
  sync: {
    // Enable synchronization
    enabled: true,
    // Channel for synchronization
    channel: 'webaxp-app-state',
    // Conflict resolution strategy
    conflictResolution: 'last-write-wins',
    // Paths to synchronize
    paths: ['user', 'cart'],
    // Debounce time in milliseconds
    debounce: 1000,
  },
});
```

## Best Practices

### 1. State Structure

Organize your state in a structured way:

- **Normalize State**: Store entities in a normalized form
- **Separate Concerns**: Separate different parts of the state
- **Avoid Nesting**: Avoid deeply nested state
- **Use IDs**: Use IDs to reference related entities
- **Keep It Simple**: Keep the state as simple as possible

### 2. State Updates

Update your state in a predictable way:

- **Immutable Updates**: Always update state immutably
- **Action Creators**: Use action creators for state updates
- **Reducers**: Use reducers for complex state updates
- **Selectors**: Use selectors for derived state
- **Middleware**: Use middleware for side effects

### 3. Performance Optimization

Optimize your state management for performance:

- **Memoization**: Memoize selectors for performance
- **Batched Updates**: Batch state updates for performance
- **Selective Subscriptions**: Subscribe only to the state you need
- **Optimized Rendering**: Optimize rendering for performance
- **Lazy Loading**: Load state lazily when needed

### 4. Testing

Test your state management thoroughly:

- **Unit Tests**: Test reducers, selectors, and action creators
- **Integration Tests**: Test the interaction between components and state
- **End-to-End Tests**: Test the entire application
- **Mocking**: Mock the store for testing
- **Snapshot Testing**: Use snapshot testing for state changes

### 5. Debugging

Debug your state management effectively:

- **Logging**: Log state changes
- **Time Travel**: Use time travel debugging
- **State Inspection**: Inspect the state at any point
- **Action Tracing**: Trace actions through the system
- **Error Handling**: Handle errors gracefully

## Conclusion

WebAXP provides a powerful state management system that enables developers to create complex, interactive web applications with ease. By following the best practices outlined in this document, developers can create maintainable, performant, and reliable applications that provide a great user experience.
