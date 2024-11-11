import CopyPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, { Configuration } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from "./types/types";
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const { mode, paths, analyzer, platform } = options;

  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, "", "favicon.png"),
    }),

    new webpack.DefinePlugin({
      __MODE__: JSON.stringify(mode),
      __PLATFORM__: JSON.stringify(platform),
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin(), new ReactRefreshWebpackPlugin());
  }

  if (isProd) {
    if (analyzer) {
      plugins.push(new BundleAnalyzerPlugin());
    }
    plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(paths.public, "favicon.png"),
            to: path.resolve(paths.output, "public"),
          },
        ],
      })
    );
  }

  return plugins;
}
