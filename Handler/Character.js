const names = require('../Data/Names.json');

const Player = require('../Data/Player.json');

const Enemy = require('../Data/Enemy.json');

var playerName;

var enemyName;



function genCharacter()
{
    playerName = names.First[Math.floor(Math.random() * names.First.length)];
    Player.Name = playerName;
}

function genEnemy()
{
    enemyName = names.First[Math.floor(Math.random() * names.First.length)];
    Enemy.Name = enemyName;
}

module.exports = 
{
    genCharacter,
    genEnemy
}