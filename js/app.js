var TileMapLayer = function(){
  this.indexes = [];
}

var Tilesheet = function(img, tileSize){
  this.img = img;
  this.dim = {
    x:
  }
  this.tileSize = tileSize;
}

var Map = function(tileSize, sizeX, sizeY, tilesheetIndex){
  this.tileSize = tileSize;
  this.mapDim = {
    x: sizeX,
    y: sizeY
  };
  this.layers = [];
  this.tilesheet = tilesheetIndex;
}

var game = function() {
  const canvas = Document.getElementById("game_canvas");
  const context = canvas.getContext('2d');



}
