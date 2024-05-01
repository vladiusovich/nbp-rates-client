import { resolve } from 'path';

const basePath = "./../src";

const alias = {
    '@ui': resolve(__dirname, `${basePath}/components/uiKit`),
    '@api': resolve(__dirname, `${basePath}/api`),
    '@type': resolve(__dirname, `${basePath}/types`),
    '@hook': resolve(__dirname, `${basePath}/hooks`),
    '@styles': resolve(__dirname, `${basePath}/styles`),
    '@typography': resolve(__dirname, `${basePath}/styles/typography/index`),
    '@mixins': resolve(__dirname, `${basePath}/styles/typography/Typography.styled`),
    '@helpers': resolve(__dirname, `${basePath}/helpers`),
    '@common': resolve(__dirname, `${basePath}/components/common`),
    '@device': resolve(__dirname, `${basePath}/styles/media/device`),
    '@resources': resolve(__dirname, `${basePath}/resources`),
    '@config': resolve(__dirname, `${basePath}/config/appConfig`),
};

export default alias;