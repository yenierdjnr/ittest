resource "aws_s3_bucket" "marketing-production" {
    bucket = "itprotv-marketing-production"
    region = "us-east-1"
    acl = "public-read"
}
