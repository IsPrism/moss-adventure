fetch('tiles.json')

console.log(tiles)

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

let chunk1 = new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 0, 0);
let chunk2 = new Chunk([1, 0, 1, 0, 1, 0, 1, 0, 1], 1, 0);
let chunk3 = new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 2, 0);
let chunk4 = new Chunk([1, 0, 1, 0, 1, 0, 1, 0, 1], 3, 0);

let chunk5 = new Chunk([1, 0, 1, 0, 1, 0, 1, 0, 1], 0, 1);
let chunk6 = new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 1, 1);
let chunk7 = new Chunk([1, 0, 1, 0, 1, 0, 1, 0, 1], 2, 1);
let chunk8 = new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 3, 1);

let chunk9 = new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 0, 2);
let chunk10= new Chunk([1, 0, 1, 0, 1, 0, 1, 0, 1], 1, 2);
let chunk11= new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 2, 2);
let chunk12= new Chunk([1, 0, 1, 0, 1, 0, 1, 0, 1], 3, 2);

tileset.onload = function() {
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