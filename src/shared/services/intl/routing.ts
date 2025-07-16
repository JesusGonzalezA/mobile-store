import { defineRouting } from "next-intl/routing"
import { locales, defaultLocale } from "@/shared/services/intl"

export const routing = defineRouting({
	locales,
	defaultLocale,
})
