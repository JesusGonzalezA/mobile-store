import { injectFromBase } from "inversify"
import { ApiResponse } from "@/shared/product-service/domain/ApiResponse"
import { ProductService } from "@/shared/product-service/services/ProductService"
import { ProductEntity } from "@app/detail//domain/ProductEntity"
import { GetProductParams } from "@app/detail/domain/GetProductParams"

export interface IProductDetailService {
	get(params: GetProductParams): ApiResponse<ProductEntity>
}

@injectFromBase()
export class ProductDetailService
	extends ProductService
	implements IProductDetailService
{
	get({ id }: GetProductParams) {
		const url = `products/${id}`
		return this.httpClient.get<ProductEntity>(url)
	}
}
