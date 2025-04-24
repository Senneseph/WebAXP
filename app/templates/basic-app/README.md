# WebAXP Basic App

This is a basic WebAXP application template. It provides a starting point for building web applications using the WebAX architecture.

## Features

- TypeScript support
- Progressive Web App (PWA) capabilities
- API integration with OpenAPI
- State management with WebAXP State
- Routing with WebAXP Router
- UI components with jellicule
- Business logic with jcule

## Getting Started

### Prerequisites

- Node.js 14 or later
- npm 6 or later
- Docker (optional, for containerized development)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/webax/webaxp-basic-app.git
cd webaxp-basic-app
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

### Docker

To run the application in a Docker container:

```bash
npm run start
```

## Project Structure

```
webaxp-basic-app/
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

## Available Scripts

- `npm run build`: Build the application
- `npm run test`: Run tests
- `npm run lint`: Lint the code
- `npm run dev`: Start the development server
- `npm run start`: Start the application in a Docker container

## Customization

### Changing the API

1. Update the OpenAPI specification in `app/src/api/openapi.yaml`
2. The API client will be automatically generated

### Adding New Views

1. Create a new view component in `app/src/views`
2. Add a new route in `app/src/index.ts`

### Adding New Components

1. Create a new component in `app/src/components`
2. Import and use the component in your views

## Deployment

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Deploying as a PWA

The application is configured as a Progressive Web App (PWA) and can be installed on supported devices.

## Learn More

- [WebAXP Documentation](https://webax.net/webaxp/docs)
- [jcule Documentation](https://webax.net/jcule/docs)
- [jellicule Documentation](https://webax.net/jellicule/docs)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
