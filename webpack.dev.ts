const { merge } = require("webpack-merge")
const common = require("./webpack.common.ts")

const config = {
    devtool: 'inline-source-map',
    devServer: {
        port: 9001,
        historyApiFallback: true
    },
}

module.exports = merge(common, config)