import { BaseEntity } from "@/shared/domain/BaseEntity"
import { WithImage } from "@/shared/domain/WithImage"
import { WithBasePrice } from "@/shared/domain/WithBasePrice"

export type CartProduct = WithBasePrice<WithImage<BaseEntity>> & {
	capacity: string
	color: string
	cartId?: string
}
