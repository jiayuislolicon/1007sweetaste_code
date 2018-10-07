import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import ImageminPlugin from 'imagemin-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'


let config = {
    devtool: 'cheap-module-source-map',
    entry: ['./src/index'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: `bundle_${Date.now()}.js`,
        publicPath: '/'
    },

    resolve: {
        modules: [
                    path.resolve(__dirname, "src/"),
                    path.resolve(__dirname, "src/asset"),
                    path.resolve(__dirname, "src/component"),
                    path.resolve(__dirname, "src/container"),
                    path.resolve(__dirname, "src/glsl"),
                    path.resolve(__dirname, "src/shaderMat"),
                    path.resolve(__dirname, "src/data"),
                    path.resolve(__dirname, "src/module"),
                    path.resolve(__dirname, "src/lib"),
                    path.resolve(__dirname, "src/redux"),
                    path.resolve(__dirname, "src/redux/action"),
                    path.resolve(__dirname, "src/redux/reducer"),
                    'node_modules'
                ]
    },

    plugins: [
        new ProgressBarPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            API: 'api',
            ReactDOM: 'react-dom',
            React: 'react',
            Provider: ['react-redux', 'Provider'],
            connect: ['react-redux', 'connect'],
            NavLink: ['react-router-dom', 'NavLink'],
            Link: ['react-router-dom', 'Link'],
            Switch: ['react-router-dom', 'Switch'],
            BrowserRouter: ['react-router-dom', 'BrowserRouter'],
            HashRouter: ['react-router-dom', 'HashRouter'],
            Route: ['react-router-dom', 'Route'],
            withRouter: ['react-router-dom', 'withRouter'],
            Redirect: ['react-router-dom', 'Redirect'],
            branch: ['recompose', 'branch'],
            lifecycle: ['recompose', 'lifecycle'],
            withState: ['recompose', 'withState'],
            renderComponent: ['recompose', 'renderComponent'],
            compose: ['recompose', 'compose'],
            withHandlers: ['recompose', 'withHandlers'],
            pure: ['recompose', 'pure'],
            withStateHandlers: ['recompose', 'withStateHandlers'],
            setDisplayName: ['recompose', 'setDisplayName'],
        })
    ],

    module: {
        rules: [

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
                    'postcss-loader'
                ],

            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                // include: [path.resolve(__dirname, './src')]
            },

            {
                test: /\.json$/,
                use: 'json-loader'
            },

            {
                test: /\.(jpg|png|svg)$/,
                use: 'file-loader?name=[name].[ext]&publicPath=asset/image/&outputPath=asset/image/'
            },

            {
                test: /\.(woff2|woff|ttf)$/,
                use: 'file-loader?name=[name].[ext]&publicPath=asset/font/&outputPath=asset/font/'
            }
        ]
    },
    devServer: {
        contentBase: 'src',
        hot: true,
        historyApiFallback: true,
        port: 8888
    }
}





let configWebpack = (env) => {

    if (env) {


        config.devtool = 'source-map';

        // public path
        config.output.publicPath = env.demo ? '' : ''

        config.devServer = {};


        config.plugins = config.plugins.concat([

            new webpack.optimize.UglifyJsPlugin({
                compress: true,
                sourceMap: true
            }),

            new webpack.optimize.AggressiveMergingPlugin(),

            new CopyWebpackPlugin([
                { from: 'src/asset', to: 'asset' }
            ]),

            new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
        ])

        if ( env.production ) {

            // production extract css

            config.module.rules[0] = {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    { loader: 'css-loader', options: { importLoaders: 1 , sourceMap: true  } },
                    'postcss-loader',
                  ]
                })
            }

            config.plugins = config.plugins.concat([

                new ExtractTextPlugin('styles.css'),

                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('production'),
                    'process.env.PUBLIC_PATH': JSON.stringify('')
                })
            ])

        } else {

            //demo not extract css but change root in css files

            // config.module.rules[0] = {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',
            //         { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true, root: config.output.publicPath } },
            //         'postcss-loader'
            //     ]
            // }

            config.plugins = config.plugins.concat([

                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('production'),
                    'process.env.PUBLIC_PATH': JSON.stringify(config.output.publicPath),
                    'process.env.DEMO': JSON.stringify('demo'),
                })

            ])

        }


    } else {

        config.plugins = config.plugins.concat([

            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development'),
                'process.env.PUBLIC_PATH': JSON.stringify('')
            })

        ])

    }

    return config

}


export default configWebpack

