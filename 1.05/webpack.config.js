const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader",

            exclude: /node_modules/,
        }]
    },
    plugins: [
        // 这里面的template是模板的位置，title是模板渲染的变量 htmlWebpackPlugin.options.title 
        new HtmlWebpackPlugin({
            title: "test",
            template: path.resolve(__dirname, "template.html"),
        })
    ]
};