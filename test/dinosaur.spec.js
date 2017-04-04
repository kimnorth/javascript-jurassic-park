var assert = require('assert');
var Dinosaur = require('../app/dinosaur.js');

describe('Dinosaur', function(){

  var velociraptor;

  beforeEach(function(){
    velociraptor = new Dinosaur("Velociraptor");
  })

  it('has a type', function(){
    assert.strictEqual( 'Velociraptor', velociraptor.getType() );
  })

});