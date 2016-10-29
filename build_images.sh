#!/bin/bash
CURR_DIR=$(pwd)

echo "Building image..."
docker build -t debug-sample-js-vsc:1.0 $CURR_DIR/docker/build/node/.
echo "Finished"
