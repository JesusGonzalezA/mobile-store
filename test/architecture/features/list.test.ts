import { slicesOfProject } from "tsarch"
import * as path from "path"
import { describe, it, expect } from "vitest"

describe("architecture", () => {
    describe('list feature', () => {

    it('should adhere to diagram', { timeout: 6000 }, async () => {
        const diagramLocation = path.resolve('src', 'app', '[locale]', '(list)', 'architecture.puml')

        const violations = await slicesOfProject()
            .definedBy('src/app/[locale]/(list)/(**)/')
            .should()
            .ignoringExternalDependencies()
            .adhereToDiagramInFile(diagramLocation)
            .check()

            expect(violations).toEqual([])
    })
})    
})