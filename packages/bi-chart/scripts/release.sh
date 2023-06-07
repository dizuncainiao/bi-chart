cd ../publish

npm version patch

cd ../../../

npm version patch -m "chore: 🤖 v%s"

echo "按任意键继续"
read -n 1
echo "继续运行"

pnpm run changelog
