
import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import tsImportPluginFactory from "ts-import-plugin";
import webpack from "webpack";
const config: webpack.Configuration = {
    entry: './src/app.tsx',
    output: {
// 注意这里换了一级目录
        path: path.resolve(__dirname,'..', 'dist'),
        filename: 'app.js'
    },
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
             template: path.resolve(__dirname,'template.html'),
        }),
        new MiniCssExtractPlugin({
            filename: "app.css",
        }),
      
    ],
    
};
export default config;
