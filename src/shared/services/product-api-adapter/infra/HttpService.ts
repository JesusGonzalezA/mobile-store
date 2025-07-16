import { ApiResponse } from "@/shared/services/product-api-adapter/domain/ApiResponse"
import { ErrorEntity } from "@/shared/services/product-api-adapter/domain/Error"

export interface IHttpService {
	run<T>(url: string, request?: RequestInit): ApiResponse<T>
}

export class HttpService implements IHttpService {
	async run<T>(url: string, request?: RequestInit) {
		try {
			const res = await fetch(url, {
				...request,
				headers: {
					...request?.headers,
				},
			})

			if (!res.ok) {
				return {
					ok: false,
					error: (await res.json()) as ErrorEntity,
				}
			}

			return {
				ok: true,
				value: res.json() as Promise<T>,
			}
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				return {
					ok: true,
					value: undefined,
				}
			}

			return {
				ok: false,
				error: error as ErrorEntity,
			}
		}
	}
}
