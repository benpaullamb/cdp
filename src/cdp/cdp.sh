#!/usr/bin/env bash

path=$(node.exe "${BASH_SOURCE:0:${#BASH_SOURCE} - 2}js" $1)

if [[ ${path:0:9} == "NOT_FOUND" ]]; then
  echo "Error: no such package"
elif [[ ${path:0:7} == "NO_ROOT" ]]; then
  echo "Error: not in the front-end monorepo"
else
  cd $path
fi
