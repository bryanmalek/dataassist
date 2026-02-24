"use client";

import { createContext, useState, useEffect, ReactNode } from 'react';
import type { Language } from '@/utils/constants/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('es');

    useEffect(() => {
        const saved = localStorage.getItem('da-language') as Language;
        if (saved === 'es' || saved === 'en') setLanguageState(saved);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('da-language', lang);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
