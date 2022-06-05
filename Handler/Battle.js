const Player = require('../Data/Player.json');

const Enemy = require('../Data/Enemy.json');

var playerAlive;

var enemyAlive;

function playerAttack()
{
    var dmg = getRandomNum(1, 100);
    Enemy.HP = Enemy.HP - dmg;
}

function enemyAttack()
{
    var dmg = getRandomNum(1, 100);
    Player.HP = Player.HP - dmg;
}

function getRandomNum(min, max) 
{
    return Math.random() * (max - min) + min;
}

module.exports = 
{
    playerAttack,
    enemyAttack,
    playerAlive,
    enemyAlive
}