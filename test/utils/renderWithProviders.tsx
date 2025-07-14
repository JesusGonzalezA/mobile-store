import { NextIntlClientProvider } from "next-intl"
import { render, RenderOptions } from "@testing-library/react"
import { defaultLocale } from "@/shared/intl"
import esTranslations from "../../public/locales/es.json"
import enTranslations from "../../public/locales/en.json"

const translations = {
	es: esTranslations,
	en: enTranslations,
}

export const renderWithProviders = (
	ui: React.ReactElement,
	options: RenderOptions & { locale: keyof typeof translations },
) => {
	const messages = translations[options.locale || defaultLocale]
	return {
		...render(
			<NextIntlClientProvider
				locale={options.locale || defaultLocale}
				messages={messages}
			>
				{ui}
			</NextIntlClientProvider>,
			options,
		),
		intl: messages,
	}
}
