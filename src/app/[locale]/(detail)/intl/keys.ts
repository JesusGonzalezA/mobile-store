import type { BaseEntity } from "@/shared/domain/BaseEntity"
import type { ProductSpecs } from "@app/detail/domain/ProductSpecs"

type baseKeys = "price" | "add" | "color" | "storage" | "specification" | "similarProducts"
type BaseEntityKeys = keyof Omit<BaseEntity, "id" | "basePrice">
type ProductSpecsKeys = keyof ProductSpecs

export type keys = baseKeys | BaseEntityKeys | ProductSpecsKeys