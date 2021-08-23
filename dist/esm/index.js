import { registerPlugin } from '@capacitor/core';
const ManagedStorage = registerPlugin('ManagedStorage', {
    web: () => import('./web').then(m => new m.ManagedStorageWeb()),
});
export * from './definitions';
export { ManagedStorage };
//# sourceMappingURL=index.js.map