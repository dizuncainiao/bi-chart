cd ../publish

npm version patch

cd ../../../

npm version patch -m "chore: 🤖 v%s"

pnpm run changelog
