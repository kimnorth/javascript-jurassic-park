var Dinosaur = function(type, offspring2016, offspring2017, offspring2018){
  this.type = type;
  this.offspring2016 = offspring2016;
  this.offspring2017 = offspring2017;
  this.offspring2018 = offspring2018;
}

Dinosaur.prototype = {

  getType: function(){
    return this.type;
  },

  getOffspring2016: function(){
    return this.offspring2016;
  },

  getOffspring2017: function(){
    return this.offspring2017;
  },

  getOffspring2018: function(){
    return this.offspring2018;
  }
}

module.exports = Dinosaur;