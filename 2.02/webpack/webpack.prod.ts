
import path from "path";
import webpack from "webpack";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import merge from "webpack-merge";
import common from "./webpack.common";
const config: webpack.Configuration = merge(common, {
    mode: "production",
    devtool: "source-map",
    optimization: {
        splitChunks: {
            chunks: "all",     
// 
            minSize: 100000, 
            maxSize: 300000,
            minChunks:1,
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: "react",
                    chunks: "all",
                },
                antd: {
                    test: /[\\/]node_modules[\\/]antd|\@ant(.+?)[\\/]/,
                    name: "antd",
                    chunks: "all",
                },
            },
        },
    },
    output: {
// 改成了chunk命名，避免出现0123这种
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "..", "dist"),
    },
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
});

export default config;
