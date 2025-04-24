# Contributing to WebAXP

Thank you for your interest in contributing to WebAXP! This document provides guidelines and instructions for contributing to the WebAXP project.

## Code of Conduct

Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) to help us maintain a healthy and welcoming community.

## How to Contribute

There are many ways to contribute to WebAXP:

- Reporting bugs
- Suggesting enhancements
- Writing documentation
- Improving tests
- Submitting pull requests

### Reporting Bugs

If you find a bug in WebAXP, please report it by creating an issue in the GitHub repository. When reporting a bug, please include:

- A clear and descriptive title
- Steps to reproduce the bug
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment information (browser, OS, WebAXP version)

### Suggesting Enhancements

If you have an idea for an enhancement, please create an issue in the GitHub repository. When suggesting an enhancement, please include:

- A clear and descriptive title
- A detailed description of the enhancement
- The motivation for the enhancement
- Examples of how the enhancement would be used
- Any relevant references or resources

### Writing Documentation

Documentation is crucial for the success of WebAXP. If you find any gaps in the documentation or have suggestions for improvement, please create an issue or submit a pull request.

### Improving Tests

Tests help ensure the quality and reliability of WebAXP. If you find any gaps in the test coverage or have suggestions for improvement, please create an issue or submit a pull request.

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes
4. Run tests to ensure your changes don't break existing functionality
5. Submit a pull request

## Development Setup

To set up the development environment:

1. Clone the repository:

```bash
git clone https://github.com/webax/webaxp.git
cd webaxp
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Project Structure

WebAXP follows a specific project structure:

```
webaxp/
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
│   ├── api/                  # API documentation
│   ├── guides/               # Usage guides
│   ├── examples/             # Example implementations
│   └── specifications/       # Detailed specifications
├── package.json              # Package configuration
├── README.md                 # Package overview
└── LICENSE                   # License information
```

## Coding Conventions

WebAXP follows specific coding conventions:

- **TypeScript**: Use TypeScript for all new code
- **Formatting**: Use Prettier for code formatting
- **Linting**: Use ESLint for code linting
- **Testing**: Use Jest for testing
- **Documentation**: Use JSDoc for code documentation

For more details, see the [Coding Style Guide](./docs/conventions/CODING-STYLE.md).

## Commit Guidelines

WebAXP follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Examples

```
feat(router): add support for nested routes

This adds support for nested routes in the router, allowing for more complex routing scenarios.

Closes #123
```

```
fix(state): fix memory leak in store

The store was not properly cleaning up subscriptions, leading to a memory leak.

Fixes #456
```

## Pull Request Process

1. Ensure your code follows the coding conventions
2. Update the documentation if necessary
3. Add tests for your changes
4. Ensure all tests pass
5. Submit a pull request

## Release Process

WebAXP follows semantic versioning:

- **MAJOR**: Incompatible API changes
- **MINOR**: Backwards-compatible functionality additions
- **PATCH**: Backwards-compatible bug fixes

The release process is as follows:

1. Update the version in package.json
2. Update the CHANGELOG.md
3. Create a new release on GitHub
4. Publish the package to NPM

## License

By contributing to WebAXP, you agree that your contributions will be licensed under the project's [MIT License](./LICENSE).
