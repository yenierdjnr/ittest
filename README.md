# gatsby
https://github.com/gatsbyjs/gatsby

## Clone repo

`git clone git@github.com:EdutainmentLIVE/itprotv-marketing.git`

`cd` into the project folder

## Run in docker

Run `docker-compose up`, this will build the docker container for gatsby and install the needed node modules. Go grab some coffee or snacks while it builds.

## Deploying to production

Your production branch is for the world to see - you will basically never push to this branch, and should only perform the steps below if the master branch builds and deploys to staging. The master branch deploys to staging on its own, however you are responsible for deploying production.

Using the command line:
1. `cd` to the repo root directory.
2. Run `git checkout master`, `git pull`, `git log origin/production..origin/master`.
3. Make note of member-facing and internal-facing changes from the output of `git log` in the step above.
4. To actually deploy, run `git push origin master:production`.

Production is now live! The status of your deploys can be seen below:

Staging Build:
[![Build Status](https://semaphoreci.com/api/v1/projects/7e78b3e1-7aa2-4ac7-95c3-b2b2dde7e34c/1979358/badge.svg)](https://semaphoreci.com/itprotv/itprotv-marketing)

Staging Deploy:
[![Build Status](https://semaphoreci.com/api/v1/projects/7e78b3e1-7aa2-4ac7-95c3-b2b2dde7e34c/1979358/badge.svg)](https://semaphoreci.com/itprotv/itprotv-marketing)

Production Build:
[![Build Status](https://semaphoreci.com/api/v1/projects/7e78b3e1-7aa2-4ac7-95c3-b2b2dde7e34c/2026121/badge.svg)](https://semaphoreci.com/itprotv/itprotv-marketing)[![Build Status]()]

Production Deploy:
[![Build Status](https://semaphoreci.com/api/v1/projects/7e78b3e1-7aa2-4ac7-95c3-b2b2dde7e34c/2026121/badge.svg)](https://semaphoreci.com/itprotv/itprotv-marketing)
