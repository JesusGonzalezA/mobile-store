import { ErrorEntity } from "@/shared/product-service/domain/Error"

export interface ErrorOr<T> {
	value?: T
	error?: ErrorEntity
	ok: boolean
}
