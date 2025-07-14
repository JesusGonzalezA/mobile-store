import { inject } from "inversify"
import type { IHttpClient } from "@/shared/mobile-service/infra/HttpClient"
import { DI_SYMBOLS } from "@/shared/di/types"

export abstract class MobileService {
	protected httpClient: IHttpClient

	constructor(@inject(DI_SYMBOLS.HttpClient) httpClient: IHttpClient) {
		this.httpClient = httpClient
		this.initializeHttpClient()
	}

	private initializeHttpClient() {
		// Only check environment variables at runtime, not during build
		if (typeof window !== 'undefined' || process.env.NODE_ENV !== 'production') {
			if (!process.env.NEXT_PUBLIC_API_URL || !process.env.NEXT_PUBLIC_API_KEY) {
				throw new Error(
					"API URL and API Key must be defined in environment variables.",
				)
			}
		}
		
		this.httpClient.defaultHeaders = {
			"X-Api-Key": process.env.NEXT_PUBLIC_API_KEY || '',
		}
		this.httpClient.baseUrl = process.env.NEXT_PUBLIC_API_URL || ''
	}
}
