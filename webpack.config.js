const path = require("path");

module.exports = {
   entry: "./src/index.js",
   output: {
      path: __dirname + "/dist",
      filename: "script.js"
   },
   module: {
      rules: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
               presets: ["@babel/preset-env"]
            }
         },
         {
            test: /\.css?$/,
            loader: ["style-loader", "css-loader"]
         }
      ]
   }
};
