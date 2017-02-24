'use strict'

const Code = require('code')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const https = require('https')
const signUrl = require('../signurl.js')

const testBucket = 'aws-s3-signurl-test';
const testFile = 'test-file.txt';
const testFileUrl = 'https://' + testBucket + '.s3.amazonaws.com/' + testFile;

lab.test('base url is provided', (done) => {
  Code.expect(signUrl.signUrl(testBucket, 'test-file.txt')).to.startWith(testFileUrl)
  done();
});

lab.test('url is blocked without signature', (done) => {
  https.get(testFileUrl, (res) => {
    Code.expect(res.statusCode).to.equal(403)
    done()
  });
});

lab.test('url is not blocked with signature', (done) => {
  console.log(signUrl.signUrl(testBucket, testFile));
  var req = https.get(signUrl.signUrl(testBucket, testFile), (res) => {
    Code.expect(res.statusCode).to.equal(200)
    done()
  });
})
