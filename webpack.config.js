const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
        }),
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    devServer: {
        compress: true,
        overlay: true,
        http2: true,
        hot: true,
        https: true,
        historyApiFallback: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        onListening: function (server) {
            const addressObject = server.listeningApp.address();
            const { port, address } = addressObject;
            console.log(
                'Listening on port: %d Navigate on (%s)',
                port,
                `https://${address}:${port}`,
            );
        },
    }
}
