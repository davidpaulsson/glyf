#!/bin/bash

build() {
  echo 'building!'

  rm -rf build/*

  export INLINE_RUNTIME_CHUNK=false
  export GENERATE_SOURCEMAP=false
  # export PUBLIC_URL=/glyf/

  react-scripts build

  cp manifest.json build/
}

build