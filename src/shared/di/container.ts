import { Container } from "inversify"
import { DI_SYMBOLS } from "@shared/di/types"
import { HttpService } from "@/shared/product-service/infra/HttpService"
import { HttpClient } from "@/shared/product-service/infra/HttpClient"
import { diModule as listModule } from "@app/list/di/module"
import { diModule as detailModule } from "@app/detail/di/module"

const container = new Container()

container.bind(DI_SYMBOLS.HttpService).to(HttpService).inTransientScope()
container.bind(DI_SYMBOLS.HttpClient).to(HttpClient).inTransientScope()

container.load(listModule)
container.load(detailModule)

export default container
