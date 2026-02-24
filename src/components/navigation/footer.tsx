"use client";

import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/utils/constants/translations';
import { CloudIcon, ShieldCheckIcon } from 'lucide-react';
import Link from 'next/link';
import { AnimationContainer } from "@/components";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[220px]">
                        <div className="flex items-center gap-2">
                            <ShieldCheckIcon className="w-6 h-6 text-violet-500" />
                            <span className="text-lg font-bold font-heading">DataAssist</span>
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            {t.tagline}
                        </p>
                        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                            <CloudIcon className="w-3.5 h-3.5 text-violet-400" />
                            <span>{t.aws}</span>
                        </div>
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div>
                                <h3 className="text-base font-medium text-white">
                                    {t.product}
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-2">
                                    <li>
                                        <Link href="/#features" className="hover:text-foreground transition-all duration-300">
                                            {t.links.features}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#pricing" className="hover:text-foreground transition-all duration-300">
                                            {t.links.pricing}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#quiz" className="hover:text-foreground transition-all duration-300">
                                            {language === 'es' ? 'Score de Seguridad' : 'Security Score'}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    {t.resources}
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-2">
                                    <li>
                                        <Link href="/#blog" className="hover:text-foreground transition-all duration-300">
                                            {t.links.blog}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#faq" className="hover:text-foreground transition-all duration-300">
                                            {t.links.faq}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.4}>
                            <div>
                                <h3 className="text-base font-medium text-white">
                                    {t.company}
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-2">
                                    <li>
                                        <Link href="/#contact" className="hover:text-foreground transition-all duration-300">
                                            {t.links.about}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#contact" className="hover:text-foreground transition-all duration-300">
                                            {t.links.contact}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.5}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Legal
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-2">
                                    <li>
                                        <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                            {t.links.privacy}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                            {t.links.terms}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} DataAssist. {t.copyright}
                    </p>
                </AnimationContainer>
            </div>

            <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="DATAASSIST" />
            </div>
        </footer>
    );
};

export default Footer;
