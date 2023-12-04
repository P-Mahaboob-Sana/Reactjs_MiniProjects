import {useContext, createContext} from 'react'

export const ThemeContext= createContext({
    themeMode:"Light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

// We use Provider in order to "pass the store as an attribute". By passing the store as an attribute in the Provider component,
// we are avoiding having to store the store as props.
export const ThemeProvider = ThemeContext.Provider

// "useContext" is a hook that lets you easily “hook into” context, thereby accessing shared state.Basically they used to Share the created context .
//"useTheme " is a custom hook....this method of context is widely used and preffered upon above project "miniContext"
export default function useTheme(){
    return useContext(ThemeContext)
}