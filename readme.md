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

## Current load settings:


## Credentials for Users

This script relies on obfuscated dumps and contains a number of sample email and password combinations in `users.csv`.

