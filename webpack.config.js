let webpack = require('webpack');
let path =require("path");
let serverHost = "192.168.31.13";
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        index: path.resolve(__dirname, './index.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'), //文件的产出路径
        publicPath: '/dist/', //文件的引用路径,内存路径，开启服务，做热加载的时候，实际上引用的就是内存路径，即使删除了本地文件，也不会有任何影响，改变的实际上是内存上的文件。
        filename: "js/index.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    }
                }
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015","stage-0"],
                    plugins: ['syntax-dynamic-import']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/html/index.html'), //生成的html存放路径，相对于path
            template: path.resolve(__dirname, './index.html'), //ejs模板路径,前面最好加上loader用于处理
            inject: 'body',  //js插入的位置，true/'head'/'body'/false
        }),
    ],
    devServer: {
        contentBase: './',
        host: serverHost,
        port: 9093, //默认9090
        inline: true, //可以监控js变化
        hot: true//热启动
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions:['.js','.scss','.vue','.json']
    }
};