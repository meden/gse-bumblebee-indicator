/*
 * This file is part of Bumblebee Indicator Gnome Shell Extension.
 *
 * Bumblebee Indicator Gnome Shell Extension is free software; you can
 * redistribute it and/or modify it under the terms of the GNU General
 * Public License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 *
 * Author: Alessio Gaeta <alga777@gmail.com>
 *
 */


const Gio = imports.gi.Gio;
const St = imports.gi.St;

const MessageTray = imports.ui.messageTray;

function Config() {
    this._init();
}

Config.prototype = {
    // FIXME: move in extension configuration
    configFilePath: '/etc/bumblebee/bumblebee.conf',

    virtualDisplay: ':8',

    _init: function() {

        let configFile = new Gio.File.new_for_path(this.configFilePath);

        let contents = configFile.load_contents(null);
        if (contents[0]) {
            this._parseConfigFile(contents[1]);
        }
    },

    _parseConfigFile: function(contents) {
        let pattern = /^VirtualDisplay=.*$/m
        let match = new String(pattern.exec(new String(contents)));
        this.virtualDisplay = match.substr(16);
    }

}


function BumblebeeNotificationSource(icon) {
    MessageTray.Source.prototype._init('Bumblebee Indicator', icon);

    this.isTransient      = true;
    this.showInLockScreen = false;
}

BumblebeeNotificationSource.prototype = {
    __proto__: MessageTray.Source.prototype,

    createIcon: function(size) {
        return new St.Icon({ gicon: this.iconName,
                             icon_size: size });
    },

    open: function() {
        this.destroy();
    }

}
