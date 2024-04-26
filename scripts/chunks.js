var tiles;

async function drawAllChunks() {
  try {
    const response = await fetch('tiles.json');
    const data = await response.json();
    tiles = data;

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

  } 
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

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