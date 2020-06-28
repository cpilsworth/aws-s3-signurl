const { expect } = require('@hapi/code');
const { it } = exports.lab = require('@hapi/lab').script();
const request = require('request-promise-native');
const signUrl = require('../signurl.js')

const TEST_BUCKET = 'aws-s3-signurl-testing';
const TEST_FILE = 'test-file.txt';
const TEST_URL = `https://${TEST_BUCKET}.s3.amazonaws.com/${TEST_FILE}`;

it('base url is provided', () => {
  expect(signUrl.signUrl(TEST_BUCKET, 'test-file.txt')).to.startWith(TEST_URL)
});

it('url is blocked without signature', async () => {
  const response = await get(TEST_URL);
  expect(response.statusCode).to.equal(403)
});

it('url is not blocked with signature', async () => {
  try {
  const response = await get(signUrl.signUrl(TEST_BUCKET, TEST_FILE));
  expect(response.statusCode).to.equal(200);
  } catch (e) {
    console.error("Exception calling url without sig", e);
  }
})

/**
 * Call prepare `options` for the request.  The full response is required as
 * the statusCode values are inspected in the tests.
 */
function get(uri) {
  return request({ uri: uri,
          simple: false,   // don't throw exception if not statusCode == 200
          method: "GET",
          resolveWithFullResponse: true  // return the full response, not just body
        });
}
