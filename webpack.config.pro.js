const config = require("./.config.js")
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-lib.js',
        globalObject: 'this',
        library: {
            name: 'mylib',
            type: 'umd',
        },
        clean: true,
    },
    module: config.module,
    resolve: config.resolve,
};
