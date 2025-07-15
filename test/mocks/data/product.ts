import { ProductEntity } from "@/app/[locale]/(detail)/domain/ProductEntity"
import { readFile } from "fs/promises"
import path from "path"

const productJsonPath = path.join("test", "mocks", "data", "product.json")
const productJsonContent = await readFile(productJsonPath, "utf-8")

export const product = JSON.parse(productJsonContent) as ProductEntity
