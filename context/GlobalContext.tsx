import React, { createContext, useContext, useState, ReactNode } from 'react';

type currentLanguageTypes = 'en' | 'es' | 'tr';

interface IGlobalContext {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  currentLanguage: currentLanguageTypes;
  setCurrentLanguage: (lang: currentLanguageTypes) => void; // dönüş tipi eklendi
}
const GlobalContext = createContext<IGlobalContext>({
  isDarkMode: false,
  setIsDarkMode: () => {},
  currentLanguage: 'en',
  setCurrentLanguage: () => {},
});

type GlobalProviderProps = {
  children: ReactNode;
};

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
const [currentLanguage, setCurrentLanguage] =
  useState<currentLanguageTypes>('tr');
  return (
    <GlobalContext.Provider
      value={{ isDarkMode, setIsDarkMode, currentLanguage, setCurrentLanguage }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
