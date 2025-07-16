import container from "@/shared/di/container"
import { IEventBus } from "@shared/services/event-bus/domain/IEventBus"
import { Subscription } from "@shared/services/event-bus/domain/Subscription"
import { DI_SYMBOLS } from "@shared/services/event-bus/di/types"

export class EventBus implements IEventBus {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private observables: Map<string, Subscription<any>> = new Map()

	subscribe<T>(event: string, callback: (data: T) => void) {
		const observable =
			(this.observables.get(event) as unknown as Subscription<T>) ??
			container.get<Subscription<T>>(DI_SYMBOLS.Subject)

		this.observables.set(event, observable)

		return observable.subscribe({ next: callback })
	}

	publish<T>(event: string, data: T): void {
		const observable =
			(this.observables.get(event) as unknown as Subscription<T>) ??
			container.get<Subscription<T>>(DI_SYMBOLS.Subject)

		this.observables.set(event, observable)

		observable.next!(data)
	}
}
