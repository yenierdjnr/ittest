#!/bin/bash

set -e

npm install

gatsby develop --verbose -H 0.0.0.0
