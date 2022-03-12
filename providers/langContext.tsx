import React, { createContext, useContext, useState } from 'react'

const LangContext = createContext<any>(null)

export const LangProvider = ({ children }: { children: JSX.Element }) => {
  const [lang, setLang] = useState('ES')
  return <LangContext.Provider value={{ setLang, lang }}>{children}</LangContext.Provider>
}

export const useLang = () => {
  return useContext(LangContext)
}
