import { useEffect, useRef, useState } from "react"
import { useInjection } from "@/shared/di/hooks/useInjection"
import type { IStorageService } from "../domain/IStorageService"
import { DI_SYMBOLS } from "../di/types"

export const useStorage = <T,>() => {
	const [isHydrated, setIsHydrated] = useState(false)
	const storage = useInjection<IStorageService<T>>(DI_SYMBOLS.StorageService)
	const [isInitialized, setIsInitialized] = useState<boolean>(false)
	const ref = useRef<IStorageService<T>>(null)

	useEffect(() => {
		setIsHydrated(true)
	}, [])

	useEffect(() => {
		if (!isHydrated) return

		if (isInitialized) return

		setIsInitialized(true)
		ref.current = storage
	}, [isHydrated, storage, isInitialized])

	return ref.current
}
