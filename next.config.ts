import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/mobile-store",
	images: {
		unoptimized: true,
	},
}

const withNextIntl = createNextIntlPlugin("./src/shared/intl/request.ts")
export default withNextIntl(nextConfig)
