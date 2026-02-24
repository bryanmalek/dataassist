"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/hooks/use-language";
import { cn, PLANS } from "@/utils";
import { translations } from "@/utils/constants/translations";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { useState } from 'react';

type Tab = "monthly" | "yearly";

const PricingCards = () => {
    const { language } = useLanguage();
    const t = translations[language].pricing;

    const MotionTabTrigger = motion(TabsTrigger);
    const [activeTab, setActiveTab] = useState<Tab>("monthly");

    return (
        <Tabs defaultValue="monthly" className="w-full flex flex-col items-center justify-center">
            <TabsList>
                <MotionTabTrigger
                    value="monthly"
                    onClick={() => setActiveTab("monthly")}
                    className="relative"
                >
                    {activeTab === "monthly" && (
                        <motion.div
                            layoutId="active-tab-indicator"
                            transition={{ type: "spring", bounce: 0.5 }}
                            className="absolute top-0 left-0 w-full h-full bg-background shadow-sm rounded-md z-10"
                        />
                    )}
                    <span className="z-20">{t.monthly}</span>
                </MotionTabTrigger>
                <MotionTabTrigger
                    value="yearly"
                    onClick={() => setActiveTab("yearly")}
                    className="relative"
                >
                    {activeTab === "yearly" && (
                        <motion.div
                            layoutId="active-tab-indicator"
                            transition={{ type: "spring", bounce: 0.5 }}
                            className="absolute top-0 left-0 w-full h-full bg-background shadow-sm rounded-md z-10"
                        />
                    )}
                    <span className="z-20">{t.yearly}</span>
                </MotionTabTrigger>
            </TabsList>

            {(["monthly", "yearly"] as Tab[]).map((period) => (
                <TabsContent
                    key={period}
                    value={period}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 flex-wrap max-w-5xl mx-auto pt-6"
                >
                    {PLANS.map((plan) => (
                        <Card
                            key={plan.name}
                            className={cn(
                                "flex flex-col w-full border-border rounded-xl",
                                plan.featured && "border-2 border-violet-500"
                            )}
                        >
                            <CardHeader className={cn(
                                "border-b border-border",
                                plan.featured ? "bg-violet-500/[0.07]" : "bg-foreground/[0.03]"
                            )}>
                                <CardTitle className={cn(!plan.featured && "text-muted-foreground", "text-lg font-medium")}>
                                    {plan.name}
                                </CardTitle>
                                <CardDescription>
                                    {plan.info[language]}
                                </CardDescription>
                                <h5 className="text-3xl font-semibold flex items-end">
                                    {plan.price[period] === 0 ? (
                                        <span>{language === 'es' ? 'Gratis' : 'Free'}</span>
                                    ) : (
                                        <>
                                            ${plan.price[period]}
                                            <span className="text-base text-muted-foreground font-normal">
                                                {period === "monthly" ? t.perMonth : t.perYear}
                                            </span>
                                            {period === "yearly" && (
                                                <motion.span
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="px-2 py-0.5 ml-2 rounded-md bg-violet-500 text-foreground text-sm font-medium"
                                                >
                                                    {t.discount}
                                                </motion.span>
                                            )}
                                        </>
                                    )}
                                </h5>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-4">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircleIcon className="text-violet-500 w-4 h-4 shrink-0" />
                                        <TooltipProvider>
                                            <Tooltip delayDuration={0}>
                                                <TooltipTrigger asChild>
                                                    <p className={cn("text-sm", feature.tooltip && "border-b !border-dashed border-border cursor-pointer")}>
                                                        {feature.text[language]}
                                                    </p>
                                                </TooltipTrigger>
                                                {feature.tooltip && (
                                                    <TooltipContent>
                                                        <p>{feature.tooltip[language]}</p>
                                                    </TooltipContent>
                                                )}
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                ))}
                            </CardContent>
                            <CardFooter className="w-full mt-auto">
                                <Link
                                    href={plan.btn.href}
                                    style={{ width: "100%" }}
                                    className={buttonVariants({
                                        className: plan.featured ? "bg-violet-500 hover:bg-violet-500/80 text-white" : "",
                                    })}
                                >
                                    {plan.btn.text[language]}
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </TabsContent>
            ))}
        </Tabs>
    );
};

export default PricingCards;
