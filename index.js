#!/usr/bin/env node

var s3  = require('./signurl.js');
var argv = require('minimist')(process.argv.slice(2));

var bucket = argv.bucket || argv._[0];
var key = argv.key || argv._[1];
var expires = argv.expires || argv._[2] || 900;

if (bucket && key) {
  s3.signUrl(bucket, key, expires);
} else if (bucket) {
  s3.listObjects({Bucket: bucket});
} else {
  console.log('usage aws-s3-signurl {bucket} [{key}] [{expires=900(s)}');
}
