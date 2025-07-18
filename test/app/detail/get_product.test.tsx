import { describe, expect, it, vi } from "vitest"
import { waitFor } from "@testing-library/dom"
import ProductDetail from "@app/detail/(view)/product/ProductDetail"
import { renderWithProviders } from "../../utils/renderWithProviders"
import { product } from "../../mocks/data"

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
		const { queryByText, container } = renderWithProviders(<ProductDetail />, {
			locale: "en",
		})

		await waitFor(() => {
			expect(queryByText(product.name))
		})

		expect(container).toMatchSnapshot()
	})
})
