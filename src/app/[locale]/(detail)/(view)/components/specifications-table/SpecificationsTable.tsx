import React from "react"
import { ProductSpecs } from "@app/detail/domain/ProductSpecs"
import { useDetailTranslations } from "@app/detail/intl/useDetailTranslations"
import { BaseEntity } from "@/shared/domain/BaseEntity"
import { Heading } from "@/components"
import { keys } from "@app/detail/intl/keys"
import styles from "./specifications-table.module.css"

type Specification = ProductSpecs & Omit<BaseEntity, "id" | "basePrice">
export const SpecificationsTable = ({
	specification,
}: {
	specification: Specification
}) => {
	const t = useDetailTranslations()

	return (
		<React.Fragment>
			<Heading as="h2" className={styles.title}>
				{t("specification")}
			</Heading>
			<table className={styles.table}>
				<tbody>
					{Object.entries(specification).map(([key, value]) => (
						<tr key={key}>
							<th className={styles.specLabel}>{t(key as never as keys)}</th>
							<td className={styles.specValue}>{value}</td>
						</tr>
					))}
				</tbody>
			</table>
		</React.Fragment>
	)
}
