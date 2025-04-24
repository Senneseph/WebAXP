# WebAXP Conventions

This document outlines the conventions for WebAXP applications and packages. Following these conventions ensures consistency across the WebAX ecosystem and makes it easier for developers to understand and maintain WebAXP applications.

## Table of Contents

- [Project Structure](#project-structure)
- [File Naming](#file-naming)
- [Coding Style](#coding-style)
- [Package Naming](#package-naming)
- [Component Naming](#component-naming)
- [State Management](#state-management)
- [Routing](#routing)
- [API Integration](#api-integration)
- [Testing](#testing)
- [Documentation](#documentation)

## Project Structure

WebAXP applications and packages follow a consistent directory structure:

```
{project-name}/
├── app/                      # Source code and demo application
│   ├── src/                  # Source code
│   │   ├── index.ts          # Main entry point
│   │   ├── components/       # UI components
│   │   ├── views/            # Page views
│   │   ├── state/            # State management
│   │   ├── api/              # API integration
│   │   ├── utils/            # Utility functions
│   │   └── types/            # TypeScript type definitions
│   ├── environment/          # Environment configuration
│   ├── tests/                # Test files
│   └── assets/               # Static assets
├── cicda/                    # CI/CD configuration
│   ├── build/                # Build configuration
│   │   ├── rollup.config.js  # Rollup configuration
│   │   ├── tsconfig.json     # TypeScript configuration
│   │   ├── jest.config.js    # Jest configuration
│   │   └── .eslintrc.js      # ESLint configuration
│   ├── environment/          # Environment configuration for CI/CD
│   └── tests/                # Test runners and configuration
├── develop/                  # Optional developer tools
│   └── environment/          # Environment configuration for development
├── dist/                     # Distribution files (generated)
│   ├── index.js              # CommonJS bundle
│   ├── index.esm.js          # ES Module bundle
│   ├── index.d.ts            # TypeScript declarations
│   └── index.min.js          # Minified bundle
├── docs/                     # Documentation
│   ├── api/                  # API documentation
│   ├── guides/               # Usage guides
│   ├── examples/             # Example implementations
│   └── specifications/       # Detailed specifications
├── package.json              # Package configuration
├── README.md                 # Package overview
└── LICENSE                   # License information
```

For more details, see [Project Structure](./PROJECT-STRUCTURE.md).

## File Naming

WebAXP follows these file naming conventions:

- **TypeScript/JavaScript Files**: Use kebab-case for file names (e.g., `user-profile.ts`)
- **React Components**: Use PascalCase for component files (e.g., `UserProfile.tsx`)
- **Test Files**: Use the same name as the file being tested with a `.test` or `.spec` suffix (e.g., `user-profile.test.ts`)
- **Style Files**: Use the same name as the component with a `.styles` suffix (e.g., `UserProfile.styles.ts`)
- **Type Definition Files**: Use the same name as the file with a `.types` suffix (e.g., `user-profile.types.ts`)
- **Barrel Files**: Use `index.ts` for barrel files that re-export from a directory

For more details, see [File Naming](./FILE-NAMING.md).

## Coding Style

WebAXP follows the TypeScript coding style with these additional conventions:

- Use TypeScript for all new code
- Use functional components with hooks for React components
- Use arrow functions for function expressions
- Use const for variables that don't change
- Use async/await for asynchronous code
- Use destructuring for object and array access
- Use template literals for string interpolation
- Use optional chaining and nullish coalescing
- Use ESLint and Prettier for code formatting

For more details, see [Coding Style](./CODING-STYLE.md).

## Package Naming

WebAXP packages follow these naming conventions:

- **Scope**: All packages use the `@net.webax` scope
- **Package Names**: Use kebab-case for package names
- **Core Packages**: Use simple, descriptive names (e.g., `@net.webax/jcule`)
- **Extension Packages**: Use a prefix that indicates their relationship to a core package (e.g., `@net.webax/jcule-openapi`)
- **Tool Packages**: Use a suffix that indicates they are tools (e.g., `@net.webax/spec-extractor`)

For more details, see [Package Naming](./PACKAGE-NAMING.md).

## Component Naming

WebAXP components follow these naming conventions:

- **Component Names**: Use PascalCase for component names (e.g., `UserProfile`)
- **Component Props**: Use PascalCase for component prop interfaces with a `Props` suffix (e.g., `UserProfileProps`)
- **Component State**: Use PascalCase for component state interfaces with a `State` suffix (e.g., `UserProfileState`)
- **Event Handlers**: Use `handle` prefix for event handlers (e.g., `handleClick`)
- **Custom Hooks**: Use `use` prefix for custom hooks (e.g., `useUserProfile`)

For more details, see [Component Naming](./COMPONENT-NAMING.md).

## State Management

WebAXP uses a custom observable store for state management with these conventions:

- **Store Structure**: Organize state by domain (e.g., `user`, `products`, `cart`)
- **Actions**: Use action creators for state changes
- **Selectors**: Use selectors for derived state
- **Side Effects**: Handle side effects in action creators or middleware
- **Immutability**: Treat state as immutable
- **Persistence**: Use storage adapters for state persistence
- **Synchronization**: Use messaging for state synchronization across tabs

For more details, see [State Management](./STATE-MANAGEMENT.md).

## Routing

WebAXP uses a declarative routing system with these conventions:

- **Route Definitions**: Define routes in a central configuration
- **Route Parameters**: Use route parameters for dynamic routes
- **Nested Routes**: Support nested routes for complex UIs
- **Route Guards**: Use route guards for authentication and authorization
- **Code Splitting**: Use code splitting for route-based components
- **Lazy Loading**: Use lazy loading for route-based components
- **Route Transitions**: Use transitions for route changes

For more details, see [Routing](./ROUTING.md).

## API Integration

WebAXP uses a declarative API integration system with these conventions:

- **API Definitions**: Define APIs using OpenAPI or GraphQL
- **API Adapters**: Use adapters to transform API definitions to UIxAAS
- **API Clients**: Generate API clients from API definitions
- **API Hooks**: Use hooks for API integration in components
- **API Caching**: Use caching for API responses
- **API Error Handling**: Use standardized error handling
- **API Authentication**: Use standardized authentication

For more details, see [API Integration](./API-INTEGRATION.md).

## Testing

WebAXP uses Jest and Testing Library for testing with these conventions:

- **Unit Tests**: Test individual functions and components
- **Integration Tests**: Test interactions between components
- **End-to-End Tests**: Test complete user flows
- **Test Coverage**: Aim for high test coverage
- **Test Organization**: Organize tests alongside the code they test
- **Test Naming**: Use descriptive test names
- **Test Fixtures**: Use fixtures for test data
- **Test Mocks**: Use mocks for external dependencies

For more details, see [Testing](./TESTING.md).

## Documentation

WebAXP uses Markdown for documentation with these conventions:

- **README**: Provide a README for each package and major directory
- **API Documentation**: Document all public APIs
- **Examples**: Provide examples for common use cases
- **Guides**: Provide guides for complex topics
- **Tutorials**: Provide step-by-step tutorials for beginners
- **Reference**: Provide comprehensive reference documentation
- **Changelog**: Maintain a changelog for each package

For more details, see [Documentation](./DOCUMENTATION.md).
