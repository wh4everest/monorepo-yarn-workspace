# monorepo-yarn-workspace

Komit 1

Komit 2

To see how it works:

```bash
# in one terminal

yarn install
tsc -w -p packages/h4-format/ & tsc -w -p packages/h4-zip/ & tsc -w -p packages/backend/

# in another terminal

cd packages/backend
node build/index.js
```

Try editing the files in VSCode.
