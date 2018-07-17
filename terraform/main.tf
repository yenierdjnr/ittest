provider "aws" {
  version = "~> 1.20"
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket = "itprotv-terraform-state"
    key = "itprotv-marketing.tfstate"
    region = "us-east-1"
  }
}

data "terraform_remote_state" "genesis" {
  backend = "s3"
  config {
    bucket = "itprotv-terraform-state"
    key = "project-genesis.tfstate"
    region = "us-east-1"
  }
}

resource "aws_ecr_repository" "itprotv_marketing_repo" {
  name = "itprotv-marketing"
}

# This resource is not included in the staging and production modules below, which means that if you
# want to make any changes to it you will need to run `./tf --latest-shas apply` locally.
resource "aws_ecr_lifecycle_policy" "itprotv_marketing_repo_policies" {
  repository = "${aws_ecr_repository.itprotv_marketing_repo.name}"
  policy = <<JSON
{
  "rules": [
    {
      "rulePriority": 1,
      "description": "not-too-many-untagged-images",
      "selection": {
        "tagStatus": "untagged",
        "countType": "imageCountMoreThan",
        "countNumber": 100
      },
      "action": {
        "type": "expire"
      }
    },
    {
      "rulePriority": 2,
      "description": "not-too-many-tagged-images",
      "selection": {
        "tagStatus": "tagged",
        "tagPrefixList": [
          "commit-"
        ],
        "countType": "imageCountMoreThan",
        "countNumber": 100
      },
      "action": {
        "type": "expire"
      }
    }
  ]
}
JSON
}

module "staging" {
  source = "./staging"
  itprotv_marketing_repo = "${aws_ecr_repository.itprotv_marketing_repo.repository_url}"
  region = "us-east-1"
  cluster_name = "${data.terraform_remote_state.genesis.main_cluster_name}"
  image_tag = "commit-${var.staging["git_sha"]}"
  proxy_url = "http://new-staging.itpro.tv.s3-website-us-east-1.amazonaws.com"
}

module "production" {
  source = "./production"
}
