import { WebPlugin } from '@capacitor/core';

import type { ManagedStoragePlugin } from './definitions';

export class ManagedStorageWeb
  extends WebPlugin
  implements ManagedStoragePlugin {
  async getManaged(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
