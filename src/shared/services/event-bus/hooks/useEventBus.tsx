import container from "@/shared/di/container"
import { IEventBus } from "@/shared/services/event-bus/domain/IEventBus"
import { DI_SYMBOLS } from "@/shared/services/event-bus/di/types"

export const useEventBus = () => {
	return container.get<IEventBus>(DI_SYMBOLS.EventBus)
}
