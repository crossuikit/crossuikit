module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@crossuikit/core$': '<rootDir>/packages/core/src',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@stepperize/react$': '<rootDir>/__mocks__/@stepperize/react.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testMatch: [
        '<rootDir>/packages/**/*.test.{ts,tsx}',
        '<rootDir>/examples/**/*.test.{ts,tsx}'
    ],
    collectCoverageFrom: [
        'packages/**/*.{ts,tsx}',
        '!packages/**/*.stories.{ts,tsx}',
        '!packages/**/*.d.ts',
    ],
    transformIgnorePatterns: [
        'node_modules/(?!(@stepperize)/)'
    ],
}; 