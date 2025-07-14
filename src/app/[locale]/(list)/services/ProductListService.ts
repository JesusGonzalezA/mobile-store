import { injectFromBase } from "inversify"
import { ApiResponse } from "@/shared/mobile-service/domain/ApiResponse"
import { MobileService } from "@/shared/mobile-service/services/MobileService"
import { ProductListEntity } from "@app/list/domain/ProductListEntity"
import { ProductListParams } from "@app/list/domain/ProductListParams"

export interface IProductListService {
	query(options: {
		params?: ProductListParams
		signal?: AbortSignal
	}): ApiResponse<ProductListEntity[]>
}

@injectFromBase()
export class ProductListService
	extends MobileService
	implements IProductListService
{
	query(options: {
		params?: ProductListParams
		signal?: AbortSignal
	}): ApiResponse<ProductListEntity[]> {
		const searchParams = new URLSearchParams()
		Object.entries(options.params ?? {}).forEach(([key, value]) => {
			if (value !== undefined && value !== "") {
				searchParams.set(key, String(value))
			}
		})

		return this.httpClient.get<ProductListEntity[]>(
			`products?${searchParams.toString()}`,
			{ signal: options.signal },
		)
	}
}
