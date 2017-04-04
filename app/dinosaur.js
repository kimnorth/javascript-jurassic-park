var Dinosaur = function(type){
  this.type = type;
  this.getType = function(){
    return this.type;
  }
}

module.exports = Dinosaur;