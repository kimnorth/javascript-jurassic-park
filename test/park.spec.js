var assert = require('assert');
var Park = require('../app/park.js');
var Dinosaur = require('../app/dinosaur.js');

describe('Park', function(){

  var park;
  var velociraptor;
  var velociraptor2;
  var triceratops;

  beforeEach(function(){
    park = new Park();
    velociraptor = new Dinosaur('Velociraptor', 10, 20, 3);
    triceratops = new Dinosaur('Triceratops', 1, 1, 1);
    velociraptor2 = new Dinosaur('Velociraptor', 10, 3, 40);
  });

  it('Enclosure should start empty', function(){
    assert.strictEqual(0, park.getEnclosureSize());
  })

  it('Can add dinosaurs to the enclosure', function(){
    park.addDinosaur(velociraptor);
    assert.strictEqual(1, park.getEnclosureSize());
  })

  it('Can remove dinosaurs of a particular type', function(){
    park.addDinosaur(velociraptor);
    park.addDinosaur(velociraptor2);
    park.addDinosaur(triceratops);
    park.removeType('Velociraptor');
    assert.strictEqual(1, park.getEnclosureSize());
  })

  it('Can return dinosaurs with an average offspring count of more than 2', function(){
    park.addDinosaur(velociraptor);
    park.addDinosaur(velociraptor2);
    park.addDinosaur(triceratops);
    assert.strictEqual(1, park.getDinosGreaterThan2().length);
  })

});