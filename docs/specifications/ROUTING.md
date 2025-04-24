# WebAXP Routing Specification

## Overview

WebAXP includes a powerful routing system that enables declarative routing, code splitting, and lazy loading for web applications.

## Features

### 1. Declarative Routing

WebAXP provides a declarative routing system:

- **Route Configuration**: Routes are defined in a declarative way
- **Nested Routes**: Routes can be nested for complex UIs
- **Route Parameters**: Routes can have parameters
- **Query Parameters**: Routes can have query parameters
- **Route Guards**: Routes can have guards for authentication and authorization

### 2. Code Splitting

WebAXP supports code splitting for routes:

- **Lazy Loading**: Routes can be loaded lazily
- **Dynamic Imports**: Components can be imported dynamically
- **Prefetching**: Routes can be prefetched
- **Preloading**: Routes can be preloaded
- **Bundle Splitting**: Bundles can be split by route

### 3. Navigation

WebAXP provides navigation utilities:

- **Programmatic Navigation**: Navigate programmatically
- **Link Component**: Navigate with a link component
- **Navigation Events**: Listen to navigation events
- **Navigation Guards**: Guard navigation with custom logic
- **Navigation History**: Access navigation history

### 4. Route Matching

WebAXP provides powerful route matching:

- **Path Matching**: Match routes by path
- **Parameter Matching**: Match routes with parameters
- **Query Matching**: Match routes with query parameters
- **Wildcard Matching**: Match routes with wildcards
- **Regex Matching**: Match routes with regular expressions

### 5. Route Transitions

WebAXP supports route transitions:

- **Enter Transitions**: Transitions when entering a route
- **Exit Transitions**: Transitions when exiting a route
- **Transition Events**: Events for transition lifecycle
- **Transition Hooks**: Hooks for transition lifecycle
- **Custom Transitions**: Custom transition effects

## Implementation

### Creating a Router

```typescript
import { createRouter } from '@net.webax/webaxp-router';

// Create the router
const router = createRouter({
  // Routes
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/users',
      component: Users,
      // Nested routes
      children: [
        {
          path: ':id',
          component: UserDetail,
        },
      ],
    },
    {
      path: '/products',
      // Lazy loaded component
      component: () => import('./pages/Products'),
      // Route guard
      guard: (to, from) => {
        // Check if the user is authenticated
        return isAuthenticated() || '/login';
      },
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
  // Router options
  options: {
    // Base URL
    base: '/',
    // Scroll behavior
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }
      return { top: 0 };
    },
    // Navigation hooks
    beforeEach: (to, from) => {
      console.log(`Navigating from ${from.path} to ${to.path}`);
      return true;
    },
    afterEach: (to, from) => {
      console.log(`Navigated from ${from.path} to ${to.path}`);
    },
  },
});
```

### Using the Router in Components

```typescript
import { useRouter, Link } from '@net.webax/webaxp-router';

function Navigation() {
  // Get the router
  const router = useRouter();

  // Get the current route
  const { route } = router;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" active={route.path === '/'}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" active={route.path === '/about'}>
            About
          </Link>
        </li>
        <li>
          <Link to="/users" active={route.path.startsWith('/users')}>
            Users
          </Link>
        </li>
        <li>
          <Link to="/products" active={route.path.startsWith('/products')}>
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}
```

### Navigating Programmatically

```typescript
import { useRouter } from '@net.webax/webaxp-router';

function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);
      // Navigate to the home page
      router.navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Using Route Parameters

```typescript
import { useRouter } from '@net.webax/webaxp-router';

function UserDetail() {
  const router = useRouter();
  const { params } = router.route;
  const userId = params.id;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const user = await fetchUserById(userId);
        setUser(user);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <button onClick={() => router.navigate('/users')}>
        Back to Users
      </button>
    </div>
  );
}
```

### Using Query Parameters

```typescript
import { useRouter } from '@net.webax/webaxp-router';

function ProductList() {
  const router = useRouter();
  const { query } = router.route;
  const page = parseInt(query.page || '1', 10);
  const limit = parseInt(query.limit || '10', 10);
  const sort = query.sort || 'name';
  const order = query.order || 'asc';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const products = await fetchProductsWithParams({
          page,
          limit,
          sort,
          order,
        });
        setProducts(products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit, sort, order]);

  const handlePageChange = (newPage) => {
    router.navigate({
      path: '/products',
      query: {
        ...query,
        page: newPage,
      },
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={products.length < limit}
        >
          Next
        </button>
      </div>
    </div>
  );
}
```

### Using Route Guards

```typescript
import { createRouter } from '@net.webax/webaxp-router';

// Authentication service
const auth = {
  isAuthenticated: false,
  login() {
    this.isAuthenticated = true;
  },
  logout() {
    this.isAuthenticated = false;
  },
};

// Create the router
const router = createRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/dashboard',
      component: Dashboard,
      // Route guard
      guard: (to, from) => {
        // Check if the user is authenticated
        if (!auth.isAuthenticated) {
          // Redirect to login
          return '/login';
        }
        // Allow navigation
        return true;
      },
    },
    {
      path: '/login',
      component: Login,
    },
  ],
});

function Login() {
  const router = useRouter();

  const handleLogin = () => {
    auth.login();
    router.navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    auth.logout();
    router.navigate('/');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
```

### Using Lazy Loading

```typescript
import { createRouter } from '@net.webax/webaxp-router';

// Create the router
const router = createRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      // Lazy loaded component
      component: () => import('./pages/About'),
      // Loading component
      loading: LoadingComponent,
      // Error component
      error: ErrorComponent,
    },
    {
      path: '/users',
      // Lazy loaded component with prefetch
      component: () => import('./pages/Users'),
      // Prefetch the component
      prefetch: true,
    },
    {
      path: '/products',
      // Lazy loaded component with preload
      component: () => import('./pages/Products'),
      // Preload the component
      preload: true,
    },
  ],
});
```

### Using Route Transitions

```typescript
import { createRouter, Transition } from '@net.webax/webaxp-router';

// Create a fade transition
const fadeTransition = new Transition({
  enter: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 300,
  },
  exit: {
    from: { opacity: 1 },
    to: { opacity: 0 },
    duration: 300,
  },
});

// Create a slide transition
const slideTransition = new Transition({
  enter: {
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0)' },
    duration: 300,
  },
  exit: {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-100%)' },
    duration: 300,
  },
});

// Create the router
const router = createRouter({
  routes: [
    {
      path: '/',
      component: Home,
      // Use the fade transition
      transition: fadeTransition,
    },
    {
      path: '/about',
      component: About,
      // Use the slide transition
      transition: slideTransition,
    },
  ],
});
```

## Best Practices

### 1. Route Organization

Organize your routes in a structured way:

- **Group Related Routes**: Group related routes together
- **Use Nested Routes**: Use nested routes for related content
- **Use Route Parameters**: Use route parameters for dynamic content
- **Use Query Parameters**: Use query parameters for filtering and sorting
- **Use Wildcard Routes**: Use wildcard routes for 404 pages

### 2. Code Splitting

Optimize your application with code splitting:

- **Lazy Load Routes**: Lazy load routes for better performance
- **Prefetch Important Routes**: Prefetch important routes
- **Preload Critical Routes**: Preload critical routes
- **Use Loading Components**: Use loading components for better UX
- **Use Error Components**: Use error components for better error handling

### 3. Navigation

Implement navigation in a user-friendly way:

- **Use Link Components**: Use link components for navigation
- **Provide Visual Feedback**: Provide visual feedback for active links
- **Handle Navigation Errors**: Handle navigation errors gracefully
- **Preserve Scroll Position**: Preserve scroll position when navigating
- **Confirm Navigation**: Confirm navigation for unsaved changes

### 4. Route Guards

Implement route guards for security:

- **Authenticate Users**: Use route guards for authentication
- **Authorize Access**: Use route guards for authorization
- **Validate Input**: Validate route parameters and query parameters
- **Handle Redirects**: Handle redirects gracefully
- **Provide Feedback**: Provide feedback when access is denied

### 5. Testing

Test your routing thoroughly:

- **Unit Tests**: Test route configuration and guards
- **Integration Tests**: Test navigation and route transitions
- **End-to-End Tests**: Test the entire routing system
- **Mocking**: Mock the router for testing
- **Snapshot Testing**: Use snapshot testing for route components

## Conclusion

WebAXP provides a powerful routing system that enables developers to create complex, interactive web applications with ease. By following the best practices outlined in this document, developers can create maintainable, performant, and user-friendly applications that provide a great navigation experience.
