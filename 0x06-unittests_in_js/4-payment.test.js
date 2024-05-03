const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;
  let calculateNumberStub;

  beforeEach(() => {
    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
    // Stub Utils.calculateNumber to return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    // Restore the spy and stub after each test
    consoleLogSpy.restore();
    calculateNumberStub.restore();
  });

  it('should return 10 and log The total is 10.', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);
    // Verify that calculateNumber is called with the correct arguments
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    // Verify that calculateNumber is called only once
    sinon.assert.calledOnce(calculateNumberStub);
    // Verify that console.log is called with the correct message
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');
  });
});
