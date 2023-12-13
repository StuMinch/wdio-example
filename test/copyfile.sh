#!/bin/bash

# Set the source file name
src_file="testingTheInternet.js"

# Loop and copy the file, appending a unique number to the file name
for i in {1..99}; do
  cp "$src_file" "${i}.${src_file}"
done
