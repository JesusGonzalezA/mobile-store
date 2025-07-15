import { describe, expect, it } from "vitest"
import { waitFor } from "@testing-library/dom"
import Page from "@app/detail/(view)/product/page"
import { renderWithProviders } from "../../utils/renderWithProviders"

describe("Getting product", () => {
	it("should render a detailed view of the product", async () => {
		const { queryByText } = renderWithProviders(<Page />, {
			locale: "en",
		})

		await waitFor(() => {
			expect(queryByText("El Samsung Galaxy S24 Ultra es un")).toBeNull()
		})
	})
})
