# Due to a terraform bug this was done manually :( :(
# data "aws_route53_zone" "itpro_tv" {
#   name = "itpro.tv."
# }

# resource "aws_route53_record" "production_dns" {
#   zone_id = "${data.aws_route53_zone.itpro_tv.id}"
#   name = "new-marketing.itpro.tv"
#   type = "A"
#   alias {
#     name = "${aws_s3_bucket.marketing_bucket.website_domain}"
#     zone_id = "${aws_s3_bucket.marketing_bucket.hosted_zone_id}"
#     evaluate_target_health = false
#   }
# }

resource "aws_s3_bucket" "production_bucket" {
  bucket = "new-production.itpro.tv"
  region = "us-east-1"
  acl = "public-read"
  website_domain = "new-production.itpro.tv"
  website {
    index_document = "index.html"
    error_document = "404.html"
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
      "Resource":["arn:aws:s3:::new-production.itpro.tv/*"]
    }
  ]
}
POLICY
}
