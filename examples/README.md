# CrossUI Kit Examples

This directory contains example applications showcasing the CrossUI Kit components and theme system across different platforms.

## Available Examples

### Web Examples

1. **React + Vite Example**

   ```bash
   pnpm example:react
   ```

   A React application built with Vite showcasing CrossUI Kit components with TypeScript support.

2. **Next.js Example**
   ```bash
   pnpm example:next
   ```
   A Next.js application demonstrating SSR compatibility and theme system integration.

### Native Examples

3. **Android (Kotlin) Example**
   Located in `kotlin-app/`. Follow the README in the directory for setup instructions.

4. **iOS (Swift) Example**
   Located in `swift-app/`. Follow the README in the directory for setup instructions.

## Running Examples

1. First, ensure you've built the core package:

   ```bash
   pnpm build
   ```

2. Install dependencies in the example you want to run:

   ```bash
   cd examples/<example-directory>
   pnpm install
   ```

3. Start the development server using the corresponding script from the root:

   ```bash
   # For React example
   pnpm example:react

   # For Next.js example
   pnpm example:next
   ```

## Example Features

Each example demonstrates:

- Theme customization
- Dark mode support
- Responsive design
- Component composition
- Platform-specific optimizations

## Contributing

Feel free to add more examples or improve existing ones. Make sure to:

1. Follow the existing project structure
2. Include proper documentation
3. Add relevant tests
4. Update this README when adding new examples
