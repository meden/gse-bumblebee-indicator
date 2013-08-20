# Bumblebee Indicator Gnome Shell Extension

A Gnome Shell extension that indicates your Nvidia card status while using
Bumblebee, just like `bumblebee-indicator`.

Icons used are taken from the [Bumblebee Project](https://github.com/Bumblebee-Project/bumblebee-ui)



### Localization

If you want to localize this extension, just follow these steps:

1. Create an empty language directory in `$extpath/bumblebee-indicator@gnome-shell-extensions.meden.github.com/locale`:

    `~/ext-path$ mkdir /bumblebee-indicator@gnome-shell-extensions.meden.github.com/locale/fr_FR`

2. `cd` into `$extpath/tools` and run `update-localization.sh`

    `~/ext-path$ cd tools; ./update-localization.sh`

3. Edit the newly created `$extpath/bumblebee-indicator@gnome-shell-extensions.meden.github.com/locale/$lang/LC_MESSAGES/bumblebee-indicator.po`

4. Rerun `update-localization.sh` (to regenerate `.mo` files)

    `~/ext-path/tools$ ./update-localization.sh`

To update existing translations just run `update-localization.sh`.
