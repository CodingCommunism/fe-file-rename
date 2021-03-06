# **fe-file-rename VSCode 插件**

[![version](https://img.shields.io/visual-studio-marketplace/v/hancao97.fe-file-rename)](https://marketplace.visualstudio.com/items?itemName=hancao97.fe-file-rename)
[![fe-mv](https://img.shields.io/github/package-json/v/MwumLi/fe-mv?label=fe-mv)](https://github.com/MwumLi/fe-mv)


> 在前端项目中，可视化地移动（重命名）文件/文件夹，同时更新引用。
## **技术栈**
`ts` / `node` / `vscode extension树视图`

## **功能介绍**
### **第一步**：初始化前端目录
我们选择当前工作空间的某一个文件右键，点击“初始化前端目录”  
![step1](https://github.com/CodingCommunism/fe-file-rename/raw/main/resources/step1.jpg)
### **第二步**：批量修改不合规文件名&&文件路径变动自动修改引用
![step2](https://github.com/CodingCommunism/fe-file-rename/raw/main/resources/step2.jpg)   
上面四个按钮功能分别是：
1. 刷新文件树：对此处显示的文件树进行手动更新[即使不手动更新，此处文件树也会自动watch文件变化进行更新]
2. 开启关闭自动引用修改：`默认关闭`,开启后文件路径变化自动更新引用，**一次修改一个文件或者文件夹的路径，否则不做引用修改**~
> tip: 文件路径变化：文件重命名，文件位置变化

3. 切换文件夹和文件命名的校验规则：`大驼峰` / `小驼峰` / `连字符` / `下划线`
> tip: 文件夹和文件可以采取不一样的规则

4. 批量按照规则修改文件名并修改引用：可以选择要修改的文件进行批量修改
## **注意！！！**
### **大小写问题**
这里推荐小写文件名，可以去查看 阮一峰的《为什么文件名要小写》文章 https://www.ruanyifeng.com/blog/2017/02/filename-should-be-lowercase.html  
其实是出于 **可移植性**，**易用性**，**易读性**， **便捷性** 考量  
单纯使用工具进行大小写变换写可能因为文件系统原因导致bug，请注意，而且git也不会识别大小写变动  
> tip: git config --get core.ignorecase [git可以把这个属性配置为false，区分大小写] 

**上述大小写问题已经修复，但是也不建议只去修改文件的大小写~**
### **关于批量操作中的忽略项**
- 忽略 `public`,`dist`,`node_modules`,`docs`,`test`文件夹
- 忽略带有'.'的文件夹，默认其是配置类特殊文件夹
- 忽略 `json`,`yaml`,`md`,`npmrc`,`lock`,`log`,`yarnrc`,`local`文件
- 忽略带有两个'.'的文件, 默认其是配置文件或者特殊文件
- 文件前后'_'保留，因为认定文件前后是'_'表示特殊含义，例如:`_dir_`,`_file_.ts`
## **主要功能迭代记录**
### 一期功能
- 按照规则批量修改文件名及引用。
#### 操作流程
1. 右键点击文件,选择"初始化前端目录",按照默认检验规则和筛选规则构建文件树。
2. 不符合规范的文件，红色叹号标识。
3. 可以再次选择 大驼峰/小驼峰/连字符/下划线 定义文件夹以及文件命名校验规则。
4. 可以选择文件进行批量按照规则修正文件命名，同时修改依赖。
### 二期功能

- 支持文件变更，文件树同步更新，并修改依赖 
- 支持文件修改时只有大小写变更的情况  
- 添加文件变更同步修改依赖开关  
#### 操作流程
1. 初始化前端目录,点击自动引用修改开关
2. 文件目录进行文件名修改，拖拽。引用更新

## **修改前端项目引用**
fe-mv: [![fe-mv](https://img.shields.io/github/package-json/v/MwumLi/fe-mv)](https://github.com/MwumLi/fe-mv)
