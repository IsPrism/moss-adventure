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
    drawChunk() {
        ctx.drawImage(tileset, tiles[this.tilesList[0]].cropX, tiles[this.tilesList[0]].cropY, cropWidth, cropHeight, this.posX + tileWidth * 0, this.posY + tileHeight * 0, tileWidth, tileHeight);
        ctx.drawImage(tileset, tiles[this.tilesList[1]].cropX, tiles[this.tilesList[0]].cropY, cropWidth, cropHeight, this.posX + tileWidth * 1, this.posY + tileHeight * 0, tileWidth, tileHeight);
        ctx.drawImage(tileset, tiles[this.tilesList[2]].cropX, tiles[this.tilesList[0]].cropY, cropWidth, cropHeight, this.posX + tileWidth * 2, this.posY + tileHeight * 0, tileWidth, tileHeight);
        ctx.drawImage(tileset, tiles[this.tilesList[3]].cropX, tiles[this.tilesList[0]].cropY, cropWidth, cropHeight, this.posX + tileWidth * 0, this.posY + tileHeight * 1, tileWidth, tileHeight);
        ctx.drawImage(tileset, tiles[this.tilesList[4]].cropX, tiles[this.tilesList[0]].cropY, cropWidth, cropHeight, this.posX + tileWidth * 1, this.posY + tileHeight * 1, tileWidth, tileHeight);
        ctx.drawImage(tileset, tiles[this.tilesList[5]].cropX, tiles[this.tilesList[0]].cropY, cropWidth, cropHeight, this.posX + tileWidth * 2, this.posY + tileHeight * 1, tileWidth, tileHeight);
        ctx.drawImage(tileset, tiles[this.tilesList[6]].cropX, tiles[this.tilesList[0]].cropY, cropWidth, cropHeight, this.posX + tileWidth * 0, this.posY + tileHeight * 2, tileWidth, tileHeight);
        ctx.drawImage(tileset, tiles[this.tilesList[7]].cropX, tiles[this.tilesList[0]].cropY, cropWidth, cropHeight, this.posX + tileWidth * 1, this.posY + tileHeight * 2, tileWidth, tileHeight);
        ctx.drawImage(tileset, tiles[this.tilesList[8]].cropX, tiles[this.tilesList[0]].cropY, cropWidth, cropHeight, this.posX + tileWidth * 2, this.posY + tileHeight * 2, tileWidth, tileHeight);
    };
};

let chunk1 = new Chunk([0, 1, 0, 1, 0, 1, 0, 1, 0], 0, 0);
let chunk2 = new Chunk([2, 3, 2, 3, 2, 3, 2, 3, 2], 1, 1);

tileset.onload = function() {
    chunk1.drawChunk();
    chunk2.drawChunk();
};