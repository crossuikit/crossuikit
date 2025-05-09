const defineStepper = () => ({
    Scoped: ({ children }) => children,
    useStepper: () => ({
        current: { id: 'mock-step' },
        next: jest.fn(),
        prev: jest.fn(),
        goTo: jest.fn(),
    }),
});

module.exports = { defineStepper }; 