"use client";

import { useLanguage } from '@/hooks/use-language';
import { GlobeIcon } from 'lucide-react';
import { Button } from './button';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-1.5 text-muted-foreground hover:text-foreground"
            aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
            <GlobeIcon className="w-3.5 h-3.5" />
            <span className="text-xs font-medium tracking-wider">
                {language === 'es' ? 'EN' : 'ES'}
            </span>
        </Button>
    );
};

export default LanguageToggle;
