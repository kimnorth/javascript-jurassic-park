var Park = function(){
  this.enclosure = [];
}

Park.prototype = {

  getEnclosureSize: function(){
    return this.enclosure.length;
  },

  addDinosaur: function(dinosaur){
  this.enclosure.push(dinosaur);  
  },

  removeType: function(type){

    for (i = this.enclosure.length - 1; i >= 0; i--){
      if (this.enclosure[i].getType() == type){
      this.enclosure.splice(this.enclosure[i], 1);
    }
  }

}
}


module.exports = Park;