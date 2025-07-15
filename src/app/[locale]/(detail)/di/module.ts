import { ContainerModule } from "inversify"
import { DI_SYMBOLS } from "@app/detail/di/types"
import { ProductDetailService } from "@app/detail/services/ProductDetailService"

export const diModule: ContainerModule = new ContainerModule((options) => {
	options
		.bind(DI_SYMBOLS.ProductDetailService)
		.to(ProductDetailService)
		.inTransientScope()
})
