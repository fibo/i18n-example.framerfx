import { Frame } from "framer"
import * as React from "react"

interface ErrorBoundaryTextProps {
  children: React.ReactNode
  message: String
}

export default class ErrorBoundaryText extends React.Component<ErrorBoundaryTextProps> {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <Frame>{this.props.message}</Frame>
    }

    return this.props.children
  }
}
