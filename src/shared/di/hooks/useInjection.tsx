import container from "@shared/di/container"

export function useInjection<T>(type: symbol) {
	return container.get<T>(type) as T
}
