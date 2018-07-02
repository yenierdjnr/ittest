#
# Each of these environments has a variety of settings
# that need to be set and may or may not have reasonable
# defaults. Using maps here gives us two advantages
#
# * The settings are logically grouped
#
# * We can set default to empty map here so that
#   missing values will generate an error when they
#   are looked up. That allows us to deploy staging
#   without having to set any  variable values for
#   production at all
#
# It has some disadvantages as well
#
# * It is less clear what settings are expected to be
#   set. Looking up each setting in the map explicitly
#   (rather than passing the whole map to a module as
#   a single value) mitigates this.
#

variable "staging" {
  type = "map"
  default = {}
}

variable "production" {
  type = "map"
  default = {}
}
