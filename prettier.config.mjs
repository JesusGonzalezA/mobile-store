import a11yPrettierConfig from "prettier-config-a11y" with { type: "json" }

/**
 * @type {import("prettier").Config}
 */
const config = {
	...a11yPrettierConfig,
	semi: false,
}

export default config
