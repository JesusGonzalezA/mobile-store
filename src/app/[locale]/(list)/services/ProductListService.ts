import { injectFromBase } from "inversify"
import { ApiResponse } from "@/shared/mobile-service/domain/ApiResponse"
import { MobileService } from "@/shared/mobile-service/services/MobileService"
import { ProductListEntity } from "@/app/[locale]/(list)/domain/ProductListEntity"

@injectFromBase()
export class ProductListService extends MobileService {
	query(): ApiResponse<ProductListEntity> {
		return this.httpClient.get<ProductListEntity>(
			"https://pokeapi.co/api/v2/pokemon/ditto",
		)
	}
}
