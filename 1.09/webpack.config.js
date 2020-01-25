const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tsImportPluginFactory = require("ts-import-plugin");
module.exports = {
    entry: './src/app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
// 引入了组件 规模变大，现在设置为开发模式
    mode: 'development',
    devServer: {
        contentBase: "./dist",
// host填写为0000是因为可能有remote开发的情况
        host: "0.0.0.0",
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader",
// 这里面新加
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
    ]
};