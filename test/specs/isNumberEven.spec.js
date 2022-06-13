/* eslint-disable linebreak-style */
const NumbersValidator = require('../../app/validator');
const {expect} = require('chai');

describe('isNomberEven positive scenarios', function() {
  let validator;
  beforeEach(function() {
    validator = new NumbersValidator;
  });
  afterEach(function() {
    validator = null;
  });
  it('should return true if number even', function() {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });
  it('should return false if number if odd', function() {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });
});
