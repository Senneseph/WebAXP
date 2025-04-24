# WebAXP Coding Style Guide

## Overview

This document outlines the coding style conventions for WebAXP applications and packages. Following these conventions ensures consistency across the WebAX ecosystem and makes it easier for developers to understand and maintain WebAXP code.

## General Principles

- **Readability**: Code should be easy to read and understand
- **Consistency**: Code should follow consistent patterns
- **Simplicity**: Code should be as simple as possible
- **Maintainability**: Code should be easy to maintain
- **Testability**: Code should be easy to test

## TypeScript

### Use TypeScript for All New Code

WebAXP applications and packages should use TypeScript for all new code:

```typescript
// Good
function add(a: number, b: number): number {
  return a + b;
}

// Bad
function add(a, b) {
  return a + b;
}
```

### Use Strict TypeScript Configuration

WebAXP applications and packages should use strict TypeScript configuration:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "noImplicitReturns": true,
    "alwaysStrict": true
  }
}
```

### Use Type Inference When Possible

Let TypeScript infer types when they are obvious:

```typescript
// Good
const count = 0; // TypeScript infers number
const name = 'John'; // TypeScript infers string
const items = [1, 2, 3]; // TypeScript infers number[]

// Bad
const count: number = 0;
const name: string = 'John';
const items: number[] = [1, 2, 3];
```

### Use Explicit Types for Function Parameters and Return Values

Always use explicit types for function parameters and return values:

```typescript
// Good
function add(a: number, b: number): number {
  return a + b;
}

// Bad
function add(a, b) {
  return a + b;
}
```

### Use Interfaces for Object Types

Use interfaces for object types:

```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): User {
  // ...
}

// Bad
function getUser(id: string): { id: string; name: string; email: string } {
  // ...
}
```

### Use Type Aliases for Union Types

Use type aliases for union types:

```typescript
// Good
type Status = 'pending' | 'success' | 'error';

function setStatus(status: Status): void {
  // ...
}

// Bad
function setStatus(status: 'pending' | 'success' | 'error'): void {
  // ...
}
```

### Use Enums for Finite Sets of Values

Use enums for finite sets of values:

```typescript
// Good
enum Role {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

function hasPermission(role: Role): boolean {
  // ...
}

// Bad
function hasPermission(role: 'admin' | 'user' | 'guest'): boolean {
  // ...
}
```

### Use Generics for Reusable Components

Use generics for reusable components:

```typescript
// Good
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

// Bad
function getFirst(items: any[]): any {
  return items[0];
}
```

## Functions

### Use Arrow Functions for Function Expressions

Use arrow functions for function expressions:

```typescript
// Good
const add = (a: number, b: number): number => {
  return a + b;
};

// Bad
const add = function(a: number, b: number): number {
  return a + b;
};
```

### Use Function Declarations for Named Functions

Use function declarations for named functions:

```typescript
// Good
function add(a: number, b: number): number {
  return a + b;
}

// Bad
const add = (a: number, b: number): number => {
  return a + b;
};
```

### Use Concise Arrow Functions for Simple Functions

Use concise arrow functions for simple functions:

```typescript
// Good
const add = (a: number, b: number): number => a + b;

// Bad
const add = (a: number, b: number): number => {
  return a + b;
};
```

### Use Default Parameters

Use default parameters instead of conditional logic:

```typescript
// Good
function greet(name: string = 'World'): string {
  return `Hello, ${name}!`;
}

// Bad
function greet(name: string): string {
  if (name === undefined) {
    name = 'World';
  }
  return `Hello, ${name}!`;
}
```

### Use Rest Parameters for Variable Arguments

Use rest parameters for variable arguments:

```typescript
// Good
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// Bad
function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
```

### Use Async/Await for Asynchronous Code

Use async/await for asynchronous code:

```typescript
// Good
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.statusText}`);
  }
  return response.json();
}

// Bad
function fetchUser(id: string): Promise<User> {
  return fetch(`/api/users/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.statusText}`);
      }
      return response.json();
    });
}
```

## Variables

### Use const for Variables That Don't Change

Use const for variables that don't change:

```typescript
// Good
const PI = 3.14159;
const user = { name: 'John' };

// Bad
let PI = 3.14159;
let user = { name: 'John' };
```

### Use let for Variables That Change

Use let for variables that change:

```typescript
// Good
let count = 0;
count += 1;

// Bad
var count = 0;
count += 1;
```

### Use Descriptive Variable Names

Use descriptive variable names:

```typescript
// Good
const firstName = 'John';
const lastName = 'Doe';
const fullName = `${firstName} ${lastName}`;

// Bad
const fn = 'John';
const ln = 'Doe';
const full = `${fn} ${ln}`;
```

### Use PascalCase for Class Names and Interface Names

Use PascalCase for class names and interface names:

```typescript
// Good
class UserService {
  // ...
}

interface UserProfile {
  // ...
}

// Bad
class userService {
  // ...
}

interface userProfile {
  // ...
}
```

### Use camelCase for Variable Names and Function Names

Use camelCase for variable names and function names:

```typescript
// Good
const userName = 'John';
function getUserName(): string {
  // ...
}

// Bad
const UserName = 'John';
function GetUserName(): string {
  // ...
}
```

### Use UPPER_CASE for Constants

Use UPPER_CASE for constants:

```typescript
// Good
const MAX_RETRY_COUNT = 3;
const API_URL = 'https://api.example.com';

// Bad
const maxRetryCount = 3;
const apiUrl = 'https://api.example.com';
```

## Objects

### Use Object Destructuring

Use object destructuring:

```typescript
// Good
const { name, email } = user;

// Bad
const name = user.name;
const email = user.email;
```

### Use Property Shorthand

Use property shorthand:

```typescript
// Good
const name = 'John';
const email = 'john@example.com';
const user = { name, email };

// Bad
const name = 'John';
const email = 'john@example.com';
const user = { name: name, email: email };
```

### Use Computed Property Names

Use computed property names:

```typescript
// Good
const key = 'name';
const user = {
  [key]: 'John',
};

// Bad
const key = 'name';
const user = {};
user[key] = 'John';
```

### Use Spread Operator for Object Merging

Use spread operator for object merging:

```typescript
// Good
const defaults = { theme: 'light', language: 'en' };
const userPreferences = { theme: 'dark' };
const preferences = { ...defaults, ...userPreferences };

// Bad
const defaults = { theme: 'light', language: 'en' };
const userPreferences = { theme: 'dark' };
const preferences = Object.assign({}, defaults, userPreferences);
```

## Arrays

### Use Array Destructuring

Use array destructuring:

```typescript
// Good
const [first, second] = items;

// Bad
const first = items[0];
const second = items[1];
```

### Use Spread Operator for Array Copying

Use spread operator for array copying:

```typescript
// Good
const copy = [...items];

// Bad
const copy = items.slice();
```

### Use Array Methods Instead of Loops

Use array methods instead of loops:

```typescript
// Good
const doubled = numbers.map((n) => n * 2);
const even = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((total, n) => total + n, 0);

// Bad
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

const even = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);
  }
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
```

## Strings

### Use Template Literals for String Interpolation

Use template literals for string interpolation:

```typescript
// Good
const greeting = `Hello, ${name}!`;

// Bad
const greeting = 'Hello, ' + name + '!';
```

### Use Template Literals for Multiline Strings

Use template literals for multiline strings:

```typescript
// Good
const message = `
  Hello,
  World!
`;

// Bad
const message = 'Hello,\nWorld!';
```

## Conditionals

### Use Ternary Operator for Simple Conditionals

Use ternary operator for simple conditionals:

```typescript
// Good
const result = condition ? 'yes' : 'no';

// Bad
let result;
if (condition) {
  result = 'yes';
} else {
  result = 'no';
}
```

### Use Optional Chaining for Nested Properties

Use optional chaining for nested properties:

```typescript
// Good
const name = user?.profile?.name;

// Bad
const name = user && user.profile && user.profile.name;
```

### Use Nullish Coalescing for Default Values

Use nullish coalescing for default values:

```typescript
// Good
const name = user.name ?? 'Anonymous';

// Bad
const name = user.name !== null && user.name !== undefined ? user.name : 'Anonymous';
```

### Use Early Returns

Use early returns to reduce nesting:

```typescript
// Good
function getUser(id: string): User | null {
  if (!id) {
    return null;
  }

  const user = database.findUser(id);
  if (!user) {
    return null;
  }

  return user;
}

// Bad
function getUser(id: string): User | null {
  if (id) {
    const user = database.findUser(id);
    if (user) {
      return user;
    }
  }
  return null;
}
```

## React Components

### Use Functional Components with Hooks

Use functional components with hooks:

```typescript
// Good
import React, { useState } from 'react';

interface CounterProps {
  initialCount: number;
}

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// Bad
import React from 'react';

interface CounterProps {
  initialCount: number;
}

interface CounterState {
  count: number;
}

export class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

### Use Destructuring for Props

Use destructuring for props:

```typescript
// Good
interface UserProfileProps {
  name: string;
  email: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ name, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

// Bad
interface UserProfileProps {
  name: string;
  email: string;
}

export const UserProfile: React.FC<UserProfileProps> = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </div>
  );
};
```

### Use Custom Hooks for Reusable Logic

Use custom hooks for reusable logic:

```typescript
// Good
import { useState, useEffect } from 'react';

export function useUser(id: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch user: ${response.statusText}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  return { user, loading, error };
}

// Usage
function UserProfile({ id }: { id: string }) {
  const { user, loading, error } = useUser(id);

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
    </div>
  );
}

// Bad
function UserProfile({ id }: { id: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch user: ${response.statusText}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

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
    </div>
  );
}
```

### Use Memo for Expensive Calculations

Use memo for expensive calculations:

```typescript
// Good
import React, { useMemo } from 'react';

interface ProductListProps {
  products: Product[];
  filter: string;
}

export const ProductList: React.FC<ProductListProps> = ({ products, filter }) => {
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);

  return (
    <ul>
      {filteredProducts.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

// Bad
import React from 'react';

interface ProductListProps {
  products: Product[];
  filter: string;
}

export const ProductList: React.FC<ProductListProps> = ({ products, filter }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredProducts.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};
```

### Use Callback for Event Handlers

Use callback for event handlers:

```typescript
// Good
import React, { useState, useCallback } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// Bad
import React, { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

## Comments

### Use JSDoc for Public APIs

Use JSDoc for public APIs:

```typescript
// Good
/**
 * Adds two numbers.
 *
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of a and b
 */
function add(a: number, b: number): number {
  return a + b;
}

// Bad
// Adds two numbers
function add(a: number, b: number): number {
  return a + b;
}
```

### Use Inline Comments for Complex Logic

Use inline comments for complex logic:

```typescript
// Good
function calculateTax(amount: number, rate: number): number {
  // Apply minimum tax rate if the calculated rate is below the minimum
  const effectiveRate = Math.max(rate, 0.05);
  
  // Calculate tax amount
  return amount * effectiveRate;
}

// Bad
function calculateTax(amount: number, rate: number): number {
  const effectiveRate = Math.max(rate, 0.05);
  return amount * effectiveRate;
}
```

### Avoid Commented-Out Code

Avoid commented-out code:

```typescript
// Good
function calculateTotal(amount: number, taxRate: number): number {
  const tax = amount * taxRate;
  return amount + tax;
}

// Bad
function calculateTotal(amount: number, taxRate: number): number {
  const tax = amount * taxRate;
  // const discount = amount * 0.1;
  // return amount + tax - discount;
  return amount + tax;
}
```

## Error Handling

### Use Try-Catch for Error Handling

Use try-catch for error handling:

```typescript
// Good
async function fetchUser(id: string): Promise<User> {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

// Bad
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    console.error(`Failed to fetch user: ${response.statusText}`);
    return null;
  }
  return response.json();
}
```

### Use Custom Error Classes

Use custom error classes:

```typescript
// Good
class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function fetchUser(id: string): Promise<User> {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new ApiError(
        response.status,
        `Failed to fetch user: ${response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      // Handle API error
      if (error.statusCode === 404) {
        // Handle not found
      }
    }
    throw error;
  }
}

// Bad
async function fetchUser(id: string): Promise<User> {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    // No way to distinguish between different types of errors
    throw error;
  }
}
```

## Testing

### Use Descriptive Test Names

Use descriptive test names:

```typescript
// Good
describe('add', () => {
  it('should add two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });
});

// Bad
describe('add', () => {
  it('test1', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('test2', () => {
    expect(add(-2, -3)).toBe(-5);
  });
});
```

### Use Test Fixtures

Use test fixtures:

```typescript
// Good
describe('UserService', () => {
  const mockUser = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
  };

  it('should fetch a user by ID', async () => {
    // Arrange
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockUser),
    });
    global.fetch = mockFetch;

    // Act
    const userService = new UserService();
    const user = await userService.getUserById('1');

    // Assert
    expect(user).toEqual(mockUser);
    expect(mockFetch).toHaveBeenCalledWith('/api/users/1');
  });
});

// Bad
describe('UserService', () => {
  it('should fetch a user by ID', async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
      }),
    });
    global.fetch = mockFetch;

    const userService = new UserService();
    const user = await userService.getUserById('1');

    expect(user).toEqual({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    });
    expect(mockFetch).toHaveBeenCalledWith('/api/users/1');
  });
});
```

### Use Arrange-Act-Assert Pattern

Use the Arrange-Act-Assert pattern:

```typescript
// Good
it('should add a product to the cart', () => {
  // Arrange
  const cart = new ShoppingCart();
  const product = {
    id: '1',
    name: 'Product 1',
    price: 10,
  };

  // Act
  cart.addProduct(product);

  // Assert
  expect(cart.getProducts()).toContain(product);
  expect(cart.getTotal()).toBe(10);
});

// Bad
it('should add a product to the cart', () => {
  const cart = new ShoppingCart();
  const product = {
    id: '1',
    name: 'Product 1',
    price: 10,
  };
  cart.addProduct(product);
  expect(cart.getProducts()).toContain(product);
  expect(cart.getTotal()).toBe(10);
});
```

## Conclusion

Following these coding style conventions ensures consistency across the WebAX ecosystem and makes it easier for developers to understand and maintain WebAXP code. By adhering to these conventions, you can create high-quality, maintainable, and reliable applications that provide a great developer experience.
