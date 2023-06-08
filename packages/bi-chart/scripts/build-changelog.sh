#!/bin/sh
cd ../../../

pnpm run changelog

cp "./CHANGELOG.md" "./docs/change-log/index.md"

git add .

git commit -m "docs: 📝 Docs update CHANGELOG.md"
