import { ErrorEntity } from "@/shared/services/product-api-adapter/domain/Error"

export interface ErrorOr<T> {
	value?: T
	error?: ErrorEntity
	ok: boolean
}
