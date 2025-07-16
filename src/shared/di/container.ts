import { Container } from "inversify"
import { diModule as productServiceModule } from "@/shared/services/product-api-adapter/di/module"
import { diModule as eventBusModule } from "@/shared/services/event-bus/di/module"
import { diModule as storageModule } from "@/shared/services/storage/di/module"
import { diModule as listModule } from "@app/list/di/module"
import { diModule as detailModule } from "@app/detail/di/module"

const container = new Container()

container.loadSync(
	storageModule,
	productServiceModule,
	eventBusModule,
	listModule,
	detailModule,
)

export default container
