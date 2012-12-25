var path = require("path-debug");

var UglifyJS = require("uglify-js-debug");

var _ = require("underscore-debug");

var plugin = module.exports = Plugin.create("json");

plugin.run = function(project, callback) {
    var build = project.buildDirectory;
    var moduleCache = project.moduleCache;
    var code, files;
    files = fsExt.list(build, /\.js$/).forEach(function(file) {
        var filepath = path.join(build, file);
        var code = fsExt.readFileSync(filepath);
        var allDeps = DepUtil.parseDynamic(code);
        var hasJson = allDeps.some(function(dep) {
            return isJson(dep);
        });
        if (hasJson) {
            code = Ast.replaceRequireNode(code, isJson, function(node, depModName) {
                var jsonFilepath = project.getDepModulePath(filepath, depModName);
                var jsonCode = fsExt.readFileSync(jsonFilepath);
                var jsonObj;
                try {
                    jsonObj = JSON.parse(jsonCode);
                    return getJsonNode(jsonCode);
                } catch (e) {
                    console.warn("无法编译 " + jsonFilepath);
                    return node;
                }
            });
            fsExt.writeFileSync(filepath, code);
        }
    });
    callback();
};

function isJson(name) {
    return /\.json$/.test(name);
}

function getJsonNode(jsonCode) {
    var jsonNode;
    var findJsonNode = new UglifyJS.TreeWalker(function(node, descend) {
        if (node instanceof UglifyJS.AST_Object) {
            if (findJsonNode.parent().start.value === "(") {
                jsonNode = node;
            }
        }
    });
    var ast = UglifyJS.parse("(" + jsonCode + ")");
    ast.walk(findJsonNode);
    return jsonNode;
}