resource "aws_s3_bucket" "production_bucket" {
  bucket = "itprotv-marketing-production"
  region = "us-east-1"
  acl = "public-read"
  website_domain = "itprotv-marketing-production.s3-website-us-east-1.amazonaws.com"
  website {
    index_document = "index.html"
    error_document = "index.html"
  }

}

resource "aws_s3_bucket_policy" "marketing-production-policy" {
  bucket = "${aws_s3_bucket.production_bucket.id}"
  policy =<<POLICY
{
  "Version": "2012-10-17",
  "Id": "MARKETINGPRODUCTIONPOLICY",
  "Statement":[
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::itprotv-marketing-production/*"]
    }
  ]
}
POLICY
}
