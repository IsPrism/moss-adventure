const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const tileWidth = 32;
const tileHeight = 32;
const tileColumns = Math.round(canvas.width/tileWidth);
const tileRows = Math.round(canvas.width/tileHeight);

const chunks = [
    {
        
    }
]

function drawChunk() {
    ctx.drawImage(tileset, 0, 0, tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
    ctx.drawImage(tileset, 32, 0, tileWidth, tileHeight, 32, 0, tileWidth, tileHeight);
    ctx.drawImage(tileset, 0, 0, tileWidth, tileHeight, 64, 0, tileWidth, tileHeight);
    ctx.drawImage(tileset, 32, 0, tileWidth, tileHeight, 96, 0, tileWidth, tileHeight);
    ctx.drawImage(tileset, 0, 0, tileWidth, tileHeight, 128, 0, tileWidth, tileHeight);
    ctx.drawImage(tileset, 32, 0, tileWidth, tileHeight, 160, 0, tileWidth, tileHeight);
};

const tileset = new Image();
tileset.src = "resources/tileset.png"
tileset.onload = function() {
    drawChunk();
};