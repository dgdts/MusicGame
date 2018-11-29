
var game = new Phaser.Game(600, 800, Phaser.AUTO, "", {
    preload: preload,
    create: create,
    update: update
});

function preload()
{
    game.load.image("gamer", "img/gamer.png");
}

var player;
var cursors;

function create()
{
    game.physics.startSystem(Phaser.Physics.ARCADE);

    player = game.add.sprite(game.world.width / 2, game.world.height / 2, "gamer");
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();
}

function update()
{
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
        speed = 1;
    }
    if (cursors.left.isDown) {
        player.body.velocity.x = -150;

    }
    else if (cursors.right.isDown) {
        player.body.velocity.x = 150
    }

    if (cursors.up.isDown) {
        player.body.velocity.y = -150
    }
    else if (cursors.down.isDown) {
        player.body.velocity.y = 150
    }

}


