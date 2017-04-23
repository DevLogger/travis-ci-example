var assert = require('assert');
var greeter = require('../src/greeter.js');

describe('Greeter Test', function() {
  describe('Assert Message', function() {
    it('Message should be: Hello!', function() {
      assert.equal(greeter(), 'Hello!');
    });
  });
});