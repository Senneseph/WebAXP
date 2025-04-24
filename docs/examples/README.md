# WebAXP Examples

This directory contains example applications built with WebAXP. These examples demonstrate how to use WebAXP to build different types of applications.

## Basic Examples

- **Basic App**: A simple WebAXP application that demonstrates the basic features of WebAXP
- **Todo App**: A todo list application that demonstrates state management and persistence
- **API Integration**: An application that demonstrates API integration with WebAXP

## Advanced Examples

- **E-commerce App**: An e-commerce application that demonstrates complex state management, routing, and API integration
- **Dashboard App**: A dashboard application that demonstrates data visualization and real-time updates
- **PWA Example**: A Progressive Web App that demonstrates offline support, installation, and push notifications

## Example Structure

Each example follows the standard WebAXP project structure:

```
example-name/
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
│   ├── environment/          # Environment configuration for CI/CD
│   └── tests/                # Test runners and configuration
├── develop/                  # Optional developer tools
│   └── environment/          # Environment configuration for development
├── dist/                     # Distribution files (generated)
├── docs/                     # Documentation
├── package.json              # Package configuration
└── README.md                 # Package overview
```

## Running the Examples

To run an example:

1. Clone the repository:

```bash
git clone https://github.com/webax/webaxp-examples.git
cd webaxp-examples/example-name
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to http://localhost:3000

## Contributing

Contributions to these examples are welcome. Please see the [CONTRIBUTING.md](../../CONTRIBUTING.md) file for details on how to contribute.

## License

These examples are licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.
