import { describe, it, expect } from "vitest"
import path from "path"
import { slicesOfProject } from "tsarch"
import { features } from "../features"

describe("architecture", () => {
	describe("list feature", () => {
		it.for(features)(
			"%s should adhere to diagram",
			{ timeout: 10000 },
			async (featureDir: string) => {
				const diagramLocation = path.resolve(
					"src",
					"app",
					"[locale]",
					featureDir,
					"architecture.puml",
				)

				const violations = await slicesOfProject()
					.definedBy(`src/app/[locale]/${featureDir}/(**)/`)
					.should()
					.ignoringExternalDependencies()
					.adhereToDiagramInFile(diagramLocation)
					.check()

				expect(violations).toEqual([])
			},
		)
	})
})
