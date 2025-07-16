import { inject } from "inversify"
import { IStorageService } from "../domain/IStorageService"
import { DI_SYMBOLS } from "../di/types"

export class StorageService<T> implements IStorageService<T> {
	private storage: Storage

	constructor(@inject(DI_SYMBOLS.Storage) storage: Storage) {
		this.storage = storage
	}

	async set(key: string, value: T): Promise<void> {
		this.storage.setItem(key, JSON.stringify(value))
		return Promise.resolve()
	}

	async get(key: string): Promise<T | null> {
		const item = this.storage.getItem(key)
		return Promise.resolve(item ? JSON.parse(item) : null)
	}

	async remove(key: string): Promise<void> {
		this.storage.removeItem(key)
		return Promise.resolve()
	}
}
