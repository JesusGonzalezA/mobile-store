import { ContainerModule } from "inversify"
import { Subject } from "rxjs"
import { EventBus } from "@shared/services/event-bus/services/EventBus"
import { DI_SYMBOLS } from "@shared/services/event-bus/di/types"

export const diModule: ContainerModule = new ContainerModule((options) => {
	options.bind(DI_SYMBOLS.Subject).to(Subject).inTransientScope()

	options.bind(DI_SYMBOLS.EventBus).to(EventBus).inSingletonScope()
})
