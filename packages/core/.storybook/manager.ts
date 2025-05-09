import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
    base: 'light',
    brandTitle: 'CrossUIKit',
    brandUrl: 'https://github.com/yourusername/crossuikit',
    brandTarget: '_self',
});

addons.setConfig({
    theme,
    sidebar: {
        showRoots: true,
    },
}); 