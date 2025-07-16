import { BaseEntity } from "@/shared/domain/BaseEntity"
import { WithImage } from "@/shared/domain/WithImage"
import { WithBasePrice } from "@shared/domain/WithBasePrice"

export type SimilarProduct = WithBasePrice<WithImage<BaseEntity>>
