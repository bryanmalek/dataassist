"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/utils";
import { translations } from "@/utils/constants/translations";
import { ArrowRightIcon, RefreshCwIcon, ShieldAlertIcon, ShieldCheckIcon, ShieldIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type QuizState = "idle" | "active" | "result";

const SecurityQuiz = () => {
    const { language } = useLanguage();
    const t = translations[language].quiz;

    const [state, setState] = useState<QuizState>("idle");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const questions = t.questions;
    const totalQuestions = questions.length;

    const calculateScore = (answers: number[]) => {
        return answers.reduce((acc, optionIdx, qIdx) => {
            return acc + (questions[qIdx].scores[optionIdx] ?? 0);
        }, 0);
    };

    const maxScore = questions.reduce((acc, q) => acc + Math.max(...q.scores), 0);

    const getResult = (score: number) => {
        const pct = score / maxScore;
        if (pct < 0.45) return { ...t.results.low, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20", Icon: ShieldAlertIcon };
        if (pct < 0.75) return { ...t.results.medium, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20", Icon: ShieldIcon };
        return { ...t.results.high, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20", Icon: ShieldCheckIcon };
    };

    const handleOptionSelect = (idx: number) => {
        setSelectedOption(idx);
    };

    const handleNext = () => {
        if (selectedOption === null) return;
        const newAnswers = [...selectedAnswers, selectedOption];
        setSelectedAnswers(newAnswers);
        setSelectedOption(null);

        if (currentQuestion + 1 < totalQuestions) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setState("result");
        }
    };

    const handlePrev = () => {
        if (currentQuestion === 0) return;
        const newAnswers = selectedAnswers.slice(0, -1);
        setSelectedAnswers(newAnswers);
        setSelectedOption(null);
        setCurrentQuestion(currentQuestion - 1);
    };

    const handleRestart = () => {
        setState("idle");
        setCurrentQuestion(0);
        setSelectedAnswers([]);
        setSelectedOption(null);
    };

    const score = state === "result" ? calculateScore(selectedAnswers) : 0;
    const result = state === "result" ? getResult(score) : null;
    const progress = ((currentQuestion) / totalQuestions) * 100;

    if (state === "idle") {
        return (
            <div className="flex flex-col items-center justify-center text-center py-10 px-4 max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-6">
                    <ShieldIcon className="w-8 h-8 text-violet-400" />
                </div>
                <p className="text-muted-foreground mb-8 max-w-md">
                    {t.subtitle}
                </p>
                <Button size="lg" onClick={() => setState("active")} className="gap-2">
                    {t.start}
                    <ArrowRightIcon className="w-4 h-4" />
                </Button>
            </div>
        );
    }

    if (state === "active") {
        const q = questions[currentQuestion];
        return (
            <div className="max-w-xl mx-auto w-full px-4">
                {/* Progress */}
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground">
                        {t.question} {currentQuestion + 1} {t.of} {totalQuestions}
                    </span>
                    <span className="text-xs text-muted-foreground">
                        {Math.round(progress)}%
                    </span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-1.5 mb-6">
                    <div
                        className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Question */}
                <h3 className="text-lg font-medium text-foreground mb-6">
                    {q.question}
                </h3>

                {/* Options */}
                <div className="space-y-3 mb-8">
                    {q.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleOptionSelect(idx)}
                            className={cn(
                                "w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200",
                                selectedOption === idx
                                    ? "border-violet-500 bg-violet-500/10 text-foreground"
                                    : "border-border bg-foreground/[0.02] text-muted-foreground hover:border-neutral-600 hover:text-foreground"
                            )}
                        >
                            <span className={cn(
                                "inline-flex items-center justify-center w-5 h-5 rounded-full border text-xs mr-3 transition-all",
                                selectedOption === idx
                                    ? "border-violet-500 bg-violet-500 text-white"
                                    : "border-neutral-600 text-neutral-500"
                            )}>
                                {String.fromCharCode(65 + idx)}
                            </span>
                            {option}
                        </button>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handlePrev}
                        disabled={currentQuestion === 0}
                    >
                        ← {t.prev}
                    </Button>
                    <Button
                        size="sm"
                        onClick={handleNext}
                        disabled={selectedOption === null}
                        className="gap-1"
                    >
                        {currentQuestion + 1 === totalQuestions ? t.seeResult : t.next}
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Button>
                </div>
            </div>
        );
    }

    if (state === "result" && result) {
        const pct = Math.round((score / maxScore) * 100);
        return (
            <div className="max-w-xl mx-auto w-full px-4 text-center">
                <div className={cn(
                    "rounded-2xl border p-8 mb-6",
                    result.bg
                )}>
                    <result.Icon className={cn("w-12 h-12 mx-auto mb-4", result.color)} />
                    <div className={cn("text-4xl font-bold mb-1", result.color)}>
                        {pct}
                        <span className="text-xl font-normal text-muted-foreground">/100</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">{t.yourScore}</div>
                    <h3 className={cn("text-xl font-semibold mt-4 mb-3", result.color)}>
                        {result.label}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        {result.description}
                    </p>

                    {/* Score bar */}
                    <div className="mt-6 w-full bg-neutral-800 rounded-full h-2">
                        <div
                            className={cn(
                                "h-2 rounded-full transition-all duration-700",
                                pct < 45 ? "bg-red-500" : pct < 75 ? "bg-yellow-500" : "bg-green-500"
                            )}
                            style={{ width: `${pct}%` }}
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium transition-colors">
                        {t.ctaResult}
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Button variant="outline" size="sm" onClick={handleRestart} className="gap-2">
                        <RefreshCwIcon className="w-3.5 h-3.5" />
                        {t.restart}
                    </Button>
                </div>
            </div>
        );
    }

    return null;
};

export default SecurityQuiz;
