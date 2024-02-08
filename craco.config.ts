import { resolve } from 'path';

export const webpack = {
    alias: {
        '@ui': resolve(__dirname, 'src/components/uiKit'),
    },
};

