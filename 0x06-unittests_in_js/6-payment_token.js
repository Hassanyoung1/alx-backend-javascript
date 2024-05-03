function getPaymentTokenFromAPI(success = true) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({data: 'Successful response from the API'});
        } else {
            reject();
        }
    });
}

module.exports = getPaymentTokenFromAPI;
