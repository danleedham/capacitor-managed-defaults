import { WebPlugin } from '@capacitor/core';
export class ManagedStorageWeb extends WebPlugin {
    async getManaged(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map