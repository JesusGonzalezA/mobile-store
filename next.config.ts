import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const developmentConfig: NextConfig = {}
const productionConfig: NextConfig = {
	output: "export",
	basePath: "/mobile-store",
	images: {
		unoptimized: true,
	},
	env: {
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
		NEXT_PUBLIC_SEARCH_LIMIT: process.env.NEXT_PUBLIC_SEARCH_LIMIT,
	},
	compress: true,
}

const withNextIntl = createNextIntlPlugin("./src/shared/intl/request.ts")
export default withNextIntl(
	process.env.NODE_ENV === "production" ? productionConfig : developmentConfig,
)
