import { describe, expect, it } from "vitest"
import { axe, toHaveNoViolations } from "jest-axe"
import { CartView } from "@app/cart/(view)/cart/components/cart-view/CartView"
import { renderWithProviders } from "../../utils/renderWithProviders"
expect.extend(toHaveNoViolations)

describe("/cart", () => {
	it("should have no axe errors", async () => {
		const { container } = renderWithProviders(<CartView />, {
			locale: "en",
		})

		expect(await axe(container)).toHaveNoViolations()
	})
})
