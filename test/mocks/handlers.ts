import { http, HttpResponse } from "msw"
import { products, product } from "./data"

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com"

export const handlers = [
	http.get(`${baseUrl}/products`, async ({ request }) => {
		const url = new URL(request.url)
		const searchParams = url.searchParams

		const search = searchParams.get("search")
		const limit = searchParams.get("limit")
			? parseInt(searchParams.get("limit")!)
			: undefined
		const offset = searchParams.get("offset")
			? parseInt(searchParams.get("offset")!)
			: 0

		let filteredProducts = products
		if (search) {
			const searchLower = search.toLowerCase()
			filteredProducts = products.filter(
				(product) =>
					product.name.toLowerCase().includes(searchLower) ||
					product.brand.toLowerCase().includes(searchLower),
			)
		}

		const startIndex = offset
		const endIndex = limit ? startIndex + limit : undefined
		const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

		return HttpResponse.json(paginatedProducts)
	}),
	http.get(`${baseUrl}/products/:id`, async () => {
		return HttpResponse.json(product)
	}),
]
