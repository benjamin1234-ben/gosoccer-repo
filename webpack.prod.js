const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const { CleanWebpackPlugin }= require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        // new CleanWebpackPlugin()
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                },
                template: "src/template.html",
                inject: false
            })
        ]
    }
})