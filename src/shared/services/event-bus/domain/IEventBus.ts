import { Unsubscribable } from "@shared/services/event-bus/domain/Subscription"

export interface IEventBus {
	subscribe<T>(event: string, callback: (data: T) => void): Unsubscribable
	publish<T>(event: string, data: T): void
}
