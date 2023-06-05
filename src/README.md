### 1、默认模板介绍

1. 默认组件库：[uView文档](https://www.uviewui.com/components/intro.html)
2. UniApp介绍：[介绍文档](https://uniapp.dcloud.io/)
3. UniApp官方组件库：[官方组件库](https://uniapp.dcloud.io/component/README)
4. UniApp官方API：[官方API](https://uniapp.dcloud.io/api/README)
5. Dcloud插件市场：[插件市场](https://ext.dcloud.net.cn/)
7. 默认网络框架：[luch-request 3.x文档](https://www.quanzhan.co/luch-request/guide/3.x/)
8. 常用系统API封装：/common/ULI.js

> 默认组件库使用 `npm` 加载的，所以需要在`HBuilder`的终端中运行 `npm i`
> 1. 快捷键 `ALT + C`
> 2. `HBuilder`工具栏 > 视图 > 显示终端

	
> 基础模版封装没有配置 `BASE_URL` , 并且api文件夹下的接口不可用，如需测试， 自己找接口
 
 > `common` 文件夹 `utils` 封装了一些常用的基础函数，为便于调用 大部分都已经在 `main.js` 内全局挂载 
 
 
 
### templateList列表规范
 ```
 骨架templateList列表路径开头禁止加任何东西, 路径请用 '/'

```


### 跨域路由
> manifest.json
  ```js
   "h5" : {
	       "devServer" : {
	           "https" : false,
	           "proxy" : {
	               "/web" : {
	                   "target" : "http://localhost:8081",
	                   "changeOrigin" : true,
	                   "secure" : false,
	                   "pathRewrite" : {
	                       "^/web" : "/"
	                   }
	               },
	               "/auth" : {
	                   "target" : "后端接口地址",
	                   "changeOrigin" : true,
	                   "secure" : false,
	                   "pathRewrite" : {
	                       "^/auth" : "/"
	                   }
	               }
	           }
	       }
	   }
  ```
  
