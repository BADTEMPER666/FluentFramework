const names = require('../Data/Names.json');

const Player = require('../Data/Player.json');

const Enemy = require('../Data/Enemy.json');

var playerName;

var enemyName;



function genCharacter()
{
    playerName = names.First[Math.floor(Math.random() * names.First.length)];
    Player.Name = playerName;
    Player.HP = 100;
}

function genEnemy()
{
    enemyName = names.First[Math.floor(Math.random() * names.First.length)];
    Enemy.Name = enemyName;
    Enemy.HP = 100;
}

module.exports = 
{
    genCharacter,
    genEnemy
}