#!/bin/bash

# Set the source file name
src_file="guestCheckout.test"

# Loop and copy the file, appending a unique number to the file name
for i in {1..5}; do
  cp "$src_file" "${src_file}.${i}.js"
done
