import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
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
}

const withNextIntl = createNextIntlPlugin("./src/shared/intl/request.ts")
export default withNextIntl(nextConfig)
