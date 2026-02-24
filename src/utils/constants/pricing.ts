type LangString = { es: string; en: string };

export const PLANS = [
    {
        name: "Personal",
        info: { es: "Para individuos y familias", en: "For individuals and families" } as LangString,
        price: {
            monthly: 0,
            yearly: 0,
        },
        features: [
            { text: { es: "Monitorea 1 correo electrónico", en: "Monitor 1 email address" } as LangString },
            { text: { es: "Escaneo dark web básico", en: "Basic dark web scan" } as LangString },
            { text: { es: "Alertas por email", en: "Email alerts" } as LangString },
            { text: { es: "Score de seguridad", en: "Security score quiz" } as LangString },
        ],
        btn: {
            text: { es: "Comenzar Gratis", en: "Start for Free" } as LangString,
            href: "/#contact",
            variant: "default",
        },
        featured: false,
    },
    {
        name: "Pro",
        info: { es: "Para usuarios con mayor exposición", en: "For users with greater exposure" } as LangString,
        price: {
            monthly: 9.99,
            yearly: Math.round(9.99 * 12 * 0.85),
        },
        features: [
            { text: { es: "Monitorea 5 correos + 2 documentos", en: "Monitor 5 emails + 2 documents" } as LangString },
            { text: { es: "Monitoreo continuo 24/7", en: "24/7 continuous monitoring" } as LangString },
            { text: { es: "Alertas por WhatsApp y email", en: "WhatsApp and email alerts" } as LangString, tooltip: { es: "Notificaciones instantáneas", en: "Instant notifications" } as LangString },
            { text: { es: "Reportes mensuales", en: "Monthly reports" } as LangString },
            { text: { es: "Soporte prioritario", en: "Priority support" } as LangString },
        ],
        btn: {
            text: { es: "Obtener Protección", en: "Get Protection" } as LangString,
            href: "/#contact",
            variant: "purple",
        },
        featured: true,
    },
    {
        name: "Business",
        info: { es: "Para bancos y organizaciones", en: "For banks and organizations" } as LangString,
        price: {
            monthly: 49,
            yearly: Math.round(49 * 12 * 0.85),
        },
        features: [
            { text: { es: "Monitoreo ilimitado", en: "Unlimited monitoring" } as LangString },
            { text: { es: "API de integración", en: "Integration API" } as LangString },
            { text: { es: "Opción white-label", en: "White-label option" } as LangString },
            { text: { es: "Gerente dedicado", en: "Dedicated manager" } as LangString },
            { text: { es: "Integraciones personalizadas", en: "Custom integrations" } as LangString },
            { text: { es: "SLA garantizado", en: "Guaranteed SLA" } as LangString },
        ],
        btn: {
            text: { es: "Contactar Equipo", en: "Contact Team" } as LangString,
            href: "/#contact",
            variant: "default",
        },
        featured: false,
    },
];
