import { useTranslations } from "next-intl"
import { keys } from "./keys"

export const useComponentTranslations = () => {
	return useTranslations("components")<keys>
}
