import SwiftUI

// Mock CrossUI Kit components for demonstration
struct ThemeManager {
    @State private var isDarkMode = false
    
    mutating func toggleDarkMode() {
        isDarkMode.toggle()
    }
}

struct CUIButton: View {
    let variant: ButtonVariant
    let title: String
    let action: () -> Void
    
    enum ButtonVariant {
        case primary
        case secondary
    }
    
    var body: some View {
        Button(action: action) {
            Text(title)
                .padding()
                .background(variant == .primary ? Color.blue : Color.gray)
                .foregroundColor(.white)
                .cornerRadius(8)
        }
    }
}

struct ThemeDemo: View {
    var body: some View {
        VStack {
            Text("Theme Demo Component")
                .font(.title2)
            // Mock theme demonstration components
        }
    }
}

struct ContentView: View {
    @State private var themeManager = ThemeManager()
    
    var body: some View {
        VStack(spacing: 24) {
            Text("CrossUI Kit - iOS Demo")
                .font(.largeTitle)
                .padding(.bottom)
            
            VStack(alignment: .leading, spacing: 16) {
                Text("Theme Switching")
                    .font(.title2)
                CUIButton(
                    variant: .primary,
                    title: "Toggle \(themeManager.isDarkMode ? "Light" : "Dark") Mode"
                ) {
                    themeManager.toggleDarkMode()
                }
            }
            
            VStack(alignment: .leading, spacing: 16) {
                Text("Button Variants")
                    .font(.title2)
                HStack(spacing: 12) {
                    CUIButton(variant: .primary, title: "Primary Button") {}
                    CUIButton(variant: .secondary, title: "Secondary Button") {}
                }
            }
            
            VStack(alignment: .leading, spacing: 16) {
                Text("Theme Demo")
                    .font(.title2)
                ThemeDemo()
            }
        }
        .padding()
        .preferredColorScheme(themeManager.isDarkMode ? .dark : .light)
    }
}