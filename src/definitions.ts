export interface ManagedStoragePlugin {
  /**
   * Set the value in Managed User Defaults for a given key.
   *
   * @since 0.0.1
   */
  getManaged(options: { value: string }): Promise<{ value: string }>;
}
