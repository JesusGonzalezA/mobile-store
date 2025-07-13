import { useInjection } from "@/shared/di/hooks/useInjection"
import { useFetch } from "@/shared/mobile-service/hooks/useFetch"
import { DI_SYMBOLS } from "@app/list/di/types"
import { ProductListEntity } from "@app/list/domain/ProductListEntity"
import { ProductListService } from "@app/list/services/ProductListService"

export const useGetProducts = () => {
	const service = useInjection<ProductListService>(
		DI_SYMBOLS.ProductListService,
	)
	return useFetch<ProductListEntity>(() => service.query())
}
