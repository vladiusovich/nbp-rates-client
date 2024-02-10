import { resolve } from 'path';

export const webpack = {
    alias: {
        '@ui': resolve(__dirname, './src/components/uiKit'),
        '@api': resolve(__dirname, './src/api'),
        '@type': resolve(__dirname, './src/types'),
        '@typography': resolve(__dirname, './src/styles/typography/index'),
        '@mixins': resolve(__dirname, './src/styles/typography/Typography.styled'),
        '@helpers': resolve(__dirname, './src/helpers'),
        '@common': resolve(__dirname, './src/components/common'),
    },
};

