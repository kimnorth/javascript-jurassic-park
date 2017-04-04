var assert = require('assert');
var Park = require('../app/park.js');
var Dinosaur = require('../app/dinosaur.js');

describe('Park', function(){

  var park;
  var velociraptor;

  beforeEach(function(){
    park = new Park();
    velociraptor = new Dinosaur();
  });

  it('Enclosure should start empty', function(){
    assert.strictEqual(0, park.getEnclosureSize());
  })

  it('Can add dinosaurs to the enclosure', function(){
    park.addDinosaur(velociraptor);
    assert.strictEqual(1, park.getEnclosureSize());
  })

});