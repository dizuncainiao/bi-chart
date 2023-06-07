cd ../publish

# 提升 publish/package.json 版本
npm version patch

git add .

git commit -m "chore: 🤖 publish/package.json version patch"

cd ../../../

# 提升根目录 package.json 版本
npm version patch -m "chore: 🤖 v%s"

pnpm run changelog

git add .

git commit -m "docs: 📝 Docs add CHANGELOG.md"

echo "按任意键继续"
read -n 1
echo "继续运行"
