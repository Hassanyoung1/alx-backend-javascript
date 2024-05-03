const chai = require('chai');
const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('SUM', () => {
  it('should return the sum of two numbers', () => {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    expect(calculateNumber('SUM', 1, -2)).to.equal(-1);
    expect(calculateNumber('SUM', 1, 0)).to.equal(1);
  });
});

describe('SUBTRACT', () => {
  it('should return the difference of two numbers', () => {
    expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 1, -2)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
  });
});

describe('DIVIDE', () => {
  it('should return the division of two numbers', () => {
    expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 1, -2)).to.equal(-0.5);
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
});

