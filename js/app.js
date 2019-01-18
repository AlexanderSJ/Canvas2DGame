// What if each tile had an index pointing to the corresponding entry in an array of tilesheets
// So that way we could store what tilesheet that tile texture corresponds to.

var TileSheet = function(img, tileSize){
  this.img = img;
  this.tileSize = tileSize;
  this.dim = {
    height:img.height,
    width:img.width
  };
  return this;
}

var TileMap = function(sizeX, sizeY, tileSheet){
  this.mapDim = {
    x: sizeX,
    y: sizeY
  };
  this.indexes = [];
  this.tileSheet = tileSheet;
  return this;
}

function GetTile(index, tileSize, tileSheetDimensions){
  return {
    x: (index % (tileSheetDimensions.width / tileSize)) * tileSize,
    y: floor(index / (tileSheetDimensions.width / tileSize)) * tileSize
  };
}

function GetTile(x,y,tileSize){
  return {
    x: x * tileSize,
    y: y * tileSize
  };
}

var game = function() {

  const canvas = document.getElementById("game_canvas");
  const context = canvas.getContext('2d');

  const img = document.getElementById('tilesheet');

  const tileSheet = TileSheet(img, 64);

  var map = TileMap(5,5,tileSheet);

  map.indexes = [9,9,9,9,9,
                9,9,9,9,9,
                9,9,9,9,9,
                9,9,9,9,9,
                9,9,9,9,9];
  for (row = 0; row < map.mapDim.x; row++){
    for (col = 0; col < map.mapDim.y; col++){
      console.log(map.indexes[(row*map.mapDim.x)+col]);
        tile = GetTile(
          map.indexes[(row * map.mapDim.x) + col],
          map.tileSheet.tileSize,
          map.tileSheet.dim
        );
        console.log(tile.x);
        context.drawImage(img,tile.x,tile.y,map.tileSheet.tileSize,map.tileSheet.tileSize,row*map.tileSheet.tileSize,col*map.tileSheet.tileSize,64,64);
    }
  }



}
