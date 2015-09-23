#!/usr/bin/env node

var AWS = require('aws-sdk');

var s3 = new AWS.S3();

function signUrl(bucket, key) {
  s3.getSignedUrl('getObject', {Bucket: bucket, Key: key }, function (err, url) {
    if (err) process.exit(-1);
    console.log(url);
  });
}

function listObjects(params) {
  s3.listObjects(params, function(err, data) {
    if (err) process.exit(-1);
    
    for (var item of data.Contents) {
      signUrl(params.Bucket, item.Key);
    }
  });
}

module.exports = {
  signUrl: signUrl,
  listObjects: listObjects
};
