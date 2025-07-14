import { useTranslations } from "next-intl"
import { keys } from "./keys"

export const useCartTranslations = () => {
	return useTranslations("components")<keys>
}
