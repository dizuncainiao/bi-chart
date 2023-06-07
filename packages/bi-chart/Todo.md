# Todo

1. 部门和时间的初始值，作为接口初始请求的参数 √
2. 获取部门接口多调用了一次
3. Github Actions 自动化发布 √
4. 编写 CHANGELOG.md 自动生成脚本
   - [package.json](./publish/package.json) 自动升版本号功能
   - 根据 package.version 自动打 tag 功能，打 tag 后 `pnpm run changelog`
   - sh 按功能点进行单一脚本抽离
     - 提升 publish/package.json 版本
     - 提升根目录 package.json 版本，并打 tag 以及自动 commit
     - changelog 构建以及复制到 docs 中
