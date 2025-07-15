import { useInjection } from "@/shared/di/hooks/useInjection"
import { DI_SYMBOLS } from "@app/detail/di/types"
import { useFetch } from "@/shared/product-service/hooks/useFetch"
import { IProductDetailService } from "@app/detail/services/ProductDetailService"
import { GetProductParams } from "@app/detail/domain/GetProductParams"
import { ProductEntity } from "@app/detail/domain/ProductEntity"

export const useGetProduct = (params: GetProductParams) => {
    const service = useInjection<IProductDetailService>(
        DI_SYMBOLS.ProductDetailService,
    )

    const fetchResult = useFetch<ProductEntity, GetProductParams>(
        () => service.get(params),
        { options: { auto: true } },
    )

    if (fetchResult.error) throw new Error(fetchResult.error.message)

    return fetchResult
}
