### Using your theme

Once converted, copy the output and save it. You can then pass this to your imported `@pi-lib/styles/Theme` provider as a prop.

```
import customTheme from './local/myThemes/customTheme'
import { ThemeProvider } from '@pi-lib/styles'
<ThemeProvider theme={customTheme}>
  /* your app here */
</ThemeProvider>
```

You should then be able to access your theme from your App. 🎉
