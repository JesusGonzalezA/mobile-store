import { useTranslations } from "next-intl"
import { keys } from "./keys"

export const useDetailTranslations = () => {
	return useTranslations("details")<keys>
}
