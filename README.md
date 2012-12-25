plugin-lifecycle
====================

用户自定义生命周期和一个模块支持多个插件演示

### 目录结构
```
----src/
--------p1.js
--------p2.js
--------p3.js
--------lifecycle/
------------js.js
------------css.js
----package.json
```

* p1,p2, p3 支持多个插件

* lifecycle 如果用户想自定义项目执行流程，可以通过添加这个目录，配置自己的插件执行流程。其中文件名就项目类型。具体的生命周期文件的书写方式，可以参看 [spm default lifecyle](https://github.com/spmjs/spm/wiki/Spm-default-lifycycle)

* package.json 主要需要配置插件和生命周期文件的输出.

具体的插件内容和配置可以参看具体的源代码.

### 使用
```
"plugins": {
  "test": {
      "main": "spm/lifecycle/1.0.0/p1",
      "lifecycle": true
  }
}
```

### 生命周期配置
下面看一个 js 项目生命周期的例子

```
module.exports = [{
    'clean': ['clean']
}, {
    'resources': ['resources'] // 代码输出到build目录.
}, {
    'analyse': ['lint','dependencies', 'depCheck', 'test/p1'] //依赖分析.
}, {
    'output': ['output', 'spm/lifecycle/p2'] // 合并输出.
}, {
    'build': ['min', 'install', 'test/p3'] // 代码压缩和本地缓存.
}];
```
* 其中 clean, resources 这些都是 spm 内置的插件，用户自定义的生命周期也可以直接使用.

* test/p1, spm/lifecycle/p2 这两个都是引用的用户自定义的插件。其中我们支持两个规则:
    1. 通过插件项目的 root/name/moduleName 的形式
    2. 通过用户配置，用户可以简化配置，通过 key/moduleName 的形式.

* 目前理论上不建议在插件中再引用外部插件。

