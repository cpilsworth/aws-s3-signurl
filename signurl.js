const S3 = require('aws-sdk/clients/s3');
const s3 = new S3();

function signUrl (bucket, key, timeout) {
  const url = s3.getSignedUrl('getObject', {
    Bucket: bucket,
    Key: key,
    Expires: timeout })
  return url;
}

async function listObjects (params, timeout) {
  const data = await s3.listObjects(params).promise();
  if (!data || !data.Contents) {
    return [];
  }
  return data.Contents.map(item => signUrl(params.Bucket, item.Key, timeout));
}

exports.signUrl = signUrl;
exports.listObjects = listObjects;
