var assert = require('assert');
var Park = require('../app/park.js');

describe('Park', function(){

  var park;

  beforeEach(function(){
    park = new Park();
  });

  it('Enclosure should start empty', function(){
    assert.strictEqual(0, park.getEnclosureSize());
  })

});