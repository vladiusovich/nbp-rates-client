import path from 'path';
import alias from './alias.config';

export const webpack = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
        publicPath: "auto",
        chunkFilename: "[id].[chunkhash].js",
    },
    alias: alias,
    resolve: {
        // extensions: [".tsx", ".ts", ".js"],
    },
    plugins: {
        add: [ /* ... */],
        remove: [ /* ... */],
    },
    configure: { /* ... */ },
};

