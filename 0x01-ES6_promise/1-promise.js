/*
*This function returns a promise that resolves with a success response
*or rejects with an error message if the API call is not successful.
*/
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // Check if the API call is successful
    if (success) {
      // Resolve the promise with a success response
      resolve({ status: 200, body: 'Success' });
    } else {
      // Reject the promise with an error message
      reject(new Error('The fake API is not working currently'));
    }
  });
}
