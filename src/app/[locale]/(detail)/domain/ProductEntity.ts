import { BaseEntity } from "@/shared/domain/BaseEntity"
import { ProductSpecs } from "@app/detail/domain/ProductSpecs"
import { ColorOption } from "@app/detail/domain/ColorOption"
import { StorageOption } from "@app/detail/domain/StorageOption"
import { SimilarProduct } from "@app/detail/domain/SimilarProduct"

export type ProductEntity = BaseEntity & {
	rating: number
	specs: ProductSpecs
	basePrice: number
	colorOptions: ColorOption[]
	storageOptions: StorageOption[]
	similarProducts: SimilarProduct[]
}
