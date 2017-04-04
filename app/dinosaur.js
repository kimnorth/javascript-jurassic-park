var Dinosaur = function(type, offspring){
  this.type = type;
  this.offspringPerYear = offspring;
}

Dinosaur.prototype = {

  getType: function(){
    return this.type;
  },

  getOffspring: function(){
    return this.offspringPerYear;
  }

}

module.exports = Dinosaur;