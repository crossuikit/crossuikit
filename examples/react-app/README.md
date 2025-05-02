# CrossUI Kit - React + Vite Example

A modern React application using Vite for blazing-fast development experience.

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

- `src/components/` - React components
  - `CrossUIMock.tsx` - Mock implementation of CrossUI Kit components
- `src/types/` - TypeScript type definitions
  - `crossui.d.ts` - CrossUI Kit type declarations
- `src/` - Application source
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point

## Features

### Theme System

- Client-side theme management
- Instant theme switching
- System theme detection
- Local storage persistence

### Components

- ThemeProvider for global theme context
- Button components (Primary/Secondary)
- Interactive theme demo
- Real-time theme preview

### Development

Development server with HMR:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

### Testing Steps

1. Theme Management:

   - Launch the application
   - Click theme toggle button
   - Verify instant theme changes
   - Reload page to test persistence

2. Component Testing:

   - Test button interactions
   - Check hover/focus states
   - Verify proper styling in both themes
   - Test button variants functionality

3. Theme Demo Section:
   - Check color palette display
   - Test theme switch effect
   - Verify component spacing
   - Check responsive behavior

## Technical Details

- Built with Vite 5.x
- React 19 with TypeScript
- ESLint configuration for code quality
- Development-focused mock implementation
- Hot Module Replacement enabled

## Development Notes

- Uses standalone ESLint configuration
- TypeScript for enhanced type safety
- CSS modules for component styling
- Mock implementation for easier development
