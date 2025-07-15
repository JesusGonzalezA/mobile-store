import { describe, expect, it, vi } from "vitest"
import { waitFor } from "@testing-library/dom"
import ProductDetail from "@app/detail/(view)/product/ProductDetail"
import { renderWithProviders } from "../../utils/renderWithProviders"

vi.mock("next/navigation", async () => {
	const actual = await vi.importActual("next/navigation")
	return {
		...actual,
		useSearchParams: () => ({
			get: (key: string) => (key === "id" ? "mocked-id" : null),
		}),
	}
})

describe("Getting product", () => {
	it("should render a detailed view of the product", async () => {
		const { queryByText } = renderWithProviders(<ProductDetail />, {

			locale: "en",
		})

		await waitFor(() => {
			expect(queryByText("El Samsung Galaxy S24 Ultra es un")).toBeNull()
		})
	})
})
