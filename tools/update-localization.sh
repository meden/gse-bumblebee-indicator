#!/bin/sh

EXT_PATH='../bumblebee-indicator@gnome-shell-extensions.meden.github.com'
LOCALE_PATH="${EXT_PATH}/locale"

for language in `ls ${LOCALE_PATH}` ; do
	if [ -f ${LOCALE_PATH}/${language}/LC_MESSAGES/bumblebee-indicator.po ]; then
		echo -n "* Updating ${language}"
		msgmerge -U ${LOCALE_PATH}/${language}/LC_MESSAGES/bumblebee-indicator.po bumblebee-indicator.pot
	else
		mkdir ${LOCALE_PATH}/${language}/LC_MESSAGES
		msginit --locale=${language} \
		        --output=${LOCALE_PATH}/${language}/LC_MESSAGES/bumblebee-indicator.po
		echo -n "* Creating ${language}"
	fi

	msgfmt ${LOCALE_PATH}/${language}/LC_MESSAGES/bumblebee-indicator.po \
	       -o ${LOCALE_PATH}/${language}/LC_MESSAGES/bumblebee-indicator.mo
done
