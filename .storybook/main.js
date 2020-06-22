const addons = require("./localAddons");
// const path = require("path");

module.exports = {
  stories: ["../storybook/src/**/*.[tj]s"],
  addons: addons,
  webpackFinal: async (config) => {
    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   loader: require.resolve("ts-loader"),
    //   options: {
    //     configFile: path.resolve(__dirname, "../storybook/tsconfig.json"),
    //   },
    // });
    // config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
