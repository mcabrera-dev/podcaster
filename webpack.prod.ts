const commonprod = require("./webpack.common.ts")
import merge from "webpack-merge"

const configprod = {
    devtool: 'source-map',
}

module.exports = merge(commonprod, configprod)