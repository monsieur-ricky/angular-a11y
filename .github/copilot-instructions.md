You are an expert in Angular, SASS, TypeScript and NgRx Signal Store, focusing on scalable web development.

Key Principles:

- Provide clear, precise Angular and TypeScript examples.
- Apply immutability and pure functions when applicable.
- Favor component composition for modularity.
- Use meaningful variable names (e.g., `isActive`, `hasPermission`).
- Use kebab-case for file names (e.g., `user-profile.component.ts`).
- Prefer named exports for components, services, and utilities.
- Always apply Semantic HTML when generating components and HTML snippets.

TypeScript & Angular Rules:

- Define data structures with interfaces for type safety.
- Avoid `any` type, utilize the type system fully.
- Organize files: imports, definition, implementation.
- Use template strings for multi-line literals.
- Utilize optional chaining and nullish coalescing.
- Use standalone components.
- Leverage Angular's signals system for efficient state management and reactive programming.
- Use the `inject` function for injecting services directly within component, directive or service logic, enhancing clarity and reducing boilerplate.

File Naming Conventions:

- `*.component.ts` for Components
- `*.service.ts` for Services
- `*.directive.ts` for Directives
- `*.pipe.ts` for Pipes
- `*.spec.ts` for Tests
- All files use kebab-case.

Code Style:

- Use single quotes for string literals.
- Indent with 2 spaces.
- Ensure clean code with no trailing whitespace.
- Use `const` for immutable variables.
- Use `readonly` for immutable class properties.
- Use `private` for private class properties.
- Use `private readonly` for private and immutable class properties.
- Use template strings for string interpolation.
- Use a B.E.M approach when creating components and applying styles.


Angular-Specific Guidelines:

- Follow a Domain-Driven Design (DDD) approach.
- Follow the current folder structure.
- Always generate code using Angular's latest version (19).
- Use async pipe for observables in templates.
- Implement lazy loading for feature components.
- Utilize deferrable views for optimizing component rendering, deferring non-critical views until necessary.
- Incorporate Angular's Signals system to enhance reactive programming and state management efficiency.
- Use the `NgOptimizedImage` directive for efficient image loading, improving performance and preventing broken links.
- Use control flow syntax instead of `ngif`, `ngFor`, `ngSwitch` statements.
- Always generate components and directives with `ChangeDetectionStrategy.OnPush`.
- Always generate components and directives with the project's selector prefix `moxi`.
- Always generate components with separate html template and scss file.
- Use NgRx SignalStore for state management.
- Use Signal inputs instead of `@Input()`
- Use Signal View Queries instead of `@ViewChild` and `@ViewChildren`
- Use Signal Content Queries instead of `@ContentChild` and `@ContentChildren`
- Don't directly call functions in the templates, use Pipes or Signals instead.

Error Handling and Validation:

- Use proper error handling in services and components.
- Use custom error types or factories.
- Implement Angular form validation or custom validators.

Testing:

- Use Jest for unit tests.
- Follow the Arrange-Act-Assert pattern for tests.

Performance Optimization:

- Use pure pipes for expensive computations.
- Avoid direct DOM manipulation; use Angular’s templating system.
- Optimize rendering performance by deferring non-essential views.
- Use Angular’s signals system to manage state efficiently and reduce unnecessary re-renders.
- Use the `NgOptimizedImage` directive to enhance image loading and performance.
- Use `@defer` blocks when applicable.

Security:

- Prevent XSS with Angular’s sanitization; avoid using innerHTML.
- Sanitize dynamic content with built-in tools.

Key Conventions:

- Use Angular’s DI system and the `inject` function for service injection.
- Focus on reusability and modularity.
- Follow Angular’s style guide.
- Optimize with Angular's best practices.
- Focus on optimizing Web Vitals like LCP, INP, and CLS.
- Focus on Accessibility (a11y) best practices.
- Ensure Semantic HTML.

Reference:

- Refer to Angular’s official documentation for best practices in Components, Services, and Modules (check the project's `.documentation/angular` folder for references).
