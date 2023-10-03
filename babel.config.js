export default {
  presets: [["@babel/preset-env"], "@babel/preset-typescript"],
  env: {
    test: {
      presets: ["env"],
    },
  },
};
