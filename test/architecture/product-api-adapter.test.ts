import { slicesOfProject } from "tsarch"
import * as path from "path"
import { describe, it, expect } from "vitest"

describe("architecture", () => {
	describe("product api adapter", () => {
		it("should adhere to diagram", { timeout: 6000 }, async () => {
			const diagramLocation = path.resolve(
				"src",
				"shared",
				"services",
				"product-api-adapter",
				"architecture.puml",
			)

			const violations = await slicesOfProject()
				.definedBy("src/shared/services/product-api-adapter/(**)/")
				.should()
				.ignoringExternalDependencies()
				.adhereToDiagramInFile(diagramLocation)
				.check()

			expect(violations).toEqual([])
		})
	})
})
