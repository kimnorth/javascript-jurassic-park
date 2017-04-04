var Dinosaur = function(type, offspring){
  this.type = type;
  this.offspringPerYear = offspring;
  this.getType = function(){
    return this.type;
  }
  
  this.getOffspring = function(){
    return this.offspringPerYear;
  }
}

module.exports = Dinosaur;