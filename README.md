JavaScript Eslint "import/no-cycle" Demo
========================================

检查代码中的循环引用。不知道为什么，在js里可以正常，但在typescript里检查不出来

```
npm install
npm run lint
```

will report errors:

```
src/dep-a.js
  2:1  error  Dependency cycle detected  import/no-cycle

src/dep-b.js
  1:1  error  Dependency cycle detected  import/no-cycle

✖ 2 problems (2 errors, 0 warnings)
```
