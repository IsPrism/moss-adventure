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

tileset.onload = function() {
    
var chunk1 = new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 0, 0);
var chunk2 = new Chunk([1, 0, 1, 0, 1, 0, 1, 0, 1], 1, 0);
var chunk3 = new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 2, 0);
var chunk4 = new Chunk([1, 0, 1, 0, 1, 0, 1, 0, 1], 3, 0);

var chunk5 = new Chunk([1, 0, 1, 0, 1, 0, 1, 0, 1], 0, 1);
var chunk6 = new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 1, 1);
var chunk7 = new Chunk([1, 0, 1, 0, 1, 0, 1, 0, 1], 2, 1);
var chunk8 = new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 3, 1);

var chunk9 = new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 0, 2);
var chunk10= new Chunk([1, 0, 1, 0, 1, 0, 1, 0, 1], 1, 2);
var chunk11= new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 2, 2);
var chunk12= new Chunk([1, 0, 1, 0, 1, 0, 1, 0, 1], 3, 2);

    drawAllChunks();
};

tileset.src = "resources/tileset.png";

window.requestAnimationFrame(gameLoop)


function gameLoop() {
    update();
    window.requestAnimationFrame(gameLoop)
};

function update() {
    console.log("eenor")
};