#!/bin/sh

# Download websocketd for your platform from
# https://github.com/joewalnes/websocketd/wiki/Download-and-install

./websocketd --address=localhost --port=4080 /usr/bin/vmstat -n 5

