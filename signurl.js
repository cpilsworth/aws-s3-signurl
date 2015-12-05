'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

function signUrl(bucket, key, timeout) {

    const url = s3.getSignedUrl('getObject', {
        Bucket: bucket,
        Key: key,
        Expires: timeout });
    console.log(url);
    return url;
}

function listObjects(params) {

    s3.listObjects(params, (err, data) => {

        if (err) {
            process.exit(-1);
        }

        for (const item of data.Contents) {
            signUrl(params.Bucket, item.Key);
        }
    });
}

module.exports = {
    signUrl: signUrl,
    listObjects: listObjects
};
