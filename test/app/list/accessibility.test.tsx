import { describe, it, expect } from "vitest"
import { waitFor } from "@testing-library/dom"
import { toHaveNoViolations, axe } from "jest-axe"
import { ProductListWrapper } from "@app/list/(view)/ProductList"
import { renderWithProviders } from "../../utils/renderWithProviders"
expect.extend(toHaveNoViolations)

describe("/en", () => {
	it("should have no axe errors", async () => {
		const { queryByText, intl, container } = renderWithProviders(
			<ProductListWrapper />,
			{
				locale: "en",
			},
		)

		await waitFor(() => {
			const zeroResultsText = intl.list.search.results.replace("{count}", "0")
			expect(queryByText(zeroResultsText)).toBeNull()
		})

		expect(await axe(container)).toHaveNoViolations()
	})
})
