var plugin = module.exports = Plugin.create("p1");

plugin.run = function(project, callback) {
    console.info("p1 invoke");
    callback();
};