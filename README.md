### 技术栈 
wepy less
### 安装（更新） wepy 命令行工具。
	npm install wepy-cli -g

### 安装依赖包
	npm install

### 开发实时编译。
	wepy build --watch  

### 生产压缩
	npm run build //上传代码时，请先执行此命令，否则会提示包体积过大  
### 开发使用说明(重要)

1、使用微信开发者工具-->添加项目，项目目录请选择dist目录。

2、微信开发者工具-->项目-->关闭ES6转ES5。 <font color=red>重要：漏掉此项会运行报错。</font> 

3、微信开发者工具-->项目-->关闭上传代码时样式自动补全。  <font color=red>重要：某些情况下漏掉此项也会运行报错。</font> 

4、微信开发者工具-->项目-->关闭代码压缩上传。  <font color=red>重要：开启后，会导致真机computed, props.sync 等等属性失效。</font>   
### 部分页面截图  

<img width="250" height="350" src="https://wx1.sinaimg.cn/mw690/9797bbc8gy1fs1e9egk4og20a00hs1l0.gif"/>
<img width="250" height="350" src="https://github.com/Jayorzzzzzzzzzzzz/tradeClub/blob/master/webwxgetmsgimg%20(1).jpg"/>
<img width="250" height="350" src="https://github.com/Jayorzzzzzzzzzzzz/tradeClub/blob/master/webwxgetmsgimg%20(3).jpg"/>
<img width="250" height="350" src="https://github.com/Jayorzzzzzzzzzzzz/tradeClub/blob/master/webwxgetmsgimg%20(4).jpg"/>
