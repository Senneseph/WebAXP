# WebAXP Architecture Specification

## Overview

WebAXP is a Progressive Web App framework based on the WebAX architecture. It combines jcule (Business Logic Controller) and jellicule (UI Component Library) to create a complete framework for building web applications.

## Architecture Principles

WebAXP follows these architecture principles:

1. **Separation of Concerns**: Clear separation between business logic (jcule) and UI components (jellicule)
2. **Declarative UI-to-API Mapping**: UIs are derived directly from API structures
3. **Event-Based Communication**: Components communicate through a centralized event bus
4. **Multi-Tab Support**: Applications work seamlessly across multiple browser tabs
5. **State Synchronization**: All UI instances stay in sync with the application state

## Core Components

### 1. jcule (Business Logic Controller)

jcule is the Business Logic Controller (BLC) for WebAXP applications. It:

- Manages application state
- Handles routing
- Communicates with APIs
- Processes events from UI components
- Updates UI components based on state changes

#### 1.1. muther-brane

The muther-brane is the central orchestrator of jcule. It:

- Consumes the Adapted API Representation (output from the UxA)
- Selects appropriate jellicule Web Components based on the adapted representation
- Renders and updates jellicule component instances in the DOM
- Manages the application state via the Custom State Store
- Listens to DOM events from jellicule components and translates them into semantic internal events

#### 1.2. UIxAAS (User Interface API Adapter Specification)

UIxAAS defines the standard structure and semantics of the intermediate "Adapted API Representation". This specification ensures consistency regardless of the source API type and provides a standardized format for UI generation.

#### 1.3. UxA (User Interface Adapter)

The UxA is an implementation within jcule that conforms to UIxAAS. It consumes a specific API definition format (e.g., OpenAPI) and produces the Adapted API Representation.

#### 1.4. insystema-vega (Event Bus)

insystema-vega is an internal event bus for decoupled communication within the jcule engine. It is used by muther-brane to signal significant events and helps decouple different parts of the orchestration logic.

### 2. jellicule (UI Component Library)

jellicule is the UI Component Library for WebAXP applications. It:

- Provides reusable, accessible, and customizable UI components
- Emits events to the BLC
- Receives updates from the BLC
- Does not communicate directly with other components
- Focuses only on rendering and user interaction

#### 2.1. Component Hierarchy

The jellicule component library is organized based on HTML specifications, providing a semantic structure that aligns with web standards:

- **Root Components**: Basic document structure (e.g., `<jel-html>`, `<jel-body>`)
- **Metadata Components**: Document metadata (e.g., `<jel-head>`, `<jel-title>`)
- **Sectioning Components**: Content sections (e.g., `<jel-section>`, `<jel-nav>`)
- **Text Content Components**: Text elements (e.g., `<jel-p>`, `<jel-h1>`)
- **Form Components**: Input elements (e.g., `<jel-input>`, `<jel-button>`)
- **Embedded Components**: Embedded content (e.g., `<jel-img>`, `<jel-video>`)
- **Interactive Components**: Interactive elements (e.g., `<jel-details>`, `<jel-dialog>`)

#### 2.2. Theme Implementation

jellicule supports multiple theming systems to provide flexibility in visual styling:

- **Base Components**: All jellicule components have a base implementation with minimal styling
- **Theme Extensions**: Themes extend base components with specific visual styles
- **Style Application**: Styles are applied using CSS custom properties and shadow DOM encapsulation
- **Theme Switching**: Themes can be switched at runtime by changing the theme provider
- **Source Library Consistency**: Themes maintain consistency with their source libraries (Bootstrap, Material UI, etc.) through careful implementation of design tokens and component behavior

### 3. WebAXP Core

WebAXP Core provides the glue between jcule and jellicule, as well as additional functionality specific to Progressive Web Apps:

- **Router**: Handles navigation and code splitting
- **State Management**: Manages application state and synchronization
- **API Integration**: Integrates with backend APIs
- **PWA Features**: Provides Progressive Web App features
- **Offline Support**: Enables offline functionality
- **Multi-Tab Support**: Synchronizes state across tabs

## Interaction Flow

The interaction flow between jcule and jellicule components follows these steps:

1. The `OpenAPI-UxA` parses the `OpenAPI Spec` and generates the `UIxAAS Representation`.
2. `muther-brane` consumes this representation.
3. `muther-brane` uses the `API Library` to fetch initial data from the `External API`, updating the `Custom State Store`.
4. Based on the state and the UIxAAS representation, `muther-brane` selects, instantiates, and renders `jellicule` components into the `PWA` UI, setting their properties.
5. User interaction with `jellicule` components triggers DOM events, which `muther-brane` listens for.
6. `muther-brane` translates DOM events into internal `insystema-vega` events or directly processes them.
7. Processing may involve calling `BL Library` functions or triggering `API Library` calls (based on `ActionDefinitions` in the UIxAAS output).
8. API responses lead to updates in the `Custom State Store` via `muther-brane`.
9. State changes notify `muther-brane`, which updates the properties of affected `jellicule` components, causing the UI to reactively re-render.

## Technology Choices

- **Language:** TypeScript
- **UI Library (`jellicule`):** Standard Web Components (implementation detail of `jellicule`, e.g., using Lit, Stencil, or vanilla JS)
- **`jcule` State Management:** Custom observable store
- **`jcule` Internal Communication:** Custom event bus (`insystema-vega`)

## Package Structure

Each WebAXP package follows a consistent directory structure:

```
{package-name}/
├── app/                      # Source code and demo application
│   ├── src/                  # Source code
│   ├── environment/          # Environment configuration
│   ├── tests/                # Test files
│   └── ...
├── cicda/                    # CI/CD configuration
│   ├── environment/          # Environment configuration for CI/CD
│   └── tests/                # Test runners and configuration
├── develop/                  # Optional developer tools
│   └── environment/          # Environment configuration for development
├── dist/                     # Distribution files
│   └── environment/          # Environment configuration for distribution
└── docs/                     # Documentation
    ├── api/                  # API documentation
    ├── guides/               # Usage guides
    ├── examples/             # Example implementations
    └── specifications/       # Detailed specifications
```

## Implementation Guidelines

### Business Logic Controller (jcule)

- Implement the BLC pattern for managing application state
- Use a declarative approach to UI-to-API mapping
- Implement an event bus for component communication
- Support multi-tab synchronization
- Handle routing and navigation
- Manage API communication

### UI Component Library (jellicule)

- Create "dumb" components that focus on rendering and user interaction
- Emit events to the BLC for all user interactions
- Accept state as props, don't fetch it directly
- Do not communicate directly with other components
- Implement accessibility features
- Support theming and customization

## Conclusion

WebAXP provides a comprehensive framework for building Progressive Web Applications based on the WebAX architecture. By combining jcule and jellicule with additional PWA-specific functionality, WebAXP enables developers to create modern, performant, and accessible web applications.
