# CrossUI Kit - iOS/Swift Example

SwiftUI implementation of CrossUI Kit showcasing native iOS theme integration and components.

## Requirements

- Xcode 15.0 or later
- iOS 15.0 or later
- macOS for development

## Project Structure

- `Sources/`
  - `CrossUIKitDemoApp.swift` - Main app entry point
- `Views/`
  - `ContentView.swift` - Main view implementation with theme demos

## Features

### Theme System

- Native iOS dark/light mode support
- System theme integration
- Real-time theme switching
- Theme persistence with UserDefaults

### Components

- SwiftUI-native buttons
- Custom theme toggle
- Dynamic color palette demo
- Adaptive layout support

## Building and Running

1. Open in Xcode:

   ```bash
   cd swift-app
   xed .
   ```

   Or open `Package.swift` in Xcode

2. Configure:

   - Select your development team
   - Choose a target device/simulator
   - Verify deployment target (iOS 15.0+)

3. Run:
   - Press Cmd + R or click the Play button
   - Select device/simulator if prompted

## Testing Instructions

1. Theme Testing:

   - Launch app on device/simulator
   - Toggle between light/dark themes
   - Test system theme integration
   - Verify theme persistence
   - Check theme change animations

2. Component Verification:

   - Test button tap interactions
   - Verify button style variants
   - Check haptic feedback
   - Test accessibility features

3. Layout Testing:
   - Test on different device sizes
   - Verify adaptive layout
   - Check Dynamic Type support
   - Test rotation handling

## Development Notes

- Swift Package Manager for dependencies
- SwiftUI for modern UI implementation
- Combine for reactive updates
- Mock implementation for development
- Uses latest Swift concurrency features

## Troubleshooting

1. Build Issues:

   - Clean build folder (Cmd + Shift + K)
   - Clean derived data
   - Re-resolve packages

2. Runtime Problems:

   - Check iOS version compatibility
   - Verify simulator settings
   - Reset simulator state if needed

3. SwiftUI Preview Issues:
   - Restart Xcode
   - Clear derived data
   - Rebuild project
