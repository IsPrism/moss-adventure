let tiles = [
    {
        "name":"greenLight",
        "cropX":0,
        "cropY":0,
        "set":1
    },
    {
        "name":"greenDark",
        "cropX":16,
        "cropY":0,
        "set":1
    },
    {
        "name":"blueLight",
        "cropX":32,
        "cropY":0,
        "set":2
    },
    {
        "name":"blueDark",
        "cropX":48,
        "cropY":0,
        "set":2
    },
    {
        "name":"redLight",
        "cropX":0,
        "cropY":16,
        "set":3
    },
    {
        "name":"redDark",
        "cropX":16,
        "cropY":16,
        "set":3
    },
    {
        "name":"brownLight",
        "cropX":32,
        "cropY":16,
        "set":4
    },
    {
        "name":"brownDark",
        "cropX":48,
        "cropY":16,
        "set":4
    },
];

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
let chunk2 = new Chunk([2, 3, 2, 3, 2, 3, 2, 3, 2], 1, 0);

tileset.onload = function() {
    chunk1.drawChunk();
    chunk2.drawChunk();
};