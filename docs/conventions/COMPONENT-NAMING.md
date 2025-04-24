# WebAXP Component Naming Conventions

## Overview

This document outlines the naming conventions for components in WebAXP applications and packages. Following these conventions ensures consistency across the WebAX ecosystem and makes it easier for developers to understand and maintain WebAXP code.

## General Principles

- **Descriptive**: Names should clearly describe the component's purpose
- **Consistent**: Names should follow consistent patterns
- **Specific**: Names should be specific enough to avoid confusion
- **Concise**: Names should be as short as possible while still being descriptive
- **Semantic**: Names should reflect the component's semantic meaning

## Component Names

### Use PascalCase for Component Names

Component names should use PascalCase:

```typescript
// Good
function UserProfile() {
  // ...
}

// Bad
function userProfile() {
  // ...
}

// Bad
function user_profile() {
  // ...
}
```

### Use Descriptive Names

Component names should be descriptive:

```typescript
// Good
function ProductList() {
  // ...
}

// Bad
function List() {
  // ...
}
```

### Use Domain-Specific Prefixes

Use domain-specific prefixes for components that belong to a specific domain:

```typescript
// Good
function UserProfile() {
  // ...
}

function UserSettings() {
  // ...
}

function UserAvatar() {
  // ...
}

// Bad
function Profile() {
  // ...
}

function Settings() {
  // ...
}

function Avatar() {
  // ...
}
```

### Use Suffixes for Component Variants

Use suffixes for component variants:

```typescript
// Good
function Button() {
  // ...
}

function ButtonPrimary() {
  // ...
}

function ButtonSecondary() {
  // ...
}

// Bad
function Button() {
  // ...
}

function PrimaryButton() {
  // ...
}

function SecondaryButton() {
  // ...
}
```

### Use Suffixes for Component Types

Use suffixes for component types:

```typescript
// Good
function UserPage() {
  // ...
}

function UserCard() {
  // ...
}

function UserForm() {
  // ...
}

// Bad
function User() {
  // ...
}

function UserCardComponent() {
  // ...
}

function UserFormComponent() {
  // ...
}
```

## Component Props

### Use PascalCase for Component Props Interfaces

Component props interfaces should use PascalCase with a `Props` suffix:

```typescript
// Good
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
}

function Button(props: ButtonProps) {
  // ...
}

// Bad
interface buttonProps {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
}

// Bad
interface ButtonComponentProps {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
}
```

### Use Descriptive Prop Names

Prop names should be descriptive:

```typescript
// Good
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
}

// Bad
interface ButtonProps {
  v: 'primary' | 'secondary';
  s: 'small' | 'medium' | 'large';
  o: () => void;
}
```

### Use Boolean Props with Positive Names

Boolean props should have positive names:

```typescript
// Good
interface ButtonProps {
  disabled: boolean;
  loading: boolean;
}

// Bad
interface ButtonProps {
  enabled: boolean;
  notLoading: boolean;
}
```

### Use Consistent Naming for Event Handlers

Event handler props should use the `on` prefix followed by the event name:

```typescript
// Good
interface ButtonProps {
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

// Bad
interface ButtonProps {
  clickHandler: () => void;
  mouseEnterHandler: () => void;
  mouseLeaveHandler: () => void;
}
```

### Use Consistent Naming for Render Props

Render props should use the `render` prefix:

```typescript
// Good
interface TabsProps {
  renderTabContent: (tab: Tab) => React.ReactNode;
  renderTabHeader: (tab: Tab) => React.ReactNode;
}

// Bad
interface TabsProps {
  tabContent: (tab: Tab) => React.ReactNode;
  tabHeader: (tab: Tab) => React.ReactNode;
}
```

## Component State

### Use PascalCase for Component State Interfaces

Component state interfaces should use PascalCase with a `State` suffix:

```typescript
// Good
interface CounterState {
  count: number;
  isIncrementing: boolean;
}

// Bad
interface counterState {
  count: number;
  isIncrementing: boolean;
}

// Bad
interface CounterComponentState {
  count: number;
  isIncrementing: boolean;
}
```

### Use Descriptive State Names

State names should be descriptive:

```typescript
// Good
interface FormState {
  values: Record<string, string>;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Bad
interface FormState {
  v: Record<string, string>;
  e: Record<string, string>;
  s: boolean;
  valid: boolean;
}
```

## Event Handlers

### Use the `handle` Prefix for Event Handlers

Event handler functions should use the `handle` prefix followed by the event name:

```typescript
// Good
function Button() {
  const handleClick = () => {
    // ...
  };

  const handleMouseEnter = () => {
    // ...
  };

  return <button onClick={handleClick} onMouseEnter={handleMouseEnter}>Click me</button>;
}

// Bad
function Button() {
  const onClick = () => {
    // ...
  };

  const mouseEnter = () => {
    // ...
  };

  return <button onClick={onClick} onMouseEnter={mouseEnter}>Click me</button>;
}
```

### Use Descriptive Event Handler Names

Event handler names should be descriptive:

```typescript
// Good
function Form() {
  const handleSubmit = () => {
    // ...
  };

  const handleInputChange = (e) => {
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} />
    </form>
  );
}

// Bad
function Form() {
  const submit = () => {
    // ...
  };

  const change = (e) => {
    // ...
  };

  return (
    <form onSubmit={submit}>
      <input onChange={change} />
    </form>
  );
}
```

## Custom Hooks

### Use the `use` Prefix for Custom Hooks

Custom hooks should use the `use` prefix:

```typescript
// Good
function useCounter(initialCount: number) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}

// Bad
function counter(initialCount: number) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}
```

### Use Descriptive Hook Names

Hook names should be descriptive:

```typescript
// Good
function useUserProfile(userId: string) {
  // ...
}

// Bad
function useProfile(userId: string) {
  // ...
}
```

### Use Domain-Specific Prefixes for Hooks

Use domain-specific prefixes for hooks that belong to a specific domain:

```typescript
// Good
function useUserProfile(userId: string) {
  // ...
}

function useUserSettings(userId: string) {
  // ...
}

function useUserAvatar(userId: string) {
  // ...
}

// Bad
function useProfile(userId: string) {
  // ...
}

function useSettings(userId: string) {
  // ...
}

function useAvatar(userId: string) {
  // ...
}
```

## Context

### Use PascalCase with a `Context` Suffix for Context Names

Context names should use PascalCase with a `Context` suffix:

```typescript
// Good
const UserContext = createContext<User | null>(null);

// Bad
const userContext = createContext<User | null>(null);

// Bad
const UserContextObject = createContext<User | null>(null);
```

### Use PascalCase with a `Provider` Suffix for Context Providers

Context providers should use PascalCase with a `Provider` suffix:

```typescript
// Good
function UserProvider({ children }: { children: React.ReactNode }) {
  // ...
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

// Bad
function UserContextProvider({ children }: { children: React.ReactNode }) {
  // ...
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
```

### Use the `use` Prefix for Context Hooks

Context hooks should use the `use` prefix followed by the context name without the `Context` suffix:

```typescript
// Good
function useUser() {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return user;
}

// Bad
function getUserContext() {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error('getUserContext must be used within a UserProvider');
  }
  return user;
}
```

## Higher-Order Components (HOCs)

### Use the `with` Prefix for HOCs

Higher-order components should use the `with` prefix:

```typescript
// Good
function withAuth(Component) {
  return function WithAuth(props) {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  };
}

// Bad
function auth(Component) {
  return function Auth(props) {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  };
}
```

### Use PascalCase for the Wrapped Component

The wrapped component should use PascalCase:

```typescript
// Good
function withAuth(Component) {
  return function WithAuth(props) {
    // ...
    return <Component {...props} />;
  };
}

// Bad
function withAuth(Component) {
  return function withAuth(props) {
    // ...
    return <Component {...props} />;
  };
}
```

## File Names

### Use PascalCase for Component Files

Component files should use PascalCase:

```
// Good
Button.tsx
UserProfile.tsx
ProductList.tsx

// Bad
button.tsx
user-profile.tsx
product_list.tsx
```

### Use the Same Name for the Component and the File

The component name should match the file name:

```typescript
// Button.tsx
export function Button() {
  // ...
}

// UserProfile.tsx
export function UserProfile() {
  // ...
}
```

### Use Index Files for Barrel Exports

Use index files for barrel exports:

```typescript
// components/index.ts
export * from './Button';
export * from './UserProfile';
export * from './ProductList';
```

## Examples

### Component Example

```typescript
// UserProfile.tsx
import React from 'react';

export interface UserProfileProps {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
  onEdit: (userId: string) => void;
}

export function UserProfile({ user, onEdit }: UserProfileProps) {
  const handleEditClick = () => {
    onEdit(user.id);
  };

  return (
    <div className="user-profile">
      <img src={user.avatar} alt={user.name} className="user-profile__avatar" />
      <div className="user-profile__info">
        <h2 className="user-profile__name">{user.name}</h2>
        <p className="user-profile__email">{user.email}</p>
      </div>
      <button className="user-profile__edit-button" onClick={handleEditClick}>
        Edit
      </button>
    </div>
  );
}
```

### Custom Hook Example

```typescript
// useUserProfile.ts
import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export function useUserProfile(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${userId}`);
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
  }, [userId]);

  return { user, loading, error };
}
```

### Context Example

```typescript
// UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface UserContextValue {
  user: User | null;
  loading: boolean;
  error: Error | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/user');
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
  }, []);

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error(`Failed to login: ${response.statusText}`);
      }
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
```

### HOC Example

```typescript
// withAuth.tsx
import React from 'react';
import { useUser } from './UserContext';
import { Redirect } from 'react-router-dom';

export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function WithAuth(props: P) {
    const { user, loading } = useUser();

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return <Redirect to="/login" />;
    }

    return <Component {...props} />;
  };
}
```

## Conclusion

Following these component naming conventions ensures consistency across the WebAX ecosystem and makes it easier for developers to understand and maintain WebAXP code. By adhering to these conventions, you can create high-quality, maintainable, and reliable applications that provide a great developer experience.
