import { ProductListEntity } from "@/app/[locale]/(list)/domain/ProductListEntity"
import { readFile } from "fs/promises"
import { http, HttpResponse } from "msw"
import path from "path"

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com"

const productsJsonPath = path.join("test", "mocks", "data", "products.json")
const productsJsonContent = await readFile(productsJsonPath, "utf-8")
const products = JSON.parse(productsJsonContent)

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

		let filteredProducts = products as ProductListEntity[]
		if (search) {
			const searchLower = search.toLowerCase()
			filteredProducts = products.filter(
				(product: any) =>
					product.name.toLowerCase().includes(searchLower) ||
					product.brand.toLowerCase().includes(searchLower),
			)
		}

		const startIndex = offset
		const endIndex = limit ? startIndex + limit : undefined
		const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

		return HttpResponse.json(paginatedProducts)
	}),
]
