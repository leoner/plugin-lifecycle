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


