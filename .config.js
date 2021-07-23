const path = require('path');

let config = {
    module: {
        rules: [
            {
                test: /\.wless$/i,
                use: [
                    //'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.wcss$/,
                use: ['css-loader'],
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false
                        }
                    },
                    'less-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": ["@babel/env", "@babel/preset-react"]
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.link$/,
                use: ['file-loader'],
            },
        ]
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'src/assets/'),
            src: path.resolve(__dirname, 'src/'),
            component: path.resolve(__dirname, 'src/component/'),
        },
        extensions: ['.tsx', '.jsx', '.js', '.ts'],
    },
};
module.exports = config;
