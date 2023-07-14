import { createContext, useState } from "react";

type Theme = 'dark' | ''

interface AppContextProps{
    theme?: Theme
    ToggleTheme?: () => void
}

const AppContext = createContext<AppContextProps>({}) // contexto = local onde os dados da aplicação estão

export function AppProvider(props: any){

    const [ theme, setTheme ] = useState<Theme>('')

    function ToggleTheme(){
        setTheme(theme === '' ? 'dark' : '')
        console.log('ToggleTheme')
    }

    return(
        <AppContext.Provider value={{
            theme,
            ToggleTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
