# Rails React Template

风味醇正的 Rails 7.0 + React 18 模板。

## 适合谁？

- 相比服务端模板更熟悉 React 开发前端的工程师
- 使用服务端模板满足不了前端需求的工程师
- ~~和我一样会用 Rails 写 API 但记不住模板 API 的前端工程师~~

## 提供了什么？
- 开箱即用的 TypeScript + React + Tailwind CSS + React Router + Headless UI
- 协调的前后端开发环境，一行命令启动开发环境与生产构建
- 丝滑的 webpack-dev-server ，支持 HMR
- 常用的 axios/dayjs 模板代码
- 图标库 @icon-park/react
- 常用的 Rails Gem 如 discard 等

## 为什么要使用这个模板？

Rails 7.0 提供了 jsbundling 使集成 webpack 等前端工具变得更加容易。但要想实际使用的丝滑还需要：
- 配置常用的特性如 HMR ，路由懒加载，CSS 提取等
- 协调前后端开发环境，使得 React 可以直接托管在 Rails 服务下
- 调整 webpack 与 sprockets 构建命名冲突的问题
- 配置 TypeScript/React Router 等常用的工具库的样板代码

这些工作比较琐碎，就索性提出来吧。

## 版本信息
- Ruby 3.1
- Rails 7.0
- Webpack 5
- React 18
- React Router 6

其它详见 Gemfile 与 package.json

## 如何使用
```shell
# 开发环境
yarn start

# 生产环境
yarn build
```

就这么简单