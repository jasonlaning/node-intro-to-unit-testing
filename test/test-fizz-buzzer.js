const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for `fizzBuzzer` function
describe('fizzBuzzer', function() {

// test the normal case
  it('should return `fizz` for multiples of 3', function() {
    let normalCases = [3, 9, 81];
    let expected = 'fizz';
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal(expected);
    });
  });

  it('should return `buzz` for multiples of 5', function() {
    let normalCases = [5, 35, 100];
    let expected = 'buzz';
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal(expected);
    });
  });

  it('should return `fizz-buzz` for multiples of 15', function() {
    let normalCases = [15, 45, 60];
    let expected = 'fizz-buzz';
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal(expected);
    });
  });

  it('should return the input number if not multiple of 3 or 5', function() {
    let normalCases = [1, 26, 101];
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });
  });

  it('should raise error if arg is not a number', function() {
    const badInputs = ['a', '1', false];
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});
