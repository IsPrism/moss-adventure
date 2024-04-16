const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const tileWidth = 32;
const tileHeight = 32;
const tileColumns = Math.round(canvas.width/tileWidth);
const tileRows = Math.round(canvas.width/tileHeight);

const tileset = new Image();
tileset.src = "resources/tileset.png"
tileset.onload = function() {
    ctx.drawImage(tileset, 0, 0, 32, 32, 0, 0, 32, 32)
};