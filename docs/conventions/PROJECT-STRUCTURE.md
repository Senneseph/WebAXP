# WebAXP Project Structure

This document provides detailed information about the standard project structure for WebAXP applications and packages.

## Overview

WebAXP applications and packages follow a consistent directory structure to ensure maintainability, scalability, and ease of understanding. This structure separates concerns into distinct directories and follows the WebAX architecture principles.

## Standard Directory Structure

```plaintext
{project-name}/
├── app/                      # Asset project package (source code)
│   ├── src/                  # Source code
│   │   ├── index.ts          # Main entry point
│   │   ├── components/       # UI components
│   │   ├── views/            # Page views
│   │   ├── state/            # State management
│   │   ├── api/              # API integration
│   │   ├── utils/            # Utility functions
│   │   └── types/            # TypeScript type definitions
│   ├── environment/          # Environment configuration
│   │   ├── development.env   # Development environment variables
│   │   ├── production.env    # Production environment variables
│   │   └── test.env          # Test environment variables
│   ├── tests/                # Test files
│   │   ├── unit/             # Unit tests
│   │   ├── integration/      # Integration tests
│   │   └── e2e/              # End-to-end tests
│   └── assets/               # Static assets
│       ├── images/           # Image assets
│       ├── fonts/            # Font assets
│       └── icons/            # Icon assets
├── cicda/                    # CI/CD configuration
│   ├── build/                # Build configuration
│   │   ├── rollup.config.js  # Rollup configuration
│   │   ├── tsconfig.json     # TypeScript configuration
│   │   ├── jest.config.js    # Jest configuration
│   │   └── .eslintrc.js      # ESLint configuration
│   ├── environment/          # Environment configuration for CI/CD
│   │   ├── Dockerfile        # Docker configuration
│   │   └── docker-compose.yml # Docker Compose configuration
│   └── tests/                # Test runners and configuration
│       ├── jest.setup.js     # Jest setup
│       └── jest.teardown.js  # Jest teardown
├── develop/                  # Optional developer tools
│   ├── scripts/              # Development scripts
│   │   ├── setup.js          # Setup script
│   │   └── clean.js          # Clean script
│   └── environment/          # Environment configuration for development
│       ├── Dockerfile.dev    # Development Docker configuration
│       └── docker-compose.dev.yml # Development Docker Compose configuration
├── dist/                     # Distribution files (generated)
│   ├── package.json          # Package configuration
│   ├── index.js              # CommonJS bundle
│   ├── index.esm.js          # ES Module bundle
│   ├── index.d.ts            # TypeScript declarations
│   └── index.min.js          # Minified bundle
├── docs/                     # Documentation
│   ├── api/                  # API documentation
│   │   ├── README.md         # API documentation overview
│   │   └── components/       # Component API documentation
│   ├── guides/               # Usage guides
│   │   ├── getting-started.md # Getting started guide
│   │   └── advanced-usage.md # Advanced usage guide
│   ├── examples/             # Example implementations
│   │   ├── basic/            # Basic example
│   │   └── advanced/         # Advanced example
│   └── specifications/       # Detailed specifications
│       ├── architecture.md   # Architecture specification
│       └── api.md            # API specification
├── default.env               # Default environment variables
├── .env                      # Environment variables (gitignored)
├── README.md                 # Project overview
└── LICENSE                   # License information
```

## Directory Descriptions

### app/

The `app` directory (which stands for "asset project package", not "application") contains the source code for your assets, whether they're PWAs, libraries, or other types of packages. This naming convention explains why both applications and libraries can be placed in this directory - they're all considered assets in the WebAXP ecosystem. This is where most of the development work happens.

- **src/**: Contains the main source code for the application or package.
  - **index.ts**: The main entry point for the application or package.
  - **components/**: Contains reusable UI components.
  - **views/**: Contains page-level components or views.
  - **state/**: Contains state management code.
  - **api/**: Contains API integration code.
  - **utils/**: Contains utility functions.
  - **types/**: Contains TypeScript type definitions.

- **environment/**: Contains environment-specific configuration files.
  - **development.env**: Environment variables for development.
  - **production.env**: Environment variables for production.
  - **test.env**: Environment variables for testing.

- **tests/**: Contains test files.
  - **unit/**: Contains unit tests.
  - **integration/**: Contains integration tests.
  - **e2e/**: Contains end-to-end tests.

- **assets/**: Contains static assets.
  - **images/**: Contains image assets.
  - **fonts/**: Contains font assets.
  - **icons/**: Contains icon assets.

### cicda/

The `cicda` directory contains CI/CD configuration files. This is where build, test, and deployment configuration lives.

- **build/**: Contains build configuration files.
  - **rollup.config.js**: Rollup configuration for bundling.
  - **tsconfig.json**: TypeScript configuration.
  - **jest.config.js**: Jest configuration for testing.
  - **.eslintrc.js**: ESLint configuration for linting.

- **environment/**: Contains environment configuration for CI/CD.
  - **Dockerfile**: Docker configuration for production.
  - **docker-compose.yml**: Docker Compose configuration for production.

- **tests/**: Contains test runners and configuration.
  - **jest.setup.js**: Jest setup file.
  - **jest.teardown.js**: Jest teardown file.

### develop/

The `develop` directory contains optional developer tools. This is where development-specific scripts and configuration live.

- **scripts/**: Contains development scripts.
  - **setup.js**: Setup script for development.
  - **clean.js**: Clean script for development.

- **environment/**: Contains environment configuration for development.
  - **Dockerfile.dev**: Docker configuration for development.
  - **docker-compose.dev.yml**: Docker Compose configuration for development.

### dist/

The `dist` directory contains distribution files generated by the build process. This is where the compiled and bundled code lives, along with the package.json file for publishing.

- **package.json**: Package configuration for publishing.
- **index.js**: CommonJS bundle.
- **index.esm.js**: ES Module bundle.
- **index.d.ts**: TypeScript declarations.
- **index.min.js**: Minified bundle.

### Environment Files

The project root contains environment files that control the application's configuration:

- **default.env**: Default environment variables that are committed to the repository. These provide fallback values and documentation for required environment variables.
- **.env**: Custom environment variables that override the defaults. This file is typically gitignored and contains environment-specific or sensitive information.

These environment files are used by docker-compose.yaml and other configuration files to control the application's behavior. The `/cicda` directory and other components are configured from these root environment files.

### docs/

The `docs` directory contains documentation for the application or package. This is where all documentation lives.

- **api/**: Contains API documentation.
  - **README.md**: API documentation overview.
  - **components/**: Component API documentation.

- **guides/**: Contains usage guides.
  - **getting-started.md**: Getting started guide.
  - **advanced-usage.md**: Advanced usage guide.

- **examples/**: Contains example implementations.
  - **basic/**: Basic example.
  - **advanced/**: Advanced example.

- **specifications/**: Contains detailed specifications.
  - **architecture.md**: Architecture specification.
  - **api.md**: API specification.

## Application vs. Package Structure

The structure described above applies to both applications and packages, with some differences:

### Applications

- Applications typically have more views and fewer exported components.
- Applications may have additional directories like `public/` for public assets.
- Applications may have a `server/` directory for server-side code.

### Packages

- Packages typically have more exported components and fewer views.
- Packages focus on reusability and may have additional documentation.
- Packages may have a `playground/` directory for testing and development.

## Monorepo Structure

For monorepos containing multiple packages, the structure is slightly different:

```plaintext
monorepo/
├── packages/
│   ├── package1/
│   │   ├── app/
│   │   ├── cicda/
│   │   ├── develop/
│   │   ├── dist/
│   │   │   └── package.json
│   │   ├── docs/
│   │   ├── default.env
│   │   ├── .env
│   │   └── README.md
│   ├── package2/
│   │   ├── app/
│   │   ├── cicda/
│   │   ├── develop/
│   │   ├── dist/
│   │   │   └── package.json
│   │   ├── docs/
│   │   ├── default.env
│   │   ├── .env
│   │   └── README.md
│   └── ...
├── apps/
│   ├── app1/
│   │   ├── app/
│   │   ├── cicda/
│   │   ├── develop/
│   │   ├── dist/
│   │   │   └── package.json
│   │   ├── docs/
│   │   ├── default.env
│   │   ├── .env
│   │   └── README.md
│   ├── app2/
│   │   ├── app/
│   │   ├── cicda/
│   │   ├── develop/
│   │   ├── dist/
│   │   │   └── package.json
│   │   ├── docs/
│   │   ├── default.env
│   │   ├── .env
│   │   └── README.md
│   └── ...
├── package.json
├── README.md
└── LICENSE
```

## Conclusion

Following this standard project structure ensures consistency across WebAXP applications and packages, making it easier for developers to understand and maintain the codebase. It also aligns with the WebAX architecture principles of separation of concerns and maintainability.
