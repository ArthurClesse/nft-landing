const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './source/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.twig$/,
                exclude: /node_modules/,
                type: 'asset/source',
                use: [
                    {
                        loader: 'twig-html-loader',
                        options: {
                            data: {},
                        },
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './source/index.twig'
        }),
        new HtmlWebpackPlugin({
            filename: 'shop.html',
            template: './source/pages/shop.twig'
        }),
        new CopyPlugin({
            patterns: [
                { from: "source/assets", to: "assets" }
            ],
        }),
    ]
}