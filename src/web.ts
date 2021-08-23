import { WebPlugin } from '@capacitor/core';

import type { ManagedStoragePlugin } from './definitions';

export class ManagedStorageWeb
  extends WebPlugin
  implements ManagedStoragePlugin {
  async getManaged(options: { key: string }): Promise<{ value: string }> {
    console.log('No Web Implementation, Sorry', options);
    return { value: options.key };
  }
}
