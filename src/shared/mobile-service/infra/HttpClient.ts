import { inject } from "inversify"
import { ApiResponse } from "@/shared/mobile-service/domain/ApiResponse"
import type { IHttpService } from "@/shared/mobile-service/infra/HttpService"
import { DI_SYMBOLS } from "@/shared/di/types"

export interface IHttpClient {
	baseUrl: string
	defaultHeaders: HeadersInit

	get<T>(url: string, request?: RequestInit): ApiResponse<T>
	delete<T>(url: string, request?: RequestInit): ApiResponse<T>
	post<T>(url: string, request?: RequestInit): ApiResponse<T>
	put<T>(url: string, request?: RequestInit): ApiResponse<T>
	run<T>(url: string, request?: RequestInit): ApiResponse<T>
}

export class HttpClient implements IHttpClient {
	private _httpService: IHttpService
	public defaultHeaders: HeadersInit = {}
	public baseUrl: string = ""

	constructor(@inject(DI_SYMBOLS.HttpService) httpService: IHttpService) {
		this._httpService = httpService
	}

	get<T>(url: string, request?: RequestInit) {
		return this.run<T>(url, { method: "GET", ...request })
	}

	delete<T>(url: string, request?: RequestInit) {
		return this.run<T>(url, { method: "DELETE", ...request })
	}

	put<T>(url: string, request?: RequestInit) {
		return this.run<T>(url, { method: "PUT", ...request })
	}

	post<T>(url: string, request?: RequestInit) {
		return this.run<T>(url, { method: "POST", ...request })
	}

	run<T>(url: string, request?: RequestInit | undefined) {
		return this._httpService.run<T>(`${this.baseUrl}/${url}`, {
			...request,
			headers: {
				...this.defaultHeaders,
				...request?.headers,
			},
		})
	}
}
