#!/bin/bash
# Run this script over websocket by running the following command in the console:
# ./websocketd --address=localhost --port=4080 ./sample-output-count.sh

# Count from 1 to 10, pausing for a second between each iteration.
for COUNT in $(seq 1 10); do
  echo $COUNT
  sleep 1
done