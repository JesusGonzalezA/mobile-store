import { BaseEntity } from "@/shared/domain/BaseEntity"
import { WithImage } from "@/shared/domain/WithImage"
import { WithBasePrice } from "@/shared/domain/WithBasePrice"

export type ProductListEntity = WithBasePrice<WithImage<BaseEntity>>
