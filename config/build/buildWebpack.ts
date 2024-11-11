import webpack from "webpack";

import { buildDevServers } from "./buildDevServers";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";

import { Configuration as DevServerConfiguration } from "webpack-dev-server";

type WebpackConfig = webpack.Configuration & {
  devServer?: DevServerConfiguration;
};

export function buildWebpack(options: BuildOptions): WebpackConfig {
  const { paths, mode } = options;

  const isDev = mode === "development";
  const isProd = mode === "production";

  return {
    mode: mode ?? "development",

    entry: paths.entry,

    output: {
      path: paths.output,

      filename: "[name].[contenthash].js",

      clean: true,
    },
    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev && "inline-source-map",

    devServer: isDev ? buildDevServers(options) : undefined,
  };
}
