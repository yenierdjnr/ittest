provider "aws" {
  region = "us-east-1"
}

module "staging" {
  source = "./staging"
}

module "production" {
  source = "./production"
}
