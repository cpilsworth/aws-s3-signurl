#!/usr/bin/env node
'use strict';
const s3 = require('./signurl.js');
const argv = require('minimist')(process.argv.slice(2));

const bucket = argv.bucket || argv._[0];
const key = argv.key || argv._[1];
const expires = argv.expires || argv._[2] || 900;

if (bucket && key) {
    s3.signUrl(bucket, key, expires);
}
else if (bucket) {
    s3.listObjects({
        Bucket: bucket
    });
}
else {
    console.log('usage aws-s3-signurl {bucket} [{key}] [{expires=900(s)}');
}
