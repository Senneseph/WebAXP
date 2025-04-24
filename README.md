# WebAXP - WebAX Progressive Web App Framework

WebAXP is the official implementation of the WebAX architecture for building Progressive Web Applications (PWAs). It provides a comprehensive framework for creating modern, performant, and accessible web applications using the WebAX ecosystem.

## Overview

WebAXP combines the power of jcule (Business Logic Controller) and jellicule (UI Component Library) to create a complete framework for building web applications. It follows the WebAX architecture principles of separation of concerns, declarative UI-to-API mapping, event-based communication, multi-tab support, and state synchronization.

## Key Features

- **Progressive Web App Support**: Built-in PWA capabilities for offline support, installability, and native-like experiences
- **API-First Development**: Generate UIs directly from API specifications
- **Component-Based Architecture**: Reusable, accessible, and customizable UI components
- **State Management**: Centralized state management with multi-tab synchronization
- **Routing**: Declarative routing with code splitting and lazy loading
- **Offline Support**: Work offline and synchronize when back online
- **TypeScript Support**: Full TypeScript support for type safety and developer experience
- **Accessibility**: Built-in accessibility features and best practices
- **Performance**: Optimized for performance with code splitting, tree shaking, and lazy loading

## Getting Started

To create a new WebAXP application, use the WebAXP CLI:

```bash
npm install -g @net.webax/webaxp-cli
webaxp create my-app
cd my-app
npm start
```

## Documentation

- [Conventions](./docs/conventions/README.md): Coding conventions, file structure, and naming conventions
- [Specifications](./docs/specifications/README.md): Detailed specifications for WebAXP
- [Examples](./docs/examples/README.md): Example applications built with WebAXP

## Packages

WebAXP consists of several packages:

- **@net.webax/jcule**: Business Logic Controller for WebAX applications
- **@net.webax/jellicule**: UI Component Library for WebAX applications
- **@net.webax/webaxp-cli**: Command-line interface for creating and managing WebAXP applications
- **@net.webax/webaxp-core**: Core functionality for WebAXP applications
- **@net.webax/webaxp-router**: Routing for WebAXP applications
- **@net.webax/webaxp-state**: State management for WebAXP applications
- **@net.webax/webaxp-api**: API integration for WebAXP applications
- **@net.webax/webaxp-pwa**: PWA features for WebAXP applications

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
