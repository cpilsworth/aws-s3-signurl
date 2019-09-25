#!/usr/bin/env node
const s3 = require('./signurl.js')
const argv = require('minimist')(process.argv.slice(2))

const bucket = argv.bucket || argv._[0]
const key = argv.key || argv._[1]
const expires = argv.expires || argv._[2] || 900

if (bucket && key) {
  const url = s3.signUrl(bucket, key, expires);
  console.log(url);
} else if (bucket) {
  s3.listObjects({ Bucket: bucket }, expires)
    .then(links => links.map( item => console.log(item)));
} else {
  console.log('usage aws-s3-signurl {bucket} [{key}] [--expires={seconds}]')
}


