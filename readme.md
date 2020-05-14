# Load testing scripts for Tracker API

This repo contains scenarios written using Artillery JS to be executed against a live demo/staging instance of Tracker
to measure performance.

## Execution

```
ARTILLERY_TRACKER_TARGET='http://localhost:3000' yarn start
```


## Installation

Requires Node.js and Yarn

```
yarn install
```

Alternatively Docker can be used

```
docker build -t <image_tag> .
docker run -e "ARTILLERY_TRACKER_TARGET=http://host.docker.internal:3000" -it <image_tag> yarn start
```

## Current load settings:


## Scenarios

- A user arrives and track an activity
- A user periodically fetches the project's list simulating the desktop app
- A user fetches analytics data for last month

## Credentials for Users

This script relies on preseeded test users in `users.csv`.

