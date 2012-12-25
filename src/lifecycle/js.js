module.exports = [{
    'clean': ['clean']
}, {
    'resources': ['resources'] // 代码输出到build目录.
}, {
    'analyse': ['lint','dependencies', 'depCheck', 'test/p1'] //依赖分析.
}, {
    'output': ['output', 'test/p2'] // 合并输出.
}, {
    'build': ['min', 'install', 'test/p3'] // 代码压缩和本地缓存.
}];

