import { inject } from "inversify"
import type { IHttpClient } from "@/shared/mobile-service/infra/HttpClient"
import { DI_SYMBOLS } from "@/shared/di/types"

export abstract class MobileService {
	protected httpClient: IHttpClient

	constructor(@inject(DI_SYMBOLS.HttpClient) httpClient: IHttpClient) {
		this.httpClient = httpClient

		// Only validate environment variables in the browser
		// During SSG/SSR, these might not be available yet
		if (typeof window !== "undefined") {
			if (!process.env.NEXT_PUBLIC_API_URL || !process.env.NEXT_PUBLIC_API_KEY) {
				throw new Error(
					"API URL and API Key must be defined in environment variables.",
				)
			}
		}

		this.httpClient.defaultHeaders = {
			"X-Api-Key": process.env.NEXT_PUBLIC_API_KEY || "",
		}
		this.httpClient.baseUrl = process.env.NEXT_PUBLIC_API_URL || ""
	}
}
