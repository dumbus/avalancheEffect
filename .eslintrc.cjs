module.exports = {
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "indent": ["warn", 2],
    "semi": ["warn", "always"],
    "eol-last": ["warn", "always"],
    "quotes": ["warn", "single"]
  },
  "ignorePatterns": ["**eslintrc*"]
}
