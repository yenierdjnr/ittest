data "aws_route53_zone" "itpro_tv" {
  name = "itpro.tv."
}

resource "aws_route53_record" "marketing-staging" {
  zone_id = "${data.aws_route53_zone.itpro_tv.id}"
  name = "new-staging.itpro.tv"
  type = "A"
  alias {
    name = "${aws_s3_bucket.marketing-staging.website_domain}"
    zone_id = "${aws_s3_bucket.marketing-staging.hosted_zone_id}"
    evaluate_target_health = false
  }
}

resource "aws_s3_bucket" "marketing-staging" {
  bucket = "itprotv-marketing-staging"
  region = "us-east-1"
  acl = "public-read"
  website_domain = "new-staging.itpro.tv"
  website {
    index_document = "index.html"
  }

}