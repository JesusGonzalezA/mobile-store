import { ErrorEntity } from "@/shared/mobile-service/domain/Error"

export interface ErrorOr<T> {
	value?: T
	error?: ErrorEntity
	ok: boolean
}
