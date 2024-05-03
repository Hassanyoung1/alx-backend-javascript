const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with successful response when success is true', function(done) {
    getPaymentTokenFromAPI(true).then(function(response) {
      assert.deepStrictEqual(response, { data: 'Successful response from the API' });
      done(); // Call done to indicate the asynchronous test has completed
    }).catch(function(err) {
      done(err); // Call done with an error if there's a rejection in the promise
    });
  });
});
