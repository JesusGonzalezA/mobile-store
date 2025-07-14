import container from "@/shared/di/container"
import { loadEnvConfig } from "@next/env"
import { cleanup } from "@testing-library/react"
import { afterAll, afterEach, beforeAll, beforeEach } from "vitest"
import { server } from "./test/mocks/server"

// Env
const projectDir = process.cwd()
loadEnvConfig(projectDir)

// DI
beforeEach(() => container.snapshot())
afterEach(() => container.restore())

// Render cleanup
afterEach(() => cleanup())

// Server mock
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
