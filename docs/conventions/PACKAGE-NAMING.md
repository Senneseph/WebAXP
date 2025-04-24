# WebAXP Package Naming Conventions

This document outlines the naming conventions for WebAXP packages published to NPM.

## Overview

Consistent package naming is essential for creating a cohesive ecosystem of WebAXP packages. These conventions ensure that packages are easily identifiable as part of the WebAX ecosystem and prevent name collisions with other packages.

## Scope Naming

All WebAXP packages should use the `@net.webax` scope, which aligns with the webax.net domain:

```
@net.webax/{package-name}
```

### Benefits of Scoped Packages

1. **Namespace Protection**: Prevents name collisions with other packages in the NPM registry
2. **Brand Recognition**: Clearly identifies packages as part of the WebAX ecosystem
3. **Grouping**: Makes it easy to find all WebAX packages
4. **Consistency**: Aligns with the webax.net domain

## Package Naming Patterns

Package names should follow these guidelines:

1. **Use Lowercase**: All package names should be lowercase
2. **Use Hyphens**: Use hyphens to separate words, not underscores or camelCase
3. **Be Descriptive**: Names should clearly describe the package's purpose
4. **Be Concise**: Names should be as short as possible while still being descriptive

## Package Categories

WebAXP packages fall into several categories, each with its own naming convention:

### Core Packages

Core packages are the fundamental building blocks of the WebAX ecosystem. They should have simple, descriptive names:

```
@net.webax/jcule
@net.webax/jellicule
@net.webax/webaxp-core
@net.webax/webaxp-router
@net.webax/webaxp-state
@net.webax/webaxp-api
@net.webax/webaxp-pwa
```

### Extension Packages

Extension packages extend the functionality of core packages. They should use a prefix that indicates their relationship to a core package:

```
@net.webax/jcule-openapi
@net.webax/jellicule-bootstrap
@net.webax/jellicule-material
@net.webax/webaxp-auth
@net.webax/webaxp-forms
@net.webax/webaxp-i18n
```

### Tool Packages

Tool packages provide utilities for development, building, testing, and deployment. They should use a suffix that indicates they are tools:

```
@net.webax/spec-extractor
@net.webax/pwa-builder
@net.webax/image-transformer
@net.webax/api-generator
@net.webax/webaxp-cli
@net.webax/webaxp-dev-tools
```

### Integration Packages

Integration packages provide integrations with third-party services or libraries. They should use a prefix that indicates the integration:

```
@net.webax/integration-firebase
@net.webax/integration-stripe
@net.webax/integration-auth0
@net.webax/integration-supabase
```

### Template Packages

Template packages provide starter templates for WebAXP applications. They should use a prefix that indicates they are templates:

```
@net.webax/template-basic
@net.webax/template-dashboard
@net.webax/template-e-commerce
@net.webax/template-blog
```

## Version Numbering

WebAXP packages follow semantic versioning (SemVer):

```
MAJOR.MINOR.PATCH[-PRERELEASE]
```

- **MAJOR**: Incompatible API changes
- **MINOR**: Backwards-compatible functionality additions
- **PATCH**: Backwards-compatible bug fixes
- **PRERELEASE**: Alpha, beta, or release candidate versions

### Examples

- `0.1.0`: Initial development version
- `0.1.1`: Bug fix release
- `0.2.0`: New feature release
- `1.0.0`: First stable release
- `1.0.1`: Bug fix for stable release
- `1.1.0`: New feature for stable release
- `2.0.0`: Breaking change release
- `1.0.0-alpha.1`: Alpha release
- `1.0.0-beta.1`: Beta release
- `1.0.0-rc.1`: Release candidate

## Package.json Configuration

The `package.json` file should include the following fields:

```json
{
  "name": "@net.webax/package-name",
  "version": "1.0.0",
  "description": "Description of the package",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "LICENSE",
    "README.md"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/webax/package-name.git"
  },
  "keywords": [
    "webax",
    "webaxp",
    "package-name"
  ],
  "author": "WebAX Team",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/webax/package-name/issues"
  },
  "homepage": "https://webax.net/package-name",
  "publishConfig": {
    "access": "public"
  }
}
```

## Examples

Here are examples of correctly named WebAXP packages:

### Core Packages

```
@net.webax/jcule
@net.webax/jellicule
@net.webax/webaxp-core
@net.webax/webaxp-router
@net.webax/webaxp-state
@net.webax/webaxp-api
@net.webax/webaxp-pwa
```

### Extension Packages

```
@net.webax/jcule-openapi
@net.webax/jellicule-bootstrap
@net.webax/jellicule-material
@net.webax/webaxp-auth
@net.webax/webaxp-forms
@net.webax/webaxp-i18n
```

### Tool Packages

```
@net.webax/spec-extractor
@net.webax/pwa-builder
@net.webax/image-transformer
@net.webax/api-generator
@net.webax/webaxp-cli
@net.webax/webaxp-dev-tools
```

### Integration Packages

```
@net.webax/integration-firebase
@net.webax/integration-stripe
@net.webax/integration-auth0
@net.webax/integration-supabase
```

### Template Packages

```
@net.webax/template-basic
@net.webax/template-dashboard
@net.webax/template-e-commerce
@net.webax/template-blog
```

## NPM Organization

To use the `@net.webax` scope, you need to create an NPM organization:

1. Go to https://www.npmjs.com/org/create
2. Create the organization (one-time fee of $7)
3. Add team members and set permissions

## Conclusion

Following a consistent package naming convention is essential for creating a cohesive ecosystem of WebAXP packages. By using the `@net.webax` scope and following the naming patterns outlined in this document, you can ensure that your packages are easily identifiable and maintainable.
