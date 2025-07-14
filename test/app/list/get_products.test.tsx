import { describe, expect, it } from "vitest"
import { waitFor } from "@testing-library/dom"
import Page from "@app/list/(view)/page"
import { DI_SYMBOLS } from "@app/list/di/types"
import container from "@/shared/di/container"
import { renderWithProviders } from "../../utils/renderWithProviders"
import { MockErrorProductListService } from "./mocks/MockProductListService"

describe("Getting products", () => {
    describe('when the server is down', () => {
        it("error message should be shown to the user", async () => {
            ; (await container.rebind(DI_SYMBOLS.ProductListService)).to(MockErrorProductListService).inTransientScope()

            const { queryByText, intl } = renderWithProviders(<Page />, {
                locale: "en",
            })

            await waitFor(() => {
                expect(queryByText(intl.list.search.error)).not.toBeNull()
            })
        })
    })
})