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

class Tile {
    constructor() {

    };
};

class Chunk {
    constructor(tilesList, width, height, lootTables) {
        this.width = width
        this.height= height
        ctx.drawImage(tileset, tiles[tilesList[0]].cropX, 0, tileWidth, tileHeight, 0, 0, tileWidth, tileHeight);
    };
};

tileset.onload = function() {
    new Chunk([0], 3, 3, 3)
}