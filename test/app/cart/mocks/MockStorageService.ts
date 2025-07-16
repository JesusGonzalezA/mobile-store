import { IStorageService } from "@/shared/services/storage/domain/IStorageService"

export class MockStorageService<T> implements IStorageService<T> {
	private storage: Map<string, T> = new Map<string, T>()

	set(key: string, value: T) {
		this.storage.set(key, value)
		return Promise.resolve()
	}

	get(key: string) {
		const item = this.storage.get(key)
		return Promise.resolve(item !== undefined ? item : null)
	}

	remove(key: string) {
		this.storage.delete(key)
		return Promise.resolve()
	}
}
