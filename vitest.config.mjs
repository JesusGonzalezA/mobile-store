import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	test: {
		environment: "jsdom",
		setupFiles: "./vitest.setup.ts",
		reporters: ['junit', 'verbose'],
		outputFile: {
			junit: './reports/vitest.xml',
		},
		server: {
			deps: {
				// https://github.com/vercel/next.js/issues/77200
				inline: ["next-intl"],
			},
		},
	},
})
