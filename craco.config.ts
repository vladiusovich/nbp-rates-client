import { resolve } from 'path';

export const webpack = {
    alias: {
        '@ui': resolve(__dirname, './src/components/uiKit'),
        '@api': resolve(__dirname, './src/api'),
        '@type': resolve(__dirname, './src/types'),
        '@hook': resolve(__dirname, './src/hooks'),
        '@typography': resolve(__dirname, './src/styles/typography/index'),
        '@mixins': resolve(__dirname, './src/styles/typography/Typography.styled'),
        '@helpers': resolve(__dirname, './src/helpers'),
        '@common': resolve(__dirname, './src/components/common'),
        '@device': resolve(__dirname, './src/styles/media/device'),
    },
};

