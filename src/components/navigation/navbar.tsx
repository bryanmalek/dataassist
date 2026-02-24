"use client";

import { buttonVariants } from "@/components/ui/button";
import LanguageToggle from "@/components/ui/language-toggle";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useLanguage } from "@/hooks/use-language";
import { cn, NAV_LINKS } from "@/utils";
import { translations } from "@/utils/constants/translations";
import { LucideIcon, ShieldCheckIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../global/animation-container";

const Navbar = () => {
    const { language } = useLanguage();
    const t = translations[language].nav;

    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 8) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={cn(
            "sticky top-0 inset-x-0 h-14 w-full border-b border-transparent z-[99999] select-none",
            scroll && "border-background/80 bg-background/40 backdrop-blur-md"
        )}>
            <AnimationContainer reverse delay={0.1} className="size-full">
                <MaxWidthWrapper className="flex items-center justify-between">
                    <div className="flex items-center space-x-12">
                        <Link href="/#home">
                            <span className="text-lg font-bold font-heading !leading-none flex items-center gap-2">
                                <ShieldCheckIcon className="w-5 h-5 text-violet-500" />
                                DataAssist
                            </span>
                        </Link>

                        <NavigationMenu className="hidden lg:flex">
                            <NavigationMenuList>
                                {NAV_LINKS.map((link) => (
                                    <NavigationMenuItem key={link.titleKey}>
                                        {link.menu ? (
                                            <>
                                                <NavigationMenuTrigger>
                                                    {link.titleKey === "features" ? t.features
                                                        : link.titleKey === "blog" ? t.blog
                                                            : t.faq}
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className={cn(
                                                        "grid gap-1 p-4 md:w-[400px] lg:w-[500px] rounded-xl",
                                                        link.titleKey === "features" ? "lg:grid-cols-[.75fr_1fr]" : "lg:grid-cols-1"
                                                    )}>
                                                        {link.titleKey === "features" && (
                                                            <li className="row-span-4 pr-2 relative rounded-lg overflow-hidden">
                                                                <div className="absolute inset-0 !z-10 h-full w-[calc(100%-10px)] bg-[linear-gradient(to_right,rgb(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgb(38,38,38,0.5)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                                                                <NavigationMenuLink asChild className="z-20 relative">
                                                                    <Link
                                                                        href="/#features"
                                                                        className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                                                                    >
                                                                        <ShieldCheckIcon className="w-6 h-6 text-violet-500 mb-2" />
                                                                        <h6 className="mb-2 text-lg font-medium">
                                                                            {t.features}
                                                                        </h6>
                                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                                            {translations[language].features.subtitle}
                                                                        </p>
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            </li>
                                                        )}
                                                        {link.menu.map((menuItem) => {
                                                            const itemData = t.featureItems[menuItem.titleKey as keyof typeof t.featureItems] as { title: string; tagline: string } | undefined;
                                                            if (!itemData) return null;
                                                            return (
                                                                <ListItem
                                                                    key={menuItem.titleKey}
                                                                    title={itemData.title}
                                                                    href={menuItem.href}
                                                                    icon={menuItem.icon}
                                                                >
                                                                    {itemData.tagline}
                                                                </ListItem>
                                                            );
                                                        })}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </>
                                        ) : (
                                            <Link href={link.href} legacyBehavior passHref>
                                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                    {link.titleKey === "pricing" ? t.pricing
                                                        : link.titleKey === "blog" ? t.blog
                                                            : link.titleKey === "faq" ? t.faq
                                                                : link.titleKey}
                                                </NavigationMenuLink>
                                            </Link>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="hidden lg:flex items-center gap-x-2">
                        <LanguageToggle />
                        <Link href="/#contact" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                            {t.signIn}
                        </Link>
                        <Link href="/#contact" className={buttonVariants({ size: "sm" })}>
                            {t.getStarted}
                        </Link>
                    </div>

                    <div className="flex lg:hidden items-center gap-x-2">
                        <LanguageToggle />
                        <MobileNavbar />
                    </div>

                </MaxWidthWrapper>
            </AnimationContainer>
        </header>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href!}
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center space-x-2 text-neutral-300">
                        <Icon className="h-4 w-4" />
                        <h6 className="text-sm font-medium !leading-none">
                            {title}
                        </h6>
                    </div>
                    <p title={children! as string} className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navbar
