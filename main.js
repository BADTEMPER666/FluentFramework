const Character = require('./Handler/Character.js');

const Player = require('./Data/Player.json');

const Enemy = require('./Data/Enemy.json');


Start();
Battle();



function Start()
{
    Character.genCharacter();
    Character.genEnemy();
}

function Battle()
{
    console.clear();
    console.log(`= Starting Battle =`);
    console.log(`${Player.Name}`);
    console.log(`vs`);
    console.log("");
    console.log(`${Enemy.Name}`);
}

function battleLoop()
{
    
}