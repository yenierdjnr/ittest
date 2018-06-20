# Due to a terraform bug this was done manually :( :(
# data "aws_route53_zone" "itpro_tv" {
#   name = "itpro.tv."
# }

# resource "aws_route53_record" "staging_dns" {
#   zone_id = "${data.aws_route53_zone.itpro_tv.id}"
#   name = "new-staging.itpro.tv"
#   type = "A"
#   alias {
#     name = "${aws_s3_bucket.staging_bucket.website_domain}"
#     zone_id = "${aws_s3_bucket.staging_bucket.hosted_zone_id}"
#     evaluate_target_health = false
#   }
# }

resource "aws_s3_bucket" "staging_bucket" {
  bucket = "new-staging.itpro.tv"
  region = "us-east-1"
  acl = "public-read"
  website_domain = "new-staging.itpro.tv"
  website {
    index_document = "index.html"
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
      "Resource":["arn:aws:s3:::new-staging.itpro.tv/*"]
    }
  ]
}
POLICY
}
