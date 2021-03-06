import { WebPlugin } from '@capacitor/core';
import type { ManagedStoragePlugin } from './definitions';
export declare class ManagedStorageWeb extends WebPlugin implements ManagedStoragePlugin {
    getManaged(options: {
        key: string;
    }): Promise<{
        value: string | null;
    }>;
    private get impl();
}
