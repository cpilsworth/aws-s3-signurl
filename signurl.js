var AWS = require('aws-sdk');

var s3 = new AWS.S3();

function signUrl(bucket, key, timeout) {
    var url = s3.getSignedUrl('getObject', {Bucket: bucket, Key: key, Expires: timeout});
    console.log(url);
    return url;
}

function listObjects(params) {
    s3.listObjects(params, function (err, data) {
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
