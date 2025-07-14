import { describe, expect, it } from "vitest"
import { waitFor } from "@testing-library/dom"
import container from "@/shared/di/container"
import Page from "@app/list/(view)/page"
import { diModule } from "@app/list/di/module"
import { errorProductListServiceModule } from "./mocks/di/errorProductListServiceModule"
import { renderWithProviders } from "../../utils/renderWithProviders"

describe("Getting products", () => {
	describe("when the server is down", () => {
		it("error message should be shown to the user", async () => {
			await container.unload(diModule)
			await container.load(errorProductListServiceModule)

			const { queryByText, intl } = renderWithProviders(<Page />, {
				locale: "en",
			})

			await waitFor(() => {
				expect(queryByText(intl.list.search.error)).not.toBeNull()
			})
		})
	})
})
