import { ErrorEntity } from "@/shared/MobileService/domain/Error"

export interface ErrorOr<T> {
	value?: T
	error?: ErrorEntity
	ok: boolean
}
