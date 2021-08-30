import * as React from "react"

const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = React.useState(false)
  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
