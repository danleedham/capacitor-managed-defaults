import { registerPlugin } from '@capacitor/core';

import type { ManagedStoragePlugin } from './definitions';

const ManagedStorage = registerPlugin<ManagedStoragePlugin>('ManagedStorage', {
  web: () => import('./web').then(m => new m.ManagedStorageWeb()),
});

export * from './definitions';
export { ManagedStorage };
