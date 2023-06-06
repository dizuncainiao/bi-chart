cd ../publish

pnpm version patch -m "release: 🏹 v%s"

cd ../../../

pnpm run changelog
