import { ContainerModule } from "@inversifyjs/container"
import { DI_SYMBOLS } from "@/shared/services/storage/di/types"
import { MockStorageService } from "./MockStorageService"

export const mapStorageServiceModule = new ContainerModule((options) => {
	options
		.bind(DI_SYMBOLS.StorageService)
		.to(MockStorageService)
		.inSingletonScope()
})
