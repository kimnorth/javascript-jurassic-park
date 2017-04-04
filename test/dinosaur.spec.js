var assert = require('assert');
var Dinosaur = require('../app/dinosaur.js');

describe('Dinosaur', function(){

  var velociraptor;

  beforeEach(function(){
    velociraptor = new Dinosaur("Velociraptor", 10);
  })

  it('has a type', function(){
    assert.strictEqual( 'Velociraptor', velociraptor.getType() );
  })

  it('has a number of offspring per year', function(){
    assert.strictEqual(10, velociraptor.getOffspring());
  })

});