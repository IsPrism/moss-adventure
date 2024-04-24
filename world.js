const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const tileWidth = 80;
const tileHeight = 80;
const cropWidth = 16;
const cropHeight = 16;

const tileset = new Image();
tileset.src = "resources/tileset.png"
