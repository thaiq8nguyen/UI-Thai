const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
        about: "./src/about.js",
        error: "./src/error.js"
    },
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    
    module: {
        rules: [
            
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                    
                ]
            },
            {   
                test: /\.(jpg|png|jpeg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "./images/[name].[ext]"
                        }
                    }
                ]

            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "./fonts/[name].[ext]"
                        }
                        
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            title: "Donor Management",
            template: "./src/index.html",
            chunks: ["index"]

        }),
        new HTMLWebpackPlugin({
            filename: "about.html",
            title: "About",
            template: "./src/about.html",
            chunks: ["about"]
        }),
        new HTMLWebpackPlugin({
            filename: "error.html",
            title: "Error",
            template: "./src/error.html",
            
        })

        
    ]
    
}