cd ../publish

#echo 'publish-version-patch.sh path is: '
#pwd




npm version patch

git add .

git commit -m "chore: 🤖 publish/package.json version patch"
