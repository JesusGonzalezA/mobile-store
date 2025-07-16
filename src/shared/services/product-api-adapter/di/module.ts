import { ContainerModule } from "inversify"
import { DI_SYMBOLS } from "./types"
import { HttpService } from "../infra/HttpService"
import { HttpClient } from "../infra/HttpClient"

export const diModule: ContainerModule = new ContainerModule((options) => {
	options.bind(DI_SYMBOLS.HttpService).to(HttpService).inTransientScope()
	options.bind(DI_SYMBOLS.HttpClient).to(HttpClient).inTransientScope()
})
