#echo 'release.sh path is: '
#pwd




. publish-version-patch.sh

cd -

. root-version-patch.sh
#pwd

cd -
. build-changelog.sh

########################调试########################
echo "按任意键继续"
read -n 1
########################调试########################
