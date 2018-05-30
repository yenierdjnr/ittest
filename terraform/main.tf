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

module "staging" {
  source = "./staging"
}

module "production" {
  source = "./production"
}
