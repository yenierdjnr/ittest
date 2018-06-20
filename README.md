# gatsby
https://github.com/gatsbyjs/gatsby

## Clone repo

`git clone git@github.com:EdutainmentLIVE/itprotv-marketing.git`

`cd` into the project folder

## Run in docker

Run `docker-compose up`, this will build the docker container for gatsby and install the needed node modules. Go grab some coffee or snacks while it builds.

## Updating data files

The site was populated with production data on 6/20/2018 (this date should be updated when the site is updated to keep track of when the script should run). If the data needed for the site changes, the site needs to be re-populated. In order to properly re-populate the site, follow the following steps:
1. `cd` to the repo root directory.
2. Run `./dataPopulate.sh` from the command line.

That's it! The site will now populate.

## Deploying to production

Your production branch is for the world to see - you will basically never push to this branch, and should only perform the steps below if the master branch builds and deploys to staging. The master branch deploys to staging on its own, however you are responsible for deploying production.

Using the command line:
1. `cd` to the repo root directory.
2. Run `git checkout master`, `git pull`, `git log origin/production..origin/master`.
3. Make note of member-facing and internal-facing changes from the output of `git log` in the step above.
4. To actually deploy, run `git push origin master:production`.

Production is now live! The status of your deploys can be seen below:

- Staging build: [![][staging build badge]][staging build status]
- Staging deploy: [![][staging deploy badge]][staging deploy status]
- Production build: [![][production build badge]][production build status]
- Production deploy: [![][production deploy badge]][production deploy status]

[staging build badge]: http://80e92e2d-b474-c555-b2d9-82c08b5f9470.inst.47570dce-1174-4753-99c4-d96c5182d7b1.us-east-1.triton.zone/projects/7e78b3e1-7aa2-4ac7-95c3-b2b2dde7e34c/branches/master
[staging build status]: https://semaphoreci.com/itprotv/itprotv-marketing/branches/master
[staging deploy badge]: http://80e92e2d-b474-c555-b2d9-82c08b5f9470.inst.47570dce-1174-4753-99c4-d96c5182d7b1.us-east-1.triton.zone/projects/7e78b3e1-7aa2-4ac7-95c3-b2b2dde7e34c/servers/staging
[staging deploy status]: https://semaphoreci.com/itprotv/itprotv-marketing/servers/staging
[production build badge]: http://80e92e2d-b474-c555-b2d9-82c08b5f9470.inst.47570dce-1174-4753-99c4-d96c5182d7b1.us-east-1.triton.zone/projects/7e78b3e1-7aa2-4ac7-95c3-b2b2dde7e34c/branches/production
[production build status]: https://semaphoreci.com/itprotv/itprotv-marketing/branches/production
[production deploy badge]: http://80e92e2d-b474-c555-b2d9-82c08b5f9470.inst.47570dce-1174-4753-99c4-d96c5182d7b1.us-east-1.triton.zone/projects/7e78b3e1-7aa2-4ac7-95c3-b2b2dde7e34c/servers/production
[production deploy status]: https://semaphoreci.com/itprotv/itprotv-marketing/servers/production
