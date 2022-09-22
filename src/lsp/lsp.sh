#!/usr/bin/env bash

packages=$(node.exe "${BASH_SOURCE:0:${#BASH_SOURCE} - 2}js")

echo $packages