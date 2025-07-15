import { ProductListEntity } from "@/app/[locale]/(list)/domain/ProductListEntity"
import { readFile } from "fs/promises"
import path from "path"

const productsJsonPath = path.join("test", "mocks", "data", "products.json")
const productsJsonContent = await readFile(productsJsonPath, "utf-8")

export const products = JSON.parse(productsJsonContent) as ProductListEntity[]
