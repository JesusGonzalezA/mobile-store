import { useTranslations } from "next-intl"
import { keys } from "@shared/services/intl/keys"

export const useCommonTranslation = () => {
	return useTranslations("common")<keys>
}
