/**
 * http://usejsdoc.org/
 */
var request = require('request');

request('https://webtoon.bamtoki.com/%EB%83%84%EC%83%88-41.html', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
