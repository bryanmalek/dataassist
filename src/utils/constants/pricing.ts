type LangString = { es: string; en: string };

export const PLANS = [
    {
        name: { es: "Plan Estándar", en: "Standard Plan" } as LangString,
        info: { es: "Monitoreo completo de tus datos personales", en: "Complete monitoring of your personal data" } as LangString,
        features: [
            { text: { es: "Monitoreo 24/7", en: "24/7 monitoring" } as LangString },
            { text: { es: "1 correo electrónico", en: "1 email address" } as LangString },
            { text: { es: "1 cédula o pasaporte", en: "1 ID or passport" } as LangString },
            { text: { es: "1 número de celular", en: "1 phone number" } as LangString },
            { text: { es: "1 tarjeta de crédito", en: "1 credit card" } as LangString },
        ],
        btn: {
            text: { es: "Cotizar", en: "Get a Quote" } as LangString,
            href: "https://web.whatsapp.com/send?phone=50767971870",
        },
    },
];
