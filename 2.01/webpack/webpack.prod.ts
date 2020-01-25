import path from "path";
import webpack from "webpack";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import merge from "webpack-merge";
import common from "./webpack.common";
const config: webpack.Configuration = merge(common, {
    mode: "production",
    devtool: "source-map",
    output: {
        filename: "app.[hash].js",
        path: path.resolve(__dirname, "..", "dist"),
    },
    plugins: [
    
        new BundleAnalyzerPlugin(),
    ],
});


export default config;
