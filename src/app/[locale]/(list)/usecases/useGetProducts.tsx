import { useInjection } from "@/shared/di/hooks/useInjection"
import { useFetch } from "@/shared/di/hooks/useFetch"
import { DI_SYMBOLS } from "@/app/[locale]/(list)/di/types"
import { ProductListEntity } from "@/app/[locale]/(list)/domain/ProductListEntity"
import { ProductListService } from "@/app/[locale]/(list)/services/ProductListService"

export const useGetProducts = () => {
	const service = useInjection<ProductListService>(
		DI_SYMBOLS.ProductListService,
	)
	return useFetch<ProductListEntity>(() => service.query())
}
