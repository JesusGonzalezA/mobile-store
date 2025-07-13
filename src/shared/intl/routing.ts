import { defineRouting } from "next-intl/routing"
import { locales, defaultLocale } from "@/shared/intl"

export const routing = defineRouting({
	locales,
	defaultLocale,
})
