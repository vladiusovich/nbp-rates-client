import alias from './alias.config';

export const devServer = {
    port: 5555,
    open: false,
};

export const webpack = {
    mode: "development",
    alias: alias,
    resolve: {
        // extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: "file-loader"
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true,
                            svgo: {
                                plugins: [
                                    {
                                        removeViewBox: false,
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
};

