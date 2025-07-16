import { ContainerModule } from "inversify"
import { StorageService } from "../services/StorageService"
import { DI_SYMBOLS } from "./types"

export const diModule: ContainerModule = new ContainerModule((options) => {
	options
		.bind(DI_SYMBOLS.Storage)
		.toDynamicValue(() => {
			return typeof window !== "undefined" && window.localStorage !== undefined
				? window.localStorage
				: null
		})
		.when(() => {
			return typeof window !== "undefined" && window.localStorage !== undefined
		})
	options
		.bind(DI_SYMBOLS.Storage)
		.toConstantValue(null)
		.when(() => {
			return typeof window === "undefined" || window.localStorage === undefined
		})
	options.bind(DI_SYMBOLS.StorageService).to(StorageService).inTransientScope()
})
