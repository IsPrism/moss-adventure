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
        ctx.drawImage(tileset, tiles[this.tilesList[0]].cropX, tiles[this.tilesList[0]].cropY, cropWidth, cropHeight, this.posX, this.posY, tileWidth, tileHeight);
    };
};

let chunk1 = new Chunk([0], 0, 0);

tileset.onload = function() {
    chunk1.drawChunk();
};