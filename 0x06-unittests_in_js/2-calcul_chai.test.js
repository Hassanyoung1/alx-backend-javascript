const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('SUM', () => {
  it('should return the sum of two numbers', () => {
    chai.expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    chai.expect(calculateNumber('SUM', 1, -2)).to.equal(-1);
    chai.expect(calculateNumber('SUM', 1, 0)).to.equal(1);
  });
});

describe('SUBTRACT', () => {
  it('should return the difference of two numbers', () => {
    chai.expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
    chai.expect(calculateNumber('SUBTRACT', 1, -2)).to.equal(3);
    chai.expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
  });
});

describe('DIVIDE', () => {
  it('should return the division of two numbers', () => {
    chai.expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    chai.expect(calculateNumber('DIVIDE', 1, -2)).to.equal(-0.5);
    chai.expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
});

