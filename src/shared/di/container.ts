import { Container } from "inversify"
import { DI_SYMBOLS } from "@shared/di/types"
import { HttpService } from "@/shared/mobile-service/infra/HttpService"
import { HttpClient } from "@/shared/mobile-service/infra/HttpClient"
import { diModule as listModule } from "@/app/[locale]/(list)/di/module"

const container = new Container()

container.bind(DI_SYMBOLS.HttpService).to(HttpService).inTransientScope()
container.bind(DI_SYMBOLS.HttpClient).to(HttpClient).inTransientScope()

container.load(listModule)

export default container
