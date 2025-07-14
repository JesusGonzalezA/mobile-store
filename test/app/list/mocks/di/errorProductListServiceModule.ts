import { ContainerModule } from "@inversifyjs/container"
import { DI_SYMBOLS } from "@app/list/di/types"
import { MockErrorProductListService } from "../MockProductListService"

export const errorProductListServiceModule = new ContainerModule((options) => {
    options
        .bind(DI_SYMBOLS.ProductListService)
        .to(MockErrorProductListService)
        .inTransientScope()
})