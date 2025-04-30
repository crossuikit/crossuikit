A cross-platform UI toolkit with consistent design system for web, Android, and iOS platforms.

## Features

- Consistent styling across all platforms
- Reusable components
- TypeScript support
- Responsive design
- Easy integration with third-party libraries

## Installation

### Web (npm)

```bash
npm install @crossuikit/crossuikit
```

### Android (Kotlin)

Add the dependency to your `build.gradle` file:

```groovy
dependencies {
    implementation("androidx.compose.ui:ui:1.4.0")
    implementation("androidx.compose.material:material:1.4.0")
    // Add your Crossuikit library
    implementation("com.github.crossuikit:crossuikit-android:1.0.0")
}
```

### iOS (Swift)

Add the dependency to your `Package.swift`:

```swift
dependencies: [
    // ...
    .package(url: "https://github.com/crossuikit/crossuikit.git", from: "1.0.0")
]
```

## Usage

### Web (React & TypeScript)

Import and use components directly:

```tsx
import { Button, Stepper } from "@crossuikit/crossuikit";

function MyComponent() {
  return (
    <div className="container">
      <Button variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </Button>

      <Stepper
        activeStep={0}
        steps={3}
        onChange={(step) => console.log("Step changed:", step)}
      />
    </div>
  );
}
```

### Android (Kotlin)

Use the components in your Compose activities:

```kotlin
import com.example.crossuikitandroid.Button

fun MyActivity() {
    Button(
        text = "Click Me",
        onClick = { println("Button clicked") },
        variant = ButtonVariant.Primary
    )
}
```

### iOS (Swift)

Use the components in your SwiftUI views:

```swift
import CrossUIKit

struct MyView: View {
    var body: some View {
        Button(
            title: "Click Me",
            action: { print("Button clicked") },
            variant: .primary
        )
    }
}
```

## Components

### Button

A reusable button component with consistent styling across platforms.

#### Props

- `variant`: `'primary' | 'secondary' | 'text'`
- `onClick`: `() => void`
- `children`: `React.ReactNode` or native UI elements

### Stepper

A multi-step form component for guiding users through workflows.

#### Props

- `activeStep`: `number`
- `steps`: `number`
- `onChange`: `(step: number) => void`

## Theming

### Colors

```json
{
  "colors": {
    "primary": "#4F46E5",
    "secondary": "#E0E7FF",
    "error": "#DC2626",
    "background": "#FFFFFF",
    "text": "#1F2937"
  }
}
```

### Typography

```json
{
  "typography": {
    "body": {
      "size": 16,
      "family": "system-font"
    },
    "title": {
      "size": 24,
      "weight": "bold"
    }
  }
}
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT

## Changelog

### v1.0.0

- Initial release

## Documentation

For full documentation and component references, visit our [GitHub Pages site](https://crossuikit.github.io/crossuikit/).

## Examples

### Web Example

```tsx
import { Button } from "@crossuikit/crossuikit";

function LoginForm() {
  return (
    <div className="max-w-md">
      <h2 className="text-2xl font-bold mb-4">Login Form</h2>
      <Button
        variant="primary"
        className="w-full"
        onClick={() => console.log("Submit clicked")}
      >
        Sign In
      </Button>
    </div>
  );
}
```

### Android Example

```kotlin
fun MyFragment() {
    val context = requireContext()

    Button(
        context = context,
        text = "Sign In",
        onClick = { /* Handle click */ },
        variant = ButtonVariant.Primary
    )
}
```

### iOS Example

```swift
struct MyView: View {
    var body: some View {
        VStack(spacing: 20) {
            Header(
                title: "Login",
                description: "Please sign in to continue"
            )

            Button(
                title: "Sign In",
                action: { /* Handle button tap */ },
                variant: .primary
            )
        }
        .padding()
    }
}
```

## Support

If you encounter any issues or have suggestions, please open an issue on our [GitHub repository](https://github.com/crossuikit/crossuikit/issues).

```

Replace `your-org` and other placeholder values with your actual organization or project name. This README provides:

1. Clear installation instructions for all platforms
2. Usage examples for each platform
3. Component documentation
4. Theming and styling guidelines
5. Contributing and support information

Ensure your actual repository contains these files and the documentation reflects your project's structure and components.
```
