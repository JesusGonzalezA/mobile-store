import { ProductListService } from "@/app/[locale]/(list)/services/ProductListService"

export const DI_SYMBOLS = {
	ProductListService: Symbol("ProductListService"),
} as const

export interface DI_TYPES {
	ProductListService: ProductListService
}
