const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "docs"),
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        resourceQuery: /raw/,
        type: "asset/source",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp|mp4)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),

    // HTML pages with viewport meta
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: "blocking",
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: "blocking",
      template: "./src/ucheba.html",
      filename: "./ucheba.html",
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: "blocking",
      template: "./src/tusovochka.html",
      filename: "./tusovochka.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: "blocking",
      template: "./src/style-guide.html",
      filename: "./style-guide.html",
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: "blocking",
      template: "./src/ivents.html",
      filename: "./ivents.html",
      chunks: ["index"],
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: "blocking",
      template: "./src/about.html",
      filename: "./about.html",
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: "blocking",
      template: "./src/articles/template.html",
      filename: "./articles/template.html",
      chunks: ["index"],
    }),

    // new HtmlWebpackPlugin({
    //   template: './src/article.html',
    //   filename: './article.html',
    //   meta: { viewport: 'width=device-width, initial-scale=1' }
    // }),

    // Partials
    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, "./src/partials/footer.html"),
    //     location: "footer",
    //     template_filename: "*",
    //     priority: "replace",
    //   },
    // ]),

    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, "./src/partials/footer.html"),
    //     location: "footerPartials",
    //     template_filename: "*",
    //     priority: "replace",
    //   },
    // ]),

    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, "./src/partials/header-menu.html"),
    //     location: "header-menu",
    //     template_filename: "*",
    //     priority: "replace",
    //   },
    // ]),
    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, "./src/partials/header-menu.html"),
    //     location: "header-menuPartials",
    //     template_filename: "*",
    //     priority: "replace",
    //   },
    // ]),
  ],
  optimization: {
    // Минификация CSS - раскомментируйте, если хотите использовать
    // minimizer: [new CssMinimizerPlugin()],
  },
  devtool: "source-map", // для отладки CSS и JS
  resolve: {
    extensions: [".js", ".jsx"], // Упрощает импорт JS и JSX файлов
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
    compress: true,
    port: 9000,
    open: true,
  },
};
