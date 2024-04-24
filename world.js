const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "black";
ctx.imageSmoothingEnabled = false;

const tileWidth = 70;
const tileHeight = 70;
const cropWidth = 16;
const cropHeight = 16;

const tileset = new Image();
tileset.src = "resources/tileset.png"
tileset.onload = function() {
    drawAllChunks();
};