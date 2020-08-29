module.exports = {
  presets: [
    [
      "@babel/env",
      { modules: false, targets: "> 0.25%", useBuiltIns: "usage" },
    ],
    "@babel/preset-react",
    ["@babel/preset-typescript", { allExtensions: true, isTSX: true }],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
}
