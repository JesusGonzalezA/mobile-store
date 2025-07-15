import { filesOfProject } from "tsarch"
import { describe, it, expect } from "vitest"
import { features } from "./features"

describe("architecture", () => {
	it.each(features)(
		"%s feature should be independent",
		{ timeout: 10000 },
		async (featureDir: string) => {
			const restOfFeatures = features.filter((f) => f !== featureDir)
			const scapeParentheses = (str: string) =>
				`/${str.replace(/[()]/g, "\\$&")}/.*`

			for (const f of restOfFeatures) {
				const rule = filesOfProject()
					.matchingPattern(scapeParentheses(featureDir))
					.shouldNot()
					.dependOnFiles()
					.matchingPattern(scapeParentheses(f))

				const violations = await rule.check()
				expect(violations).toEqual([])
			}
		},
	)
})
