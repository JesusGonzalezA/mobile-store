import { describe, expect, it } from "vitest"
import { waitFor } from "@testing-library/dom"
import container from "@/shared/di/container"
import { TelephoneListWrapper } from "@app/list/(view)/page"
import { diModule } from "@app/list/di/module"
import { errorProductListServiceModule } from "./mocks/di/errorProductListServiceModule"
import { renderWithProviders } from "../../utils/renderWithProviders"

describe("Getting products", () => {
	it("should render a grid section with products", async () => {
		const { queryByText, intl, queryByRole } = renderWithProviders(
			<TelephoneListWrapper />,
			{
				locale: "en",
			},
		)

		await waitFor(() => {
			const zeroResultsText = intl.list.search.results.replace("{count}", "0")
			expect(queryByText(zeroResultsText)).toBeNull()
		})

		const gridSection = queryByRole("region", { name: intl.list.grid.label })
		expect(gridSection?.querySelectorAll("a").length).toBeGreaterThan(0)
	})

	describe("when the server is down", () => {
		it("error message should be shown to the user", async () => {
			await container.unload(diModule)
			await container.load(errorProductListServiceModule)

			const { queryByText, intl } = renderWithProviders(
				<TelephoneListWrapper />,
				{
					locale: "en",
				},
			)

			await waitFor(() => {
				expect(queryByText(intl.list.search.error)).not.toBeNull()
			})
		})
	})
})
