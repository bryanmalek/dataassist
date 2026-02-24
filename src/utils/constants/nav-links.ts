import { BarChart3Icon, BellIcon, LockIcon, NewspaperIcon, ShieldIcon } from "lucide-react";

// Nav links use English keys; Navbar reads translated titles via useLanguage()
export const NAV_LINKS = [
    {
        titleKey: "features" as const,
        href: "/#features",
        menu: [
            {
                titleKey: "darkWeb" as const,
                href: "/#features",
                icon: ShieldIcon,
            },
            {
                titleKey: "alerts" as const,
                href: "/#features",
                icon: BellIcon,
            },
            {
                titleKey: "identity" as const,
                href: "/#features",
                icon: LockIcon,
            },
            {
                titleKey: "score" as const,
                href: "/#quiz",
                icon: BarChart3Icon,
            },
        ],
    },
    {
        titleKey: "pricing" as const,
        href: "/#pricing",
    },
    {
        titleKey: "blog" as const,
        href: "/#blog",
        menu: [
            {
                titleKey: "blog" as const,
                href: "/#blog",
                icon: NewspaperIcon,
            },
        ],
    },
    {
        titleKey: "faq" as const,
        href: "/#faq",
    },
];
