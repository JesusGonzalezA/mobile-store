import { describe, it, expect, vi } from "vitest"
import { waitFor } from "@testing-library/dom"
import { toHaveNoViolations, axe } from "jest-axe"
import ProductDetail from "@app/detail/(view)/product/ProductDetail"
import { renderWithProviders } from "../../utils/renderWithProviders"
import { product } from "../../mocks/data"
expect.extend(toHaveNoViolations)

vi.mock("next/navigation", async () => {
	const actual = await vi.importActual("next/navigation")
	return {
		...actual,
		useSearchParams: () => ({
			get: (key: string) => (key === "id" ? "mocked-id" : null),
		}),
	}
})

describe("/en/product?id= ", () => {
	it("should have no axe errors", async () => {
		const { queryByText, container } = renderWithProviders(<ProductDetail />, {
			locale: "en",
		})

		await waitFor(() => {
			expect(queryByText(product.name))
		})

		expect(await axe(container)).toHaveNoViolations()
	})
})
