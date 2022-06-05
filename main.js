const Character = require('./Handler/Character.js');

const Player = require('./Data/Player.json');

const Enemy = require('./Data/Enemy.json');


Start();



function Start()
{
    Character.genCharacter();
    Character.genEnemy();

    Battle();
}

function Battle()
{
    console.clear();
    console.log(`= Starting Battle =`);
    console.log(`${Player.Name}`);
    console.log(`vs`);
    console.log("");
    console.log(`${Enemy.Name}`);
    console.log("");
    console.log("An enemy appears");
}

function battleLoop()
{
    while (Player.HP > 1 && Enemy.HP > 1)
    {
        //battle code
    }
}