import { resolve } from 'path';

export const webpack = {
    alias: {
        '@ui': resolve(__dirname, './src/components/uiKit'),
        '@typography': resolve(__dirname, './src/styles/typography/index'),
        '@mixins': resolve(__dirname, './src/styles/typography/Typography.styled'),
    },
};

