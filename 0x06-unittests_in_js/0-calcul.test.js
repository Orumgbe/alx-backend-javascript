const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('testing rounded down value of a', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('testing rounded down value of b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('testing for rounded down value of a and b', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('testing rounded up value of a', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('testing rounded up value of b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('testing rounded up value of a and b', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});