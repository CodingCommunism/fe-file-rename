# 0.0.1
- `feat`: 支持按照规则批量修改文件名以及引用
# 0.0.2
- `fix`: 修复批量修改目录名称引用修改bug。
- `feat`: 支持文件大小写变更的引用修改（example：DirA => dirA）
# 0.0.3 
- `feat`: 降低vscode版本要求(`1.55.0` -> `1.49.0`)
# 0.0.4
- `feat`: 支持文件变更，文件树同步更新
# 0.0.5
- `feat`: 增加文件修改是否属于根目录判断
- `feat`: 增加修改后同名检测

# 0.0.6
- `feat`: 增加文件路径变更自动修改引用功能
- `feat`: 添加文件变更同步修改依赖开关
# 0.0.7
- `feat`: readme使用文档补充

# 0.0.8
- 'feat': 优化用户体验：开关状态&&信息提示优化
# 0.0.9
- 'feat': 文件树默认展开&&图标优化

# 0.0.10
- `fix`: 修复文件是否存在判断bug
- `fix`: 修复_下划线处理bug
# 待办
- `todo`: 增加图片等资源替换规则。支持src引用修改,支持import 'xxx'形式引用
- `todo`: ALLOW_LIST不仅限于 ts js vue。加入less sass引用资源支持
- `todo`: 读取jsconfig或者tsconfig。动态获取路径配置信息（比如：‘@/* ’)
- `todo`: 修复‘@/xxx’和‘../’长度判断bug。使用更短路径
