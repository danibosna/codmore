/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.(glb|gltf)$/,
  //     use: [
  //       options.defaultLoaders.babel,
  //       {
  //         loader: "file-loader",
  //         // options: pluginOptions.options,
  //       },
  //       options.isServer,
  //     ],
  //   });
  //   return config;
  // },
  // experimental: {
  //   turbo: {
  //     rules: {
  //       // Option format
  //       '*.gltf': [
  //         {
  //           loader: 'file-loader',
  //           options: {
  //             format: 'gltf',
  //           },
  //         },
  //       ],
  //       // Option-less format
  //       '*.glb': ['file-loader'],
  //     },
  //   },
  // }
};

export default config;
