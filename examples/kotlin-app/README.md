# CrossUI Kit - Android/Kotlin Example

Native Android implementation of CrossUI Kit demonstrating seamless theme integration with Android's Material Design system.

## Setup Requirements

- Android Studio Arctic Fox or newer
- JDK 17 or higher
- Android SDK with minimum API level 24 (Android 8.0)
- Android device or emulator

## Project Structure

- `src/main/kotlin/com/crossui/demo/`
  - `MainActivity.kt` - Main activity implementation
  - `CrossUIKitMock.kt` - Mock implementation of CrossUI Kit
- `src/main/res/layout/`
  - `activity_main.xml` - Main layout with theme demo

## Features

### Theme Integration

- Native Android theme support
- Dark/Light mode switching
- System theme awareness
- Theme persistence using SharedPreferences

### Components

- Material Design-based buttons
- Custom theme toggle component
- Color palette demonstration
- Responsive layout support

## Building and Running

1. Open project in Android Studio:

   - Open Android Studio
   - Select "Open an existing Android Studio project"
   - Navigate to `kotlin-app` directory

2. Build the project:

   - Wait for Gradle sync to complete
   - Build > Make Project (or Ctrl/Cmd + F9)

3. Run the application:
   - Select your device/emulator
   - Click Run (or Shift + F10)

## Testing Guide

1. Theme System:

   - Launch app on device/emulator
   - Test theme toggle functionality
   - Verify system theme detection
   - Check theme persistence after app restart

2. UI Components:

   - Test primary button interactions
   - Test secondary button interactions
   - Verify ripple effects
   - Check accessibility features

3. Theme Demo Features:
   - Verify color palette display
   - Test dark/light mode transitions
   - Check layout on different screen sizes
   - Verify proper Material Design theming

## Development Notes

- Uses Kotlin 1.9+
- Material Design 3 components
- ViewBinding for view access
- SharedPreferences for theme persistence
- Mock implementation for development purposes

## Troubleshooting

Common issues and solutions:

1. Gradle Sync Failed

   - File > Invalidate Caches / Restart
   - Sync project with Gradle files

2. Build Errors

   - Check Android SDK installation
   - Verify JDK version
   - Clean and rebuild project

3. Runtime Issues
   - Clear app data
   - Check logcat for detailed errors
   - Verify device API level
