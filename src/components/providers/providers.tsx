"use client";

import React from 'react';
import { LanguageProvider } from './language-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    );
};

export default Providers;
