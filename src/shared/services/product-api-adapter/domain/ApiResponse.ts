import { ErrorOr } from "./ErrorOr"

export type ApiResponse<T> = Promise<ErrorOr<Promise<T>>>
