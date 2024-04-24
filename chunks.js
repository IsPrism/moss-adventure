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

//the Chunk class takes 2 arguments: tilesList, which should be an array, and loot tables.

class Chunk {
    constructor(tilesList, lootTables) {
        this.tilesList = tilesList
    };
    drawChunk() {
        ctx.drawImage(tileset, tiles[this.tilesList[0]].cropX, tiles[this.tilesList[0]].cropY, tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
    };
};

tileset.onload = function() {
    let chunk1 = new Chunk([0], 3, 3, 3);
    chunk1.drawChunk();
};