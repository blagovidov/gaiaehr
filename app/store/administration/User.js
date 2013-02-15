/*
 GaiaEHR (Electronic Health Records)
 Services.js
 Store
 Copyright (C) 2012 Ernesto J. Rodriguez (Certun)

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('App.store.administration.User', {
    model: 'App.model.administration.User',
    extend: 'Ext.data.Store',
    proxy: {
        type: 'direct',
        api: {
            read: User.getUsers,
            create: User.addUser,
            update: User.updateUser
        },
        reader: {
            totalProperty: 'totals',
            root: 'rows'
        }
    },
    autoSync: true,
    remoteSort: true,
    autoLoad: false
}); 