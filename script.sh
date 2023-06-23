#!/bin/bash

# Get the current date using the date command
current_date=$(date +"%Y-%m-%d_%H-%M")

# Define the file name with the current date
file_name="output_${current_date}.txt"

cd /Users/stuart/Developer/WebdriverIO/wdio-example && npx wdio ./wdio.conf.js > "$file_name"
