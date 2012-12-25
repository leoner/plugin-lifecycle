
var plugin = module.exports = Plugin.create('p2');

plugin.run = function(project, callback) {
  console.info('p2 invoke'); 
  callback();
};
