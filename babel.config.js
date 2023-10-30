

module.exports = function (api) {
  api.cache(true);
  return {
    env: {
      test: {
        presets: [['@babel/preset-env', { loose: true }]],
      },
    },
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json']
        },
      ],
      '@babel/plugin-proposal-export-namespace-from',
      'expo-router/babel',
      'transform-inline-environment-variables',
      'jotai/babel/plugin-react-refresh',
    ],
  };
};
