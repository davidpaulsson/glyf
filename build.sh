#!/bin/bash

build() {
  echo 'building!'

  rm -rf build/*

  export INLINE_RUNTIME_CHUNK=false
  export GENERATE_SOURCEMAP=false

  react-scripts build

  cp manifest.json build/
}

build