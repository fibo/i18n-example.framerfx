import * as React from "react"
import { addPropertyControls, ControlType, Frame } from "framer"
import { IntlProvider } from "react-intl"

import { MyComponent } from "./components/MyComponent"

import * as en from "./i18n/en.json"
import * as it from "./i18n/it.json"

const defaultLocale = "en"

const config = {
  en,
  it
}

export function _IntlProvider(props) {
  const { locale } = props
  const localeConfig = config[locale]

  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      {...localeConfig}
    >
      <MyComponent />
    </IntlProvider>
  )
}

_IntlProvider.defaultProps = {
  locale: defaultLocale,
}

addPropertyControls(_IntlProvider, {
  locale: {
    title: "Locale",
    type: ControlType.Enum,
    defaultValue: _IntlProvider.defaultProps.locale,
    options: ["en", "it"],
    optionTitles: ["English", "Italiano"],
  },
})

