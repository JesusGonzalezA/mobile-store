import { inject } from "inversify"
import { HttpClient } from "../infra/HttpClient"
import { DI_SYMBOLS } from "@/shared/di/types"

export abstract class MobileService {
	protected httpClient: HttpClient

	constructor(@inject(DI_SYMBOLS.HttpClient) httpClient: HttpClient) {
		this.httpClient = httpClient
		this.httpClient.defaultHeaders = {
			"X-Api-Key": process.env.NEXT_PUBLIC_API_KEY || "",
		}
	}
}
