import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils";
import { ArrowRightIcon, BarChart3Icon, BellIcon, LockIcon, ShieldIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const CARDS = [
    {
        Icon: ShieldIcon,
        name: "Dark Web Monitoring",
        description: "We continuously scan the dark and deep web to detect your exposed data before it's too late.",
        href: "/#features",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="absolute top-8 left-6 right-6 origin-top rounded-lg border border-border bg-black/60 p-3 font-mono text-xs transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105">
                <div className="text-neutral-500 mb-1">$ scanning darkweb...</div>
                <div className="text-red-400 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    BREACH: user@email.com
                </div>
                <div className="text-red-400 flex items-center gap-1 mt-0.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    BREACH: 4***1234
                </div>
                <div className="text-yellow-400 mt-0.5">! source: darkforum.onion</div>
                <div className="text-green-400 mt-1">✓ Alert dispatched</div>
            </div>
        ),
    },
    {
        Icon: BellIcon,
        name: "Real-Time Alerts",
        description: "Receive instant notifications via WhatsApp or email with actionable steps when a breach is detected.",
        href: "/#features",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="absolute right-10 top-8 w-56 origin-top-right transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:-translate-x-2 group-hover:-translate-y-1">
                <div className="rounded-2xl border border-neutral-700 bg-neutral-900 p-3 shadow-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center text-xs text-white font-bold">DA</div>
                        <div>
                            <div className="text-xs text-neutral-200 font-medium">DataAssist</div>
                            <div className="text-[10px] text-neutral-500">ahora mismo</div>
                        </div>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                        ⚠️ Brecha detectada. Tu correo fue encontrado en una filtración. Toca para ver los pasos.
                    </p>
                </div>
                <div className="mt-2 rounded-2xl border border-neutral-700 bg-neutral-900/60 p-3 shadow-xl opacity-70">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center text-xs text-white font-bold">W</div>
                        <div className="text-xs text-neutral-200 font-medium">WhatsApp</div>
                    </div>
                    <p className="text-xs text-neutral-400">DataAssist: Acción requerida — ve a dataassist.io</p>
                </div>
            </div>
        ),
    },
    {
        Icon: LockIcon,
        name: "Identity Protection",
        description: "Monitor emails, card numbers and identity documents to prevent fraud and identity theft.",
        href: "/#features",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="absolute right-4 top-6 grid grid-cols-2 gap-2 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
                {[
                    { label: "Email", color: "text-green-400", checked: true },
                    { label: "DNI/ID", color: "text-green-400", checked: true },
                    { label: "Tarjeta", color: "text-green-400", checked: true },
                    { label: "Teléfono", color: "text-green-400", checked: true },
                    { label: "Pasaporte", color: "text-yellow-400", checked: false },
                    { label: "Contraseña", color: "text-green-400", checked: true },
                ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-700 rounded-lg px-2 py-1.5">
                        <span className={cn("text-xs", item.color)}>{item.checked ? "✓" : "!"}</span>
                        <span className="text-xs text-neutral-300">{item.label}</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        Icon: BarChart3Icon,
        name: "Security Score",
        description: "Evaluate your digital habits and get personalized recommendations to improve your security posture.",
        className: "col-span-3 lg:col-span-1",
        href: "/#quiz",
        cta: "Take quiz",
        background: (
            <div className="absolute right-4 top-6 text-center transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 px-4">
                <div className="text-6xl font-bold text-violet-400">78</div>
                <div className="text-xs text-neutral-400 mt-0.5">/ 100</div>
                <div className="text-xs text-yellow-400 mt-2 font-medium">Riesgo Moderado</div>
                <div className="mt-3 w-full bg-neutral-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-violet-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
                <div className="mt-3 space-y-1 text-left">
                    <div className="text-[10px] text-neutral-500">▶ Activa 2FA en más cuentas</div>
                    <div className="text-[10px] text-neutral-500">▶ Cambia contraseñas antiguas</div>
                </div>
            </div>
        ),
    },
];

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
            "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            className,
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <Icon className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="text-xl font-semibold text-neutral-300">
                {name}
            </h3>
            <p className="max-w-lg text-neutral-400">{description}</p>
        </div>

        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Link href={href} className={buttonVariants({ size: "sm", variant: "ghost", className: "cursor-pointer" })}>
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
);

export { BentoCard, BentoGrid };
