"use client";

import { AnimationContainer, MaxWidthWrapper, PricingCards, SecurityQuiz } from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/use-language";
import { COMPANIES, PROCESS } from "@/utils";
import { REVIEWS } from "@/utils/constants/misc";
import { translations } from "@/utils/constants/translations";
import { ArrowRightIcon, ShieldCheckIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">

            {/* Hero Section */}
            <MaxWidthWrapper id="home">
                <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
                    <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-violet-500/20"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                                <ShieldCheckIcon className="w-3.5 h-3.5 text-violet-400" />
                                {t.hero.badge}
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </span>
                        </button>

                        <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                            {t.hero.title}{" "}
                            <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-block">
                                {t.hero.titleHighlight}
                            </span>
                        </h1>

                        <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-2xl">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
                            <Button asChild size="lg">
                                <Link href="/#contact" className="flex items-center gap-2">
                                    {t.hero.cta}
                                    <ArrowRightIcon className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </AnimationContainer>
                    
                    {/* IMAGEN CENTRAL DE HOME 
                    <AnimationContainer delay={0.2} className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full">
                        <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
                        <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                            <BorderBeam size={250} duration={12} delay={9} />
                            <Image
                                src="/assets/dashboard-dark.svg"
                                alt="DataAssist Dashboard"
                                width={1200}
                                height={1200}
                                quality={100}
                                className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
                            />
                            <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                            <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
                        </div>
                    </AnimationContainer>
                    */}
                    
                </div>
            </MaxWidthWrapper>

            {/* Companies Section */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.4}>
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                                {t.companies.title}
                            </h2>
                            <div className="mt-8">
                                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                                    {COMPANIES.map((company) => (
                                        <li key={company.name}>
                                            <Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={80}
                                                height={80}
                                                quality={100}
                                                className="w-28 h-auto"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Features Section */}
            <MaxWidthWrapper className="pt-10" id="features">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col w-full items-center justify-center py-8">
                        <MagicBadge title={t.features.badge} />
                        <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            {t.features.title}
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
                            {t.features.subtitle}
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <BentoGrid className="py-8">
                        {CARDS.map((card, idx) => (
                            <BentoCard
                                key={idx}
                                {...card}
                                name={t.features.cards[idx]?.name ?? card.name}
                                description={t.features.cards[idx]?.description ?? card.description}
                                cta={t.features.cta}
                            />
                        ))}
                    </BentoGrid>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* How It Works Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title={t.process.badge} />
                        <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            {t.process.title}
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
                            {t.process.subtitle}
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
                    {PROCESS.map((step, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start justify-center w-full">
                                    <step.icon strokeWidth={1.5} className="w-10 h-10 text-violet-400" />
                                    <div className="flex flex-col relative items-start">
                                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base mt-6 font-medium text-foreground">
                                            {step.title[language]}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {step.description[language]}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>

            {/* Security Quiz Section */}
            <MaxWidthWrapper className="py-10" id="quiz">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title={t.quiz.badge} />
                        <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            {t.quiz.title}
                        </h2>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <div className="w-full max-w-2xl mx-auto rounded-2xl border border-border bg-foreground/[0.02] py-8">
                        <SecurityQuiz />
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Pricing Section */}
            <MaxWidthWrapper className="py-10" id="pricing">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title={t.pricing.badge} />
                        <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            {t.pricing.title}
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
                            {t.pricing.subtitle}
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <PricingCards />
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Blog Section */}
            <MaxWidthWrapper className="py-10" id="blog">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title={t.blog.badge} />
                        <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            {t.blog.title}
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
                            {t.blog.subtitle}
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                        {t.blog.posts.map((post, idx) => (
                            <MagicCard key={idx} className="p-0 md:p-0 group cursor-pointer">
                                <Card className="border-0 h-full flex flex-col">
                                    <CardContent className="p-4 lg:p-6 flex flex-col h-full">
                                        <div className="flex items-center justify-center h-40 lg:h-48 overflow-hidden rounded-lg bg-foreground/5 border border-border mb-4">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <span className="text-xs text-violet-400 font-medium mb-2">{post.category}</span>
                                        <CardTitle className="text-base font-semibold text-foreground/80 group-hover:text-foreground transition-all duration-300 mb-2 line-clamp-2">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm line-clamp-2 flex-1">
                                            {post.description}
                                        </CardDescription>
                                        <CardFooter className="px-0 pb-0 pt-4 mt-auto">
                                            <span className="text-xs text-violet-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                                                {t.blog.readMore}
                                                <ArrowRightIcon className="w-3 h-3" />
                                            </span>
                                        </CardFooter>
                                    </CardContent>
                                </Card>
                            </MagicCard>
                        ))}
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Reviews Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title={t.reviews.badge} />
                        <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            {t.reviews.title}
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
                            {t.reviews.subtitle}
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10">
                    {([REVIEWS.slice(0, 3), REVIEWS.slice(3, 6), REVIEWS.slice(6, 9)] as const).map((col, colIdx) => (
                        <div key={colIdx} className="flex flex-col items-start h-min gap-6">
                            {col.map((review, index) => (
                                <AnimationContainer delay={0.15 * index} key={index}>
                                    <MagicCard className="md:p-0">
                                        <Card className="flex flex-col w-full border-none h-min">
                                            <CardHeader className="space-y-0">
                                                <CardTitle className="text-base font-medium text-muted-foreground">
                                                    {review.name}
                                                </CardTitle>
                                                <CardDescription>
                                                    {review.username}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-4 pb-4">
                                                <p className="text-sm text-muted-foreground">
                                                    {review.review}
                                                </p>
                                            </CardContent>
                                            <CardFooter className="w-full space-x-1 mt-auto">
                                                {Array.from({ length: review.rating }, (_, i) => (
                                                    <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                                ))}
                                            </CardFooter>
                                        </Card>
                                    </MagicCard>
                                </AnimationContainer>
                            ))}
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>

            {/* FAQ Section */}
            <MaxWidthWrapper className="py-10" id="faq">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title={t.faq.badge} />
                        <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            {t.faq.title}
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
                            {t.faq.subtitle}
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <div className="max-w-2xl mx-auto w-full py-8">
                        <Accordion type="single" collapsible className="w-full">
                            {t.faq.items.map((item, idx) => (
                                <AccordionItem key={idx} value={`item-${idx}`}>
                                    <AccordionTrigger className="text-left text-sm font-medium">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* CTA Section */}
            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide" id="contact">
                <AnimationContainer delay={0.1}>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                {t.cta.title}
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                {t.cta.subtitle}
                            </p>
                            <div className="mt-6">
                                <Button size="lg" asChild>
                                    <a href="https://web.whatsapp.com/send?phone=50767971870" target="_blank" rel="noopener noreferrer">
                                        {t.cta.btn}
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>

        </div>
    );
};

export default HomePage;
