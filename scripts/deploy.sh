#!/bin/bash

set -e

function=${1:-dabunNetFetch}

yarn build
yarn functions deploy $function -H -S=./build