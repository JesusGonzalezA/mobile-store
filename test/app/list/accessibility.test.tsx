import { describe, it, expect } from "vitest"
import { waitFor } from "@testing-library/dom"
import { toHaveNoViolations, axe } from 'jest-axe'
import Page from "@app/list/(view)/page"
import { renderWithProviders } from "../../utils/renderWithProviders"
expect.extend(toHaveNoViolations)

describe("Accessibility", () => {
    it("should have no axe errors when the app is rendered", async () => {
        const { queryByText, intl, container } = renderWithProviders(<Page />, {
            locale: "en",
        })

        await waitFor(() => {
            const zeroResultsText = intl.list.search.results.replace("{count}", "0")
            expect(queryByText(zeroResultsText)).toBeNull()
        })

        expect(await axe(container)).toHaveNoViolations();
    })
})