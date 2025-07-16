import { describe, expect, it } from "vitest"
import { CartView } from "@app/cart/(view)/cart/components/cart-view/CartView"
import { renderWithProviders } from "../../utils/renderWithProviders"
import { waitFor } from "@testing-library/dom"
import container from "@/shared/di/container"
import { diModule } from "@shared/services/storage/di/module"
import { mapStorageServiceModule } from "./mocks/mapStorageServiceModule"
import { DI_SYMBOLS } from "@/shared/services/storage/di/types"
import { IStorageService } from "@/shared/services/storage/domain/IStorageService"
import { CartProduct } from "@/app/[locale]/(cart)/domain/CartProduct"

describe("Cart", () => {
	it("should render the carts saved in storage", async () => {
		await container.unload(diModule)
		await container.load(mapStorageServiceModule)

		const storageService = container.get<IStorageService<CartProduct[]>>(
			DI_SYMBOLS.StorageService,
		)
		storageService.set("cart", [
			{
				basePrice: 1000,
				brand: "Apple",
				id: "1",
				capacity: "128GB",
				color: "Black",
				imageUrl: "https://example.com/image1.jpg",
				name: "iPhone 13",
				cartId: "cart1",
			},
		])

		const { queryByText, intl } = renderWithProviders(<CartView />, {
			locale: "en",
		})

		await waitFor(() =>
			expect(queryByText(intl.cart.count.replace("{count}", "0"))).toBeNull(),
		)
	})
})
