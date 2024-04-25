class Player {
    constructor() {
        ctx.drawImage("resources/player.png", 0, 0, 16, 16, 16, 16, 16, 16)
    };
};

const playerImg = new Image();

playerImg.onload = function() {
    var player = new Player();
};

playerImg.src = "resources/player.png";