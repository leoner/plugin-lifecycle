
var plugin = module.exports = Plugin.create('p3');

plugin.run = function(project, callback) {
  console.info('p3 invoke'); 
  callback();
};
