import { WebPlugin } from '@capacitor/core';
export class ManagedStorageWeb extends WebPlugin {
    async getManaged(options) {
        console.log('No Web Implementation, Sorry', options);
        return { value: options.key };
    }
}
//# sourceMappingURL=web.js.map