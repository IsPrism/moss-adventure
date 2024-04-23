const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const tileWidth = 16;
const tileHeight = 16;
const tileColumns = Math.round(canvas.width/tileWidth);
const tileRows = Math.round(canvas.width/tileHeight);

const tileset = new Image();
tileset.src = "resources/tileset.png"

console.log(tileColumns)
console.log(tileRows)