import { Container } from "inversify"
import { diModule as productServiceModule } from "@/shared/services/product-api-adapter/di/module"
import { diModule as eventBusModule } from "@/shared/services/event-bus/di/module"
import { diModule as listModule } from "@app/list/di/module"
import { diModule as detailModule } from "@app/detail/di/module"

const container = new Container()

container.load(productServiceModule)
container.load(eventBusModule)
container.load(listModule)
container.load(detailModule)

export default container
