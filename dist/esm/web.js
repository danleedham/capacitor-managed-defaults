import { WebPlugin } from '@capacitor/core';
export class ManagedStorageWeb extends WebPlugin {
    async getManaged(options) {
        const value = this.impl.getItem(options.key);
        return { value };
    }
    get impl() {
        return window.localStorage;
    }
}
//# sourceMappingURL=web.js.map