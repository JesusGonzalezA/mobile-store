import { Component, ReactNode } from "react"

interface Props {
	children: ReactNode
	fallback: ReactNode
}

interface State {
	hasError: boolean
	error?: Error
}

export class CustomErrorBoundary extends Component<Props, State> {
	state: State = { hasError: false }

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error }
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback
		}

		return this.props.children
	}
}
