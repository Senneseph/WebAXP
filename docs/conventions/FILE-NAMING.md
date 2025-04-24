# WebAXP File Naming Conventions

This document outlines the file naming conventions for WebAXP applications and packages.

## Overview

Consistent file naming is essential for maintainability and understanding of the codebase. WebAXP follows a set of conventions for different types of files to ensure consistency across the ecosystem.

## General Principles

- Use descriptive names that reflect the purpose of the file
- Keep names concise but clear
- Use appropriate casing for different types of files
- Use consistent suffixes for different types of files
- Group related files together

## File Extensions

- **TypeScript**: Use `.ts` for TypeScript files
- **TypeScript with JSX**: Use `.tsx` for TypeScript files with JSX
- **JavaScript**: Use `.js` for JavaScript files (avoid when possible)
- **JavaScript with JSX**: Use `.jsx` for JavaScript files with JSX (avoid when possible)
- **CSS**: Use `.css` for CSS files
- **SCSS**: Use `.scss` for SCSS files
- **JSON**: Use `.json` for JSON files
- **Markdown**: Use `.md` for Markdown files
- **HTML**: Use `.html` for HTML files
- **SVG**: Use `.svg` for SVG files

## File Naming by Type

### TypeScript/JavaScript Files

Use kebab-case for utility, service, and helper files:

```
// Good
user-service.ts
api-client.ts
date-utils.ts

// Bad
userService.ts
ApiClient.ts
dateUtils.ts
```

### React Components

Use PascalCase for component files:

```
// Good
UserProfile.tsx
ProductCard.tsx
NavigationBar.tsx

// Bad
user-profile.tsx
productCard.tsx
navigation-bar.tsx
```

### Test Files

Use the same name as the file being tested with a `.test` or `.spec` suffix:

```
// Good
user-service.test.ts
UserProfile.test.tsx
date-utils.spec.ts

// Bad
test-user-service.ts
UserProfileTest.tsx
dateUtilsTest.ts
```

### Style Files

Use the same name as the component with a `.styles` suffix:

```
// Good
UserProfile.styles.ts
ProductCard.styles.scss
NavigationBar.styles.css

// Bad
UserProfileStyles.ts
product-card-styles.scss
navigationBarStyles.css
```

### Type Definition Files

Use the same name as the file with a `.types` suffix:

```
// Good
user-service.types.ts
UserProfile.types.ts
api-client.types.ts

// Bad
userServiceTypes.ts
UserProfileTypes.ts
apiClientTypes.ts
```

### Barrel Files

Use `index.ts` for barrel files that re-export from a directory:

```
// Good
components/index.ts
utils/index.ts
api/index.ts

// Bad
components/components.ts
utils/utils.ts
api/api.ts
```

### Hook Files

Use camelCase with a `use` prefix for hook files:

```
// Good
useUserProfile.ts
useProductData.ts
useAuthentication.ts

// Bad
UserProfileHook.ts
product-data-hook.ts
use-authentication.ts
```

### Context Files

Use PascalCase with a `Context` suffix for context files:

```
// Good
UserContext.ts
ThemeContext.ts
AuthContext.ts

// Bad
userContext.ts
theme-context.ts
auth_context.ts
```

### Higher-Order Components (HOCs)

Use camelCase with a `with` prefix for HOC files:

```
// Good
withAuthentication.ts
withTheme.ts
withLogging.ts

// Bad
WithAuthentication.ts
theme-hoc.ts
logging_hoc.ts
```

## Directory Naming

Use kebab-case for directory names:

```
// Good
components/
user-profiles/
api-clients/

// Bad
Components/
userProfiles/
API_Clients/
```

## Special Files

- **README.md**: Documentation for the directory
- **LICENSE**: License information
- **CHANGELOG.md**: Change log
- **CONTRIBUTING.md**: Contribution guidelines
- **CODE_OF_CONDUCT.md**: Code of conduct
- **.gitignore**: Git ignore file
- **.eslintrc.js**: ESLint configuration
- **.prettierrc**: Prettier configuration
- **tsconfig.json**: TypeScript configuration
- **package.json**: Package configuration
- **rollup.config.js**: Rollup configuration
- **jest.config.js**: Jest configuration
- **docker-compose.yml**: Docker Compose configuration
- **Dockerfile**: Docker configuration

## File Organization

Group related files together in the same directory. For example, a component might have these files:

```
components/user-profile/
├── UserProfile.tsx
├── UserProfile.test.tsx
├── UserProfile.styles.ts
├── UserProfile.types.ts
└── index.ts
```

## Examples

### Component Example

```
// UserProfile.tsx
import React from 'react';
import { UserProfileProps } from './UserProfile.types';
import { useStyles } from './UserProfile.styles';

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.email}>{user.email}</p>
    </div>
  );
};
```

```
// UserProfile.types.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserProfileProps {
  user: User;
}
```

```
// UserProfile.styles.ts
import { createStyles } from '@net.webax/jellicule';

export const useStyles = createStyles({
  container: {
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  email: {
    fontSize: '14px',
    color: '#666',
  },
});
```

```
// UserProfile.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserProfile } from './UserProfile';

describe('UserProfile', () => {
  it('renders user name and email', () => {
    const user = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    };

    render(<UserProfile user={user} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });
});
```

```
// index.ts
export * from './UserProfile';
export * from './UserProfile.types';
```

### Utility Example

```
// date-utils.ts
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

export const parseDate = (dateString: string): Date => {
  return new Date(dateString);
};
```

```
// date-utils.test.ts
import { formatDate, parseDate } from './date-utils';

describe('date-utils', () => {
  describe('formatDate', () => {
    it('formats a date as a string', () => {
      const date = new Date('2023-01-01');
      expect(formatDate(date)).toMatch(/1\/1\/2023|01\/01\/2023/);
    });
  });

  describe('parseDate', () => {
    it('parses a string as a date', () => {
      const dateString = '2023-01-01';
      const date = parseDate(dateString);
      expect(date).toBeInstanceOf(Date);
      expect(date.getFullYear()).toBe(2023);
      expect(date.getMonth()).toBe(0);
      expect(date.getDate()).toBe(1);
    });
  });
});
```

## Conclusion

Following these file naming conventions ensures consistency across WebAXP applications and packages, making it easier for developers to understand and maintain the codebase. It also aligns with the WebAX architecture principles of maintainability and clarity.
