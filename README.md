JavaScript Eslint "import/no-cycle" Demo
========================================

检查代码中的循环引用

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

在本demo(js版本)可以正常工作，但typescript版本不知道为什么不行。
