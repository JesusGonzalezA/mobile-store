import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const baseConfig: Partial<NextConfig> = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				hostname: "prueba-tecnica-api-tienda-moviles.onrender.com/**",
			},
		],
	},
}

const developmentConfig: NextConfig = {
	...baseConfig,
}

const productionConfig: NextConfig = {
	...baseConfig,
	env: {
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
		NEXT_PUBLIC_SEARCH_LIMIT: process.env.NEXT_PUBLIC_SEARCH_LIMIT,
	},
	compress: true,
}

const githubPagesConfig: NextConfig = {
	...productionConfig,
	images: {
		...productionConfig.images,
		unoptimized: true,
	},
	output: "export",
	basePath: "/mobile-store",
}

const withNextIntl = createNextIntlPlugin("./src/shared/intl/request.ts")
export default withNextIntl(
	process.env.NODE_ENV === "production" ? githubPagesConfig : developmentConfig,
)
