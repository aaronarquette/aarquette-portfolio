import { createContext, ReactNode, useContext, useState } from "react"

export type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
interface ThemeProviderProps {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className={`app-container ${theme}`}>
          {children}
        </div>
      </ThemeContext.Provider>
    </>
  );
}