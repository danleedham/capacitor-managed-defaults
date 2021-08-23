import { WebPlugin } from '@capacitor/core';

import type { ManagedStoragePlugin } from './definitions';

export class ManagedStorageWeb
  extends WebPlugin
  implements ManagedStoragePlugin {
  async getManaged(options: { key : string }): Promise<{ key : string }> {
    console.log('ECHO', options);
    return options;
  }
}
