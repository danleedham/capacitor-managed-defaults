export interface ManagedStoragePlugin {
    /**
     * Get the value of a Managed User Default for a given key.
     *
     * @since 0.0.1
     */
    getManaged(options: {
        key: string;
    }): Promise<{
        value: string;
    }>;
}
