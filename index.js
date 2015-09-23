#!/usr/bin/env node

var s3  = require('./signurl.js'); 

var userArgs = process.argv.slice(2);
var bucket = userArgs[0];
var key = userArgs[1];

if (bucket && key) {
  s3.signUrl(bucket, key);
} else if (bucket) {
  s3.listObjects({Bucket: bucket});
} else {
  console.log('usage aws-s3-signurl {bucket} [{key}]');
}
