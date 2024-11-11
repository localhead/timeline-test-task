import { BuildOptions } from "./types/types";

export function buildDevServers(options: BuildOptions) {
  return {
    port: options.port ?? 5000,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
