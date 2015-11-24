# aws-s3-signurl

[ ![Codeship Status for cpilsworth/aws-s3-signurl](https://codeship.com/projects/4bbcb7b0-751b-0133-4e06-52f3970f70f1/status?branch=master)](https://codeship.com/projects/117832)

The AWS CLI does not currently have the ability to sign urls for time restricted access to secure buckets.  This simple utility
takes a bucketname and (optionally) a keyname and outputs a signed url for them. If just the bucketname is provided a signed url 
for each of the keys is output.  If the key is specified also, then just that bucket/key combo is output.

Credentials are loaded from environment variables or from `~/.aws/config` if present.  
See the [Setting AWS Credentials](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html#Setting_AWS_Credentials) for more details.


install:
```
npm install --global aws-s3-signurl
```

usage:
```
aws-s3-signurl {bucketname} [{keyname}]
```
