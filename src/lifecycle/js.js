module.exports = [{
    'clean': ['clean']
}, {
    'compile': ['coffee', 'less', 'transport', 'spm/p1'] // 代码编译.
}, {
    'output': ['output', 'spm/p2'] // 合并输出.
}, {
    'build': ['min', 'install', 'spm/p3'] // 代码压缩和本地缓存.
}];
