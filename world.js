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
    drawAllChunks();
};

tileset.src = "resources/tileset.png";

const timeStep = 1/60

let previousTime = 0;
let delta = 0;

const loop = time => {
    const dt = time - previousTime;
    delta = delta + dt;
    while (delta > timeStep) {
        //updating functions
    };

        //rendering functions

    window.requestAnimationFrame(loop);
};

window.requestAnimationFrame(time => {
    previousTime = time;
  
    window.requestAnimationFrame(loop);
  });