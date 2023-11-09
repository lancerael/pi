'use client'

import { PropsWithChildren, useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { Theme } from '@pi-lib/styles'

export default function StyleRegistry({ children }: PropsWithChildren) {
  const [styleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement()
    styleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styleSheet.instance}>
      <Theme themeName="electron" scheme="dark">
        {children}
      </Theme>
    </StyleSheetManager>
  )
}
