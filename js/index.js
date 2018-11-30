
var game = new Phaser.Game(600, 800, Phaser.AUTO, "", {
    preload: preload,
    create: create,
    update: update
});

function preload()
{
    game.load.image("gamer", "img/gamer.png");
    game.load.image("item", "img/item.png");
}

var player;
var cursors;
var leftEmitter;

function create()
{
    game.physics.startSystem(Phaser.Physics.ARCADE);

    player = game.add.sprite(game.world.width / 2, game.world.height / 2, "gamer");
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();

    game.input.keyboard.addCallbacks(this, downCallBack, upCallBack, pressCallBack);
    leftEmitter = game.add.emitter(game.world.width / 2, game.world.height / 2, 1000);
    leftEmitter.setXSpeed(100, 200);
    leftEmitter.setYSpeed(-50, 50);
    leftEmitter.makeParticles("item");

    leftEmitter.area = new Phaser.Rectangle(game.world.width / 2, game.world.height / 2, 0, 20);
    leftEmitter.bounce = 1;
    leftEmitter.angle = 0;
    leftEmitter.ignoreChildInput = true;

    leftEmitter.start(false, 5000, 20);
    leftEmitter.visible = false;
}

var defaultSpeed = 300;

var beforePlayerSpeed = 0;


var index = 0;
function update()
{
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;


    if (beforePlayerSpeed != 0 && player.body.speed == 0) {
        
    }

    if (cursors.left.isDown) {
        player.body.velocity.x = -defaultSpeed;

    }
    else if (cursors.right.isDown) {
        player.body.velocity.x = defaultSpeed
    }

    if (cursors.up.isDown) {
        player.body.velocity.y = -defaultSpeed
    }
    else if (cursors.down.isDown) {
        player.body.velocity.y = defaultSpeed
    }

    leftEmitter.emitX = player.body.x;
    leftEmitter.emitY = player.body.y;

    beforePlayerSpeed = player.body.speed;

}

var index = 0;

function pressCallBack()
{
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
        
    }
}

function downCallBack()
{
    if (game.input.keyboard.isDown(Phaser.KeyCode.LEFT)) {
        //leftEmitter.visible = true;
    }
}

function upCallBack()
{
    
}
