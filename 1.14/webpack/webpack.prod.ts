import path from "path";
import webpack from "webpack";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import merge from "webpack-merge";
import common from "./webpack.common";
const config: webpack.Configuration = merge(common, {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
});


export default config;
