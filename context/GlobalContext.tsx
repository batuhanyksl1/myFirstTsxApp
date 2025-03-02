import React, { createContext, useContext, useState, ReactNode } from 'react';

type currentLanguageTypes = 'en' | 'es' | 'tr' | 'fr' | 'rs' | 'it' | 'de';

interface IGlobalContext {
  currentLanguage: currentLanguageTypes;
  setCurrentLanguage: (lang: currentLanguageTypes) => void; // dönüş tipi eklendi
}
const GlobalContext = createContext<IGlobalContext>({
  currentLanguage: 'tr',
  setCurrentLanguage: () => {},
});

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [currentLanguage, setCurrentLanguage] =
    useState<currentLanguageTypes>('tr');
  return (
    <GlobalContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
