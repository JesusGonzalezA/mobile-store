import { IProductListService } from "@app/list/services/ProductListService"

export class MockErrorProductListService implements IProductListService {
	query() {
		return Promise.resolve({
			ok: false,
			error: {
				message: "Mock error",
				error: "MockError",
			},
		})
	}
}
