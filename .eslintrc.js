module.exports = {
    "env": {
        "node": true
    },
    "extends": "eslint:recommended",
    "plugins": ["import"],
    "parserOptions": {
        "ecmaVersion": 6,
        sourceType: "module"
    },
    "rules": {
        "import/no-cycle": [
            "error",
            {}
        ],
    }
};
