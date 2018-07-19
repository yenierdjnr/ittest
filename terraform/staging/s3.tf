resource "aws_s3_bucket" "staging_bucket" {
  bucket = "itprotv-marketing-staging"
  region = "us-east-1"
  acl = "public-read"
  website_domain = "itprotv-marketing-staging.s3-website-us-east-1.amazonaws.com"
  website {
    index_document = "index.html"
    error_document = "index.html"
  }

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
      "Resource":["arn:aws:s3:::itprotv-marketing-staging/*"]
    }
  ]
}
POLICY
}
