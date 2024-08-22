module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],
      [
        'module-resolver',
        {
          root: ["./src"],
          extentions: [
            "ts",
            "tsx",
            "js",
            "json",
          ],
          alias: {
            "@": "./src",
            "@components": "./src/components",
            "@navigation": "./src/navigation",
            "@screen": "./src/screen"
          },
        }
      ],
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true
      }]
    ],
  };
};
