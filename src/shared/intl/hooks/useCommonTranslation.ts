import { useTranslations } from "next-intl"
import { keys } from "@shared/intl/keys"

export const useCommonTranslation = () => {
	return useTranslations("common")<keys>
}
