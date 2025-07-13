"use client"

import Link from "next/link"

export default function NotFound() {
	return (
		<div>
			<h1>Página no encontrada</h1>
			<Link href={`/es`}>Volver al inicio</Link>
		</div>
	)
}
