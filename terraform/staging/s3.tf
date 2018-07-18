resource "aws_s3_bucket" "staging_bucket" {
  bucket = "marketing-staging"
  region = "us-east-1"
  acl = "public-read"
}

resource "aws_s3_bucket_policy" "marketing-staging-policy" {
  bucket = "${aws_s3_bucket.staging_bucket.id}"
  policy =<<POLICY
{
  "Version": "2012-10-17",
  "Id": "MARKETINGSTAGINGPOLICY",
  "Statement":[
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::new-staging.itpro.tv/*"]
    }
  ]
}
POLICY
}
