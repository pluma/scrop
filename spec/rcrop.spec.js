/*global describe, it */
var expect = require('expect.js'),
  scrop = require('../').rcrop;

describe('scrop.rcrop', function() {
  describe('with an array', function() {
    it('returns an array', function() {
      expect(scrop([], 0)).to.be.an('array');
    });
    it('does not modify the argument', function() {
      var input = [1, 2, 3];
      scrop(input, 2);
      expect(input).to.eql([1, 2, 3]);
    });
    it('crops it to the given length', function() {
      expect(scrop([1, 2, 3], 2).length).to.be(2);
    });
    it('returns only the last n items', function() {
      expect(scrop([1, 2, 3], 2)).to.eql([2, 3]);
    });
  });
  describe('with a string', function() {
    it('returns a string', function() {
      expect(scrop('', 0)).to.be.a('string');
    });
    it('does not modify the argument', function() {
      var input = 'abc';
      scrop(input, 2);
      expect(input).to.eql('abc');
    });
    it('crops it to the given length', function() {
      expect(scrop('abc', 2).length).to.be(2);
    });
    it('returns only the last n items', function() {
      expect(scrop('abc', 2)).to.eql('bc');
    });
  });
  if (typeof Buffer !== 'undefined') {
    describe('with a Buffer', function() {
      it('returns a Buffer', function() {
        expect(scrop(new Buffer(0), 0)).to.be.a(Buffer);
      });
      it('does not modify the argument', function() {
        var input = new Buffer([1, 2, 3]);
        scrop(input, 2);
        expect(input).to.eql(new Buffer([1, 2, 3]));
      });
      it('crops it to the given length', function() {
        expect(scrop(new Buffer([1, 2, 3]), 2).length).to.be(2);
      });
      it('returns only the last n items', function() {
        expect(scrop(new Buffer([1, 2, 3]), 2)).to.eql(new Buffer([2, 3]));
      });
    });
  }
});