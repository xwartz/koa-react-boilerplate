## 2016-08-28

1. 增加 `pm2` 来管理进程

## 2016-08-27

1. 完成整体框架设计
2. 使用 `webpack-dev-server` 和 `koa` 启动前后端两个 `Node` 服务，这样做的目的是为了可卸载后端服务
    * 已经有现成的后端资源，完全不需要自己再开发后端
    * 前后端分工，接口有另外的 mock 服务提供
