import { ContainerModule } from "inversify"
import { DI_SYMBOLS } from "@/app/[locale]/(list)/di/types"
import { ProductListService } from "@/app/[locale]/(list)/services/ProductListService"

export const diModule: ContainerModule = new ContainerModule((options) => {
	options
		.bind(DI_SYMBOLS.ProductListService)
		.to(ProductListService)
		.inTransientScope()
})
