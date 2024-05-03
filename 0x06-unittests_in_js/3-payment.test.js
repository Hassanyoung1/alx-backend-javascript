const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require("./utils")

describe('sendPaymentRequestToApi', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    it('should spy on calculateNumber', function() {
        Utils.sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
        spy.restore();
    });

});

