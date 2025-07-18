"use client"

import { useEffect } from "react"

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div>
			<h2>Algo fue mal!</h2>
			<button onClick={() => reset()}>Prueba de nuevo</button>
		</div>
	)
}
