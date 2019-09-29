# aws-s3-signurl

![Build Status](https://github.com/cpilsworth/aws-s3-signurl/workflows/verify/badge.svg)
[![Greenkeeper badge](https://badges.greenkeeper.io/cpilsworth/aws-s3-signurl.svg)](https://greenkeeper.io/)

The AWS CLI does not currently have the ability to sign urls for time restricted access to secure buckets.  This simple utility
takes a bucketname and (optionally) a keyname and outputs a signed url for them. If just the bucketname is provided a signed url 
for each of the keys is output.  If the key is specified also, then just that bucket/key combo is output.

Credentials are loaded from environment variables or from `~/.aws/config`, if present. See the [Setting AWS Credentials](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html#Setting_AWS_Credentials) for more details.


install:
```
npm install --global aws-s3-signurl
```

usage:
```
aws-s3-signurl {bucketname} [{keyname}] [{expires}]
```

If a just a bucketname is supplied, the contents of the bucket will be listed.

If a key is supplied, then just that key will be output.

If an expires is supplied (number, in seconds) then the link will be valid for that many seconds (default = 900 seconds).
