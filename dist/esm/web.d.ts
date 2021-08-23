import { WebPlugin } from '@capacitor/core';
import type { ManagedStoragePlugin } from './definitions';
export declare class ManagedStorageWeb extends WebPlugin implements ManagedStoragePlugin {
    getManaged(options: {
        key: string;
    }): Promise<{
        key: string;
    }>;
}
