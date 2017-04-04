var Park = function(){
  this.enclosureSize = [];

  this.getEnclosureSize = function(){
    return this.enclosureSize.length;
  }

  this.addDinosaur = function(dinosaur){
    this.enclosureSize.push(dinosaur);  
  }
  
}

module.exports = Park;