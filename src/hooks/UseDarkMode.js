import { useEffect, useState } from "react"


export const UseDarkMode =  () => {
    const [theme, setTheme] = useState(localStorage.theme);
    const colortheme = theme === 'dark' ? 'light' : 'dark';
    
    
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.add('dark')
        root.classList.remove(colortheme)
        localStorage.setItem('theme', theme)
    }, [theme, colortheme])

    return[colortheme, setTheme]

   
}