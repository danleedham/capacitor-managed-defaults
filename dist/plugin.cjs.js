'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const ManagedStorage = core.registerPlugin('ManagedStorage', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.ManagedStorageWeb()),
});

class ManagedStorageWeb extends core.WebPlugin {
    async getManaged(options) {
        const value = this.impl.getItem(options.key);
        return { value };
    }
    get impl() {
        return window.localStorage;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ManagedStorageWeb: ManagedStorageWeb
});

exports.ManagedStorage = ManagedStorage;
//# sourceMappingURL=plugin.cjs.js.map
