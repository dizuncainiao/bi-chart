#!/bin/sh
echo "hello shell"

# 删除当前目录 dist
rm -rf "../publish/dist"

# 将 dist 移动当前目录
mv "../dist" "../publish"

echo "按任意键继续"
read -n 1
echo "继续运行"
