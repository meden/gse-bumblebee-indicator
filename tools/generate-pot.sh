#!/bin/sh

EXT_PATH='../bumblebee-indicator@gnome-shell-extensions.meden.github.com'

xgettext --package-name='bumblebee-indicator' --package-version='' \
         -C -k_ -kN_ -o bumblebee-indicator.pot ${EXT_PATH}/*.js

# The xgettext '--from-code' option does not work as expected
sed -i 's/CHARSET/UTF-8/' bumblebee-indicator.pot
