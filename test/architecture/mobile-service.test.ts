import { slicesOfProject } from "tsarch"
import * as path from "path"
import { describe, it, expect } from "vitest"

describe("architecture", () => {
	describe("mobile service", () => {
		it("should adhere to diagram", { timeout: 6000 }, async () => {
			const diagramLocation = path.resolve(
				"src",
				"shared",
				"mobile-service",
				"architecture.puml",
			)

			const violations = await slicesOfProject()
				.definedBy("src/shared/mobile-service/(**)/")
				.should()
				.ignoringExternalDependencies()
				.adhereToDiagramInFile(diagramLocation)
				.check()

			expect(violations).toEqual([])
		})
	})
})
