const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RewriteImportPlugin = require("less-plugin-rewrite-import");


const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: {
        vendor: ['semantic-ui-react'],
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.less/,
                loader: 'style!css!less',
            },
            {
                test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
                loader: 'url-loader?limit=1024&name=[name]-[hash:8].[ext]!image-webpack-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),

    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true
    }
};