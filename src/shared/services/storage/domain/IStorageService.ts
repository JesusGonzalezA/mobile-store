export interface IStorageService<T> {
	set: (key: string, value: T) => Promise<void>
	get: (key: string) => Promise<T | null>
	remove: (key: string) => Promise<void>
}
