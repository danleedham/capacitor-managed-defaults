import { WebPlugin } from '@capacitor/core';
import type { ManagedStoragePlugin } from './definitions';
export declare class ManagedStorageWeb extends WebPlugin implements ManagedStoragePlugin {
    getManaged(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
