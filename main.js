const Character = require('./Handler/Character.js');

const Battle = require('./Handler/Battle.js');

const Player = require('./Data/Player.json');

const Enemy = require('./Data/Enemy.json');


Start();



function Start()
{
    Character.genCharacter();
    Character.genEnemy();

    startBattle();
}

function startBattle()
{
    console.clear();
    console.log(`= Starting Battle =`);
    console.log(`${Player.Name}`);
    console.log(`vs`);
    console.log("");
    console.log(`${Enemy.Name}`);
    console.log("");
    console.log("An enemy appears");
    Battle.playerAttack();
}

function battleLoop()
{
    while (Player.HP > 1 && Enemy.HP > 1)
    {
        //battle code
        console.log("nigga bawlz this will probably crash");
    }
}