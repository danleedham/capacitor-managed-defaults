export interface ManagedStoragePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
