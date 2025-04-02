import { useEffect, useState } from 'react'
import './App.css'
import  i18n from './i18n'
import { useTranslation } from 'react-i18next'

function App() {
  const [name, setName] = useState("John")
  const {t} = useTranslation()
  
  useEffect(()=>{
    console.log("current browser language:",navigator)
    const a= navigator.language.split('-')[0]
    console.log("current browser language is:",a)
    i18n.changeLanguage(navigator.language)
    console.log("current browser language is-->:",t('GREET'))
  },[])  
  
  return (
    <>
    {t('GREET')} {name}
    </>
  )}

export default App
