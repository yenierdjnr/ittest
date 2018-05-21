resource "aws_s3_bucket" "marketing-staging" {
    bucket = "itprotv-marketing-staging"
    region = "us-east-1"
    acl = "public-read"
}
