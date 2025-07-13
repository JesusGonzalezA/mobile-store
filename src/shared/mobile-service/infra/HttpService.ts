import { ApiResponse } from "@/shared/MobileService/domain/ApiResponse"
import { ErrorEntity } from "@/shared/MobileService/domain/Error"

export interface IHttpService {
	run<T>(url: string, request?: RequestInit): ApiResponse<T>
}

export class HttpService implements IHttpService {
	async run<T>(url: string, request?: RequestInit) {
		try {
			const res = await fetch(url, {
				...request,
				headers: {
					...request?.headers
				},
			})

			return {
				ok: true,
				value: res.json() as Promise<T>,
			}
		} catch (error) {
			console.error(error)

			return {
				ok: false,
				error: error as ErrorEntity,
			}
		}
	}
}
