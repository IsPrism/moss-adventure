const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const tileset = new Image();
tileset.src = "tileset.png"
tileset.onload = function() {
    ctx.drawImage(tileset, 0, 0)
};