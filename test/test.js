'use strict'

const Code = require('code')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const https = require('https')
const signUrl = require('../signurl.js')

lab.test('base url is provided', (done) => {
  Code.expect(signUrl.signUrl('aws-s3-signurl', 'test-file.txt')).to.startWith('https://aws-s3-signurl.s3.amazonaws.com/test-file.txt')
  done()
})

lab.test('url is blocked without signature', (done) => {
  https.get('https://aws-s3-signurl.s3.amazonaws.com/test-file.txt', (res) => {
    Code.expect(res.statusCode).to.equal(403)
    done()
  })
})

lab.test('url is blocked without signature', (done) => {
  https.get(signUrl.signUrl('aws-s3-signurl', 'test-file.txt'), (res) => {
    Code.expect(res.statusCode).to.equal(200)
    done()
  })
})
