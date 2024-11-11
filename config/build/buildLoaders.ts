import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
const ReactRefreshTypeScript = require("react-refresh-typescript");

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const { mode } = options;

  const isDev = mode === "development";

  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          getCustomTransformers: () => ({
            before: isDev ? [ReactRefreshTypeScript()] : [],
          }),

          transpileOnly: true,
        },
      },
    ],
  };

  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const cssLoader = {
    test: /\.css$/, // Add this rule for CSS files
    use: ["style-loader", "css-loader"],
  };

  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
  };

  return [tsLoader, assetsLoader, svgrLoader, fontLoader, cssLoader];
}
