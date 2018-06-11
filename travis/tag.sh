#!/usr/bin/env bash
set -eu
set -x

SERVICE_NAME=$1

# After a successful build to master, we create a tag
PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
GIT_TAG=v$PACKAGE_VERSION
git config --global user.email "builds@travis-ci.com"
git config --global user.name $USERNAME
git config --global user.password $GH_TOKEN
git tag $GIT_TAG -a -m "Generated tag from TravisCI build $TRAVIS_BUILD_NUMBER"
git push origin $GIT_TAG
# git push --quiet origin $GIT_TAG > /dev/null 2>&1
