const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    context: __dirname,
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!bootstrap/dist/js/bootstrap.min.js",
        "./app/app.js",
        "./app/app.css"
        ],
    externals:{
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery': 'jquery'
        }),
        new ExtractTextPlugin('bundle.css')
    ],
    devtool: 'eval',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    devServer: {
	    contentBase: path.join(__dirname, 'public'),
	    compress: true,
	    port: 3000,
	    historyApiFallback: true
   },
    resolve:{
        alias: {
          initialize: path.join(__dirname, '/app/js/initialize'),
          morphext: path.join(__dirname, "app/js/morphext.min"),
          rotateTitle: path.join(__dirname, "app/js/rotate-title"),
        },
        extensions: ['.json', '.js', '.css']
    },
    stats:{
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                } 
            }
        ]
    }
}

module.exports = config;