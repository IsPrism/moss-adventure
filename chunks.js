let tiles;

fetch('tiles.json')
  .then(response => response.json())
  .then(data => {
    tiles = data;
  })

class Chunk {
    constructor(tilesList, posX, posY, lootTables) {
        this.tilesList = tilesList;
        this.posX = posX * tileWidth * 3;
        this.posY = posY * tileHeight * 3;
    };
    drawTile(tileIndex, tilePosX, tilePosY) {
        ctx.drawImage(tileset, tiles[this.tilesList[tileIndex]].cropX, tiles[this.tilesList[tileIndex]].cropY, cropWidth, cropHeight, this.posX + tileWidth * tilePosX, this.posY + tileHeight * tilePosY, tileWidth, tileHeight);
    };
    drawChunk() {
        this.drawTile(0, 0, 0);
        this.drawTile(1, 1, 0);
        this.drawTile(2, 2, 0);
        this.drawTile(3, 0, 1);
        this.drawTile(4, 1, 1);
        this.drawTile(5, 2, 1);
        this.drawTile(6, 0, 2);
        this.drawTile(7, 1, 2);
        this.drawTile(8, 2, 2);
    };
};

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


async function drawAllChunks() {
  await tiles

  chunk1.drawChunk();
  chunk2.drawChunk();
  chunk3.drawChunk();
  chunk4.drawChunk();
  chunk5.drawChunk();
  chunk6.drawChunk();
  chunk7.drawChunk();
  chunk8.drawChunk();
  chunk9.drawChunk();
  chunk10.drawChunk();
  chunk11.drawChunk();
  chunk12.drawChunk();
};
