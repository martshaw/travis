# Fail if there's already a tag in Git for the version number in package.json
PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
GIT_TAG=v$PACKAGE_VERSION
GIT_TAG_REMOTE=$(git ls-remote --tags origin $GIT_TAG)
if [[ -z $GIT_TAG_REMOTE ]]; then exit 0; else travis_terminate 1; fi
