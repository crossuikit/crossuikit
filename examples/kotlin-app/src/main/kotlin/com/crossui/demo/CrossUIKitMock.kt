package com.crossui.demo

import android.content.Context

// Mock implementations for demonstration
class ThemeManager(private val context: Context) {
    var isDarkMode: Boolean = false
        private set

    fun toggleDarkMode() {
        isDarkMode = !isDarkMode
    }
}

class Button(context: Context) : androidx.appcompat.widget.AppCompatButton(context) {
    fun applyTheme(isDarkMode: Boolean) {
        // Mock theme application
    }
}

class ThemeDemo(context: Context) : android.widget.FrameLayout(context) {
    fun initializeTheme() {
        // Mock theme initialization
    }
}