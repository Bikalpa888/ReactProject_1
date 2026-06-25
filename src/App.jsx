import { useEffect, useState } from 'react'
import MyRoutes from './MyRoutes'
import { MyContextProvider } from './hooks/MyContext'
import { MyThemeContext } from './hooks/MyThemeContext'

const App = () => {

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const toggleTheme = () => setTheme(current => current === 'light' ? 'dark' : 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
        <MyThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            <MyContextProvider>
                <MyRoutes/>
            </MyContextProvider>
        </MyThemeContext.Provider>

    </>
  )
}

export default App
