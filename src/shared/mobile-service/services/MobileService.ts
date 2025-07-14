import { inject } from "inversify"
import type { IHttpClient } from "@/shared/mobile-service/infra/HttpClient"
import { DI_SYMBOLS } from "@/shared/di/types"

export abstract class MobileService {
	protected httpClient: IHttpClient

	constructor(@inject(DI_SYMBOLS.HttpClient) httpClient: IHttpClient) {
		this.httpClient = httpClient

		const apiUrl = process.env.NEXT_PUBLIC_API_URL
		const apiKey = process.env.NEXT_PUBLIC_API_KEY

		// For static exports, environment variables should be embedded at build time
		// If they're missing, provide helpful error message
		if (!apiUrl || !apiKey) {
			const missingVars = []
			if (!apiUrl) missingVars.push("NEXT_PUBLIC_API_URL")
			if (!apiKey) missingVars.push("NEXT_PUBLIC_API_KEY")
			
			throw new Error(
				`Missing required environment variables: ${missingVars.join(", ")}. ` +
				"For GitHub Pages deployment, ensure these are set as Repository Variables " +
				"in your GitHub repository settings (Settings > Secrets and variables > Actions > Variables)."
			)
		}

		this.httpClient.defaultHeaders = {
			"X-Api-Key": apiKey,
		}
		this.httpClient.baseUrl = apiUrl
	}
}
