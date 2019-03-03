module.exports = {
  "extends": [
    "google",
    "plugin:react/recommended",
    // "plugin:node/recommended",
  ],
  plugins: [
    "babel",
    "jest",
  ],
  // "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": 6,
      "ecmaFeatures": {
          "jsx": true,
          "modules": true,
      },
  },
  "env": {
      "es6": true,
      "browser": true,
      "es6": true,
      "jest/globals": true,
  },
  "parser": "babel-eslint",
  "rules": {
      "indent": [1, 2, {"SwitchCase": 1}],
      "no-console": 0,
      "require-jsdoc": 0,
      "no-undef": "error",
      "no-invalid-this": 0,
      "one-var": 0,
      "react/react-in-jsx-scope": 0,
      "react/prop-types": 0,
      "react/display-name": 0,
      "babel/no-invalid-this": 1,
  },
};
