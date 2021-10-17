import { WebPlugin } from '@capacitor/core';

import type { ManagedStoragePlugin } from './definitions';

export class ManagedStorageWeb
  extends WebPlugin
  implements ManagedStoragePlugin {
  public async getManaged(options: {
    key: string;
  }): Promise<{ value: string | null }> {
    const value = this.impl.getItem(options.key);
    return { value };
  }
  private get impl(): Storage {
    return window.localStorage;
  }
}
