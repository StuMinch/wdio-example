#!/bin/bash

# Set the source file name
src_file="customer.test"

# Loop 100 times and copy the file, appending a unique number to the file name
for i in {1..300}; do
  cp "$src_file" "${src_file}.${i}.js"
done
