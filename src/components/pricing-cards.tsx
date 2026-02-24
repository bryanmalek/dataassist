"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { PLANS } from "@/utils";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";

const PricingCards = () => {
    const { language } = useLanguage();
    const plan = PLANS[0];

    return (
        <div className="flex justify-center w-full">
            <Card className="flex flex-col w-full max-w-sm border-2 border-violet-500">
                <CardHeader className="border-b border-border bg-violet-500/[0.07]">
                    <CardTitle className="text-lg font-medium">{plan.name[language]}</CardTitle>
                    <CardDescription>{plan.info[language]}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                    {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <CheckCircleIcon className="text-violet-500 w-4 h-4 shrink-0" />
                            <p className="text-sm">{feature.text[language]}</p>
                        </div>
                    ))}
                </CardContent>
                <CardFooter className="w-full mt-auto">
                    <a
                        href={plan.btn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ className: "w-full bg-violet-500 hover:bg-violet-500/80 text-white" })}
                    >
                        {plan.btn.text[language]}
                    </a>
                </CardFooter>
            </Card>
        </div>
    );
};

export default PricingCards;
