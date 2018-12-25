# learn react
## react
学习react的最好的地方就是多看官方文档，根据文档上的案例学习
- [官方文档](https://reactjs.org)
- [中文文档](https://react.css88.com/)

## 项目搭建
使用 `create-react-app` 脚手架，详细配置看文档
- [官方文档](https://facebook.github.io/create-react-app/)
- [中文文档](https://www.css88.com/create-react-app/)

### 文档中较重要的配置
- 使用sass预处理器、css模块化[详情](https://www.css88.com/create-react-app/docs/adding-a-sass-stylesheet/)
- 代码提交git仓库检测[详情](https://www.css88.com/create-react-app/docs/setting-up-your-editor/)
- 代码拆分（Code Splitting）[详情](https://www.css88.com/create-react-app/docs/code-splitting/)

### 配置别名、环境变量、代理、eslint、pwa
- [基于create-react-app的再配置](https://www.cnblogs.com/xiaohuochai/p/8491055.html)

## 使用 `react-app-rewired`
- 重写脚手架配置

## 配置装饰器
目前版本的 `create-react-app` 还不支持装饰器
- 安装 `yarn add @babel/plugin-proposal-decorators -D`
- 在 `config-overrides.js` 中添加配置
```
config = injectBabelPlugin( ["@babel/plugin-proposal-decorators", { "legacy": true }], config);
```

## ant-design 圣诞彩蛋
虽然彩蛋的问题已经被修复，但是由此带来的 NPM 安全问题不得不又让我们敲响了警钟。
对于这些覆盖面极其大的产品都会出现这样的问题，那么免不了别的产品也会出现这样的事情。这次只是加个庆祝节日的特效，下次说不定给你弹个框啥的。
那么这里我也来科普下 NPM 版本管理的一些小知识。我们可以看到 NPM 包的版本号一般是 x.y.z 这样的。

一般来说， X 代表主要版本，Y 代表次要版本，Z 代表 Bug 修复。

了解了版本号的规则，我们再来了解下一般版本管理的方式。
- ~ 代表只影响第三位版本号，假设 ~1.1.0，那么就代表可以更新 1.1.0 到 1.2.0 以下的版本。
- ^ 代表只影响第二三位版本号，假设 ^1.1.0，那么就代表可以更新 1.1.0 到 2.0.0 以下的版本，这也是最常用的方式。
但是对于一些重要的库，比如 React 或者 Antd 这些，只要实现的功能没有 Bug 并且是稳定版本，一般就锁死版本不更新，防止更新出现问题。
锁死版本的做法可以在 package-lock.json 文件中将需要锁死版本的库写成 React: 16.0.0，这样就代表 React 的版本除非手动更新，否则会一直锁死在这个版本号上。

另外如果真的需要更新项目中使用到的库，推荐具体了解下到底更新了什么，以防出现更新后新加什么特效的神奇功能
