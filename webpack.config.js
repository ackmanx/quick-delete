const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    //Target electron-renderer is defined in webpack docs and is required. It's not an arbitrary name I made up
    target: 'electron-renderer',
    entry: ['babel-polyfill', './src/ui/entry.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        //This is the real entry point, which loads the webpack bundle
        new CopyWebpackPlugin([
            {from: 'src/index.html'}
        ])
    ],
    module: {
        rules: [
            {
                //To tell webpack which files need to be compiled with babel
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                //Converts files to base64 encoded strings, so I can import images and put data url in src attribute
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {}
                    }
                ]
            },
            {
                //Allows import syntax with less files and embedding the css with js bundle like url-loader with images
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                //LESS needs a loader to parse font files
                test: /\.ttf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    },
                },
            }
        ]
    }
}
