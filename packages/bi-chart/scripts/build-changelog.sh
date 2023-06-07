cd ../../../

pnpm run changelog

cp "./CHANGELOG.md" "./docs/change-log/index.md"

git add .

git commit -m "docs: 📝 Docs add CHANGELOG.md"




#echo 'build-changelog.sh path is: '
#pwd
