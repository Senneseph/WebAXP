# WebAXP CLI Specification

## Overview

The WebAXP CLI (Command Line Interface) is a tool for creating, developing, and managing WebAXP applications. It provides a set of commands for common tasks such as creating new applications, generating components, and building for production.

## Installation

The WebAXP CLI can be installed globally using npm:

```bash
npm install -g @net.webax/webaxp-cli
```

## Commands

### Create a New Application

```bash
webaxp create <app-name> [options]
```

Creates a new WebAXP application with the specified name.

#### Options

- `--template <template-name>`: Specify a template to use (default: basic)
- `--directory <directory>`: Specify a directory for the application (default: app-name)
- `--package-manager <npm|yarn|pnpm>`: Specify a package manager (default: npm)
- `--skip-install`: Skip installing dependencies
- `--skip-git`: Skip initializing a git repository
- `--verbose`: Show verbose output

#### Available Templates

- `basic`: A basic WebAXP application
- `dashboard`: A WebAXP application with a dashboard layout
- `e-commerce`: A WebAXP application with e-commerce features
- `blog`: A WebAXP application with blog features

#### Example

```bash
webaxp create my-app --template dashboard --package-manager yarn
```

### Generate a Component

```bash
webaxp generate component <component-name> [options]
```

Generates a new component with the specified name.

#### Options

- `--directory <directory>`: Specify a directory for the component (default: components)
- `--style <css|scss|styled-components>`: Specify a styling method (default: css)
- `--test`: Generate a test file
- `--story`: Generate a Storybook story file
- `--verbose`: Show verbose output

#### Example

```bash
webaxp generate component UserProfile --directory features/user --style scss --test --story
```

### Generate a View

```bash
webaxp generate view <view-name> [options]
```

Generates a new view with the specified name.

#### Options

- `--directory <directory>`: Specify a directory for the view (default: views)
- `--style <css|scss|styled-components>`: Specify a styling method (default: css)
- `--test`: Generate a test file
- `--story`: Generate a Storybook story file
- `--verbose`: Show verbose output

#### Example

```bash
webaxp generate view UserDashboard --directory features/user --style scss --test
```

### Generate an API Client

```bash
webaxp generate api-client <api-name> [options]
```

Generates a new API client with the specified name.

#### Options

- `--spec <spec-file>`: Specify an OpenAPI specification file
- `--directory <directory>`: Specify a directory for the API client (default: api)
- `--verbose`: Show verbose output

#### Example

```bash
webaxp generate api-client UserApi --spec api/user-api.yaml
```

### Build the Application

```bash
webaxp build [options]
```

Builds the application for production.

#### Options

- `--output <directory>`: Specify an output directory (default: dist)
- `--analyze`: Analyze the bundle size
- `--verbose`: Show verbose output

#### Example

```bash
webaxp build --output build --analyze
```

### Start the Development Server

```bash
webaxp start [options]
```

Starts the development server.

#### Options

- `--port <port>`: Specify a port (default: 3000)
- `--host <host>`: Specify a host (default: localhost)
- `--open`: Open the browser
- `--verbose`: Show verbose output

#### Example

```bash
webaxp start --port 8080 --open
```

### Test the Application

```bash
webaxp test [options]
```

Runs tests for the application.

#### Options

- `--watch`: Watch for changes
- `--coverage`: Generate coverage report
- `--verbose`: Show verbose output

#### Example

```bash
webaxp test --watch --coverage
```

### Lint the Application

```bash
webaxp lint [options]
```

Lints the application.

#### Options

- `--fix`: Fix linting errors
- `--verbose`: Show verbose output

#### Example

```bash
webaxp lint --fix
```

### Eject from WebAXP CLI

```bash
webaxp eject
```

Ejects from the WebAXP CLI, exposing all the configuration files.

**Warning**: This is a one-way operation. Once you eject, you can't go back!

## Configuration

The WebAXP CLI can be configured using a `webaxp.config.js` file in the root of the project:

```javascript
module.exports = {
  // Project configuration
  project: {
    name: 'my-app',
    version: '0.1.0',
    description: 'My WebAXP application',
  },
  // Build configuration
  build: {
    output: 'dist',
    analyze: false,
    sourceMaps: true,
  },
  // Development server configuration
  devServer: {
    port: 3000,
    host: 'localhost',
    open: true,
  },
  // Test configuration
  test: {
    coverage: true,
    watch: false,
  },
  // Lint configuration
  lint: {
    fix: false,
  },
  // Generator configuration
  generator: {
    component: {
      directory: 'components',
      style: 'css',
      test: true,
      story: false,
    },
    view: {
      directory: 'views',
      style: 'css',
      test: true,
      story: false,
    },
    apiClient: {
      directory: 'api',
    },
  },
};
```

## Plugins

The WebAXP CLI supports plugins to extend its functionality. Plugins can add new commands, modify existing commands, or add new features.

### Installing Plugins

Plugins can be installed using npm:

```bash
npm install --save-dev @net.webax/webaxp-plugin-name
```

### Using Plugins

Plugins are automatically detected and loaded by the WebAXP CLI. No additional configuration is required.

### Creating Plugins

Plugins are npm packages with a name that starts with `webaxp-plugin-`. They should export a function that takes a `webaxp` object and returns a modified `webaxp` object:

```javascript
module.exports = function(webaxp) {
  // Add a new command
  webaxp.commands.push({
    name: 'my-command',
    description: 'My custom command',
    run: async (args) => {
      // Command implementation
    },
  });

  // Return the modified webaxp object
  return webaxp;
};
```

## Conclusion

The WebAXP CLI provides a comprehensive set of tools for creating, developing, and managing WebAXP applications. It streamlines common tasks and provides a consistent development experience across projects.
