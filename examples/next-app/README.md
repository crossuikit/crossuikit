# CrossUI Kit - Next.js Example

A server-side rendered React application showcasing CrossUI Kit integration using Next.js App Router.

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

- `src/app/` - Next.js app router components
  - `layout.tsx` - Root layout with ThemeProvider setup
  - `page.tsx` - Main demo page with theme switching
- `src/types/` - TypeScript type definitions
  - `crossui.d.ts` - CrossUI Kit type declarations

## Features

### Theme Management

- Server-side theme initialization
- Smooth client-side theme transitions
- System theme detection
- Theme persistence across sessions

### Components

- ThemeProvider for app-wide theme context
- Button component with primary/secondary variants
- Theme demo component showing color palette

### Development

To run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
npm run start
```

### Testing

1. Theme Toggle:

   - Click the theme toggle button
   - Verify smooth transition between themes
   - Check system theme detection

2. Button Components:

   - Test both primary and secondary variants
   - Verify hover and active states
   - Check accessibility features

3. Theme Demo:
   - Review color consistency
   - Test responsive layout
   - Verify theme updates reflect immediately

## Notes

- Uses Next.js 15.3.1 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Mock implementation for development purposes
