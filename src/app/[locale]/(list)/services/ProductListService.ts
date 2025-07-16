import { injectFromBase } from "inversify"
import { ApiResponse } from "@/shared/services/product-api-adapter/domain/ApiResponse"
import { ProductService } from "@/shared/services/product-api-adapter/services/ProductService"
import { ProductListEntity } from "@app/list/domain/ProductListEntity"
import { QueryProductsParams } from "@app/list/domain/QueryProductsParams"

export interface IProductListService {
	query(options: {
		params?: QueryProductsParams
		signal?: AbortSignal
	}): ApiResponse<ProductListEntity[]>
}

@injectFromBase()
export class ProductListService
	extends ProductService
	implements IProductListService
{
	query(options: { params?: QueryProductsParams; signal?: AbortSignal }) {
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
