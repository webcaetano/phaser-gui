var params = require('./../modules/urlParams');

module.exports = function(game,scope,rootScope){
	var craft = require('craft')(game);
	var gui = require('phaser-gui')(game)


	var sprite = craft.$sprite('phaserDude')

	gui.ajust(sprite,{drag:true})
}
