import path from 'path';
import HtmlWebpackPlugin  from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import tsImportPluginFactory from "ts-import-plugin";
import webpack from "webpack";
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const config: webpack.Configuration = {
    entry: './src/app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    mode: 'development',
    devtool: "inline-source-map",
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [tsImportPluginFactory({
                            libraryName: "antd",
                            libraryDirectory: "lib",
                            style: true,
                        })],
                    }),
                    compilerOptions: {
                        module: "es2015",
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },

                ],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'sass-loader'
                }],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "test",
            template: path.resolve(__dirname, "template.html"),
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: "app.css",
            // chunkFilename: "[id].[hash].css",
            // ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new ErrorOverlayPlugin()
    ],
    devServer: {
        contentBase: "./dist",
        host: "0.0.0.0",
    },
};
export default config;
