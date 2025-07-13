import { useTranslations } from "next-intl"
import { keys } from "./keys"

export const useListTranslation = () => {
	return useTranslations("list")<keys>
}
