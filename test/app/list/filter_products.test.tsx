import { describe, it, expect, beforeEach } from "vitest"
import userEvent, { UserEvent } from "@testing-library/user-event"
import { waitFor } from "@testing-library/dom"
import Page from "@app/list/(view)/page"
import { renderWithProviders } from "../../utils/renderWithProviders"
import { server } from "../../mocks/server"

describe("Filtering products", () => {
	let user: UserEvent
	let queryByText: ReturnType<typeof renderWithProviders>["queryByText"]
	let getByRole: ReturnType<typeof renderWithProviders>["getByRole"]
	let intl: ReturnType<typeof renderWithProviders>["intl"]
	let zeroResultsText: string

	describe('With mocked API', () => {
		beforeEach(async () => {
			user = userEvent.setup()
			const renderResult = renderWithProviders(<Page />, {
				locale: "en",
			})
			queryByText = renderResult.queryByText
			getByRole = renderResult.getByRole
			intl = renderResult.intl
			zeroResultsText = intl.list.search.results.replace("{count}", "0")

			await waitFor(() => {
				expect(queryByText(zeroResultsText)).toBeNull()
			})
		})

		describe("when the user filters by nonexistent product", () => {
			const nonExistentProduct = "NonExistentProduct123"

			it("should update the counter", async () => {
				await user.type(
					getByRole("textbox", { name: intl.list.search.placeholder }),
					nonExistentProduct,
				)

				await waitFor(() => {
					expect(queryByText(zeroResultsText)).not.toBeNull()
				})
			})
		})

		describe("when user filters by unique product", () => {
			const uniqueProduct = "Galaxy A25 5G"

			it("should update the counter", async () => {
				await user.type(
					getByRole("textbox", { name: intl.list.search.placeholder }),
					uniqueProduct,
				)

				await waitFor(() => {
					const oneResultText = intl.list.search.results.replace("{count}", "1")
					expect(queryByText(oneResultText)).not.toBeNull()
				})
			})
		})

		describe('when the server is down', () => {
			it("error message should be shown to the user", async () => {
				server.close()

				await user.type(
					getByRole("textbox", { name: intl.list.search.placeholder }),
					'asjkdakjsd',
				)

				await waitFor(() => {
					expect(queryByText(intl.list.search.error)).not.toBeNull()
				})
			})
		})
	})
})
