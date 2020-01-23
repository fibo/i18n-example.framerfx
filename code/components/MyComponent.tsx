import { Frame } from "framer"
import * as React from "react"
import { useIntl } from "react-intl"

import ErrorBoundaryText from "./ErrorBoundaryText"

export function MyComponent(props) {
  const intl = useIntl()

  return (
    <ErrorBoundaryText message="My Component">
      <Frame style={{ fontSize: 32 }}>
        {intl.formatMessage({ id: "Pepperoni" })}
      </Frame>
    </ErrorBoundaryText>
  )
}
