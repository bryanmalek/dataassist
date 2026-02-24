export type Language = 'es' | 'en';

export const translations = {
    es: {
        nav: {
            features: "Funcionalidades",
            featureItems: {
                darkWeb: { title: "Monitoreo Dark Web", tagline: "Detecta tus datos expuestos en la dark web." },
                alerts: { title: "Alertas en Tiempo Real", tagline: "Notificaciones por WhatsApp o email al instante." },
                identity: { title: "Protección de Identidad", tagline: "Protege correos, documentos y tarjetas." },
                score: { title: "Score de Seguridad", tagline: "Evalúa tus hábitos de ciberseguridad." },
            },
            pricing: "Precios",
            blog: "Blog",
            faq: "FAQ",
            getStarted: "Comenzar",
        },
        hero: {
            badge: "Protección Digital 24/7",
            title: "Protege tus datos en la",
            titleHighlight: "dark y deep web",
            subtitle: "DataAssist monitorea continuamente tus datos sensibles y te alerta de inmediato por WhatsApp o email cuando detecta una brecha. Sin revisiones manuales.",
            cta: "Comenzar Gratis",
        },
        companies: {
            title: "Respaldado por líderes en ciberseguridad mundial",
        },
        features: {
            badge: "Funcionalidades",
            title: "Protección total, sin esfuerzo",
            subtitle: "Todo lo que necesitas para mantener tus datos seguros en un mundo digital vulnerable.",
            cards: [
                { name: "Monitoreo Dark Web", description: "Escaneamos la dark y deep web continuamente para detectar tus datos expuestos antes de que sea tarde." },
                { name: "Alertas en Tiempo Real", description: "Recibe notificaciones instantáneas por WhatsApp o email con pasos accionables cuando se detecta una brecha." },
                { name: "Protección de Identidad", description: "Monitorea correos, números de tarjetas y documentos de identidad para prevenir fraudes y robo de identidad." },
                { name: "Score de Seguridad", description: "Evalúa tus hábitos digitales y obtén recomendaciones personalizadas para mejorar tu protección." },
            ],
            cta: "Saber más",
        },
        process: {
            badge: "Cómo Funciona",
            title: "Protección en 3 simples pasos",
            subtitle: "Sin complicaciones. Sin revisiones manuales. Solo protección continua las 24 horas.",
            steps: [
                { title: "Registra tus datos", description: "Ingresa los datos que quieres proteger: correos electrónicos, documentos de identidad y números de tarjetas." },
                { title: "Monitoreo continuo 24/7", description: "Nuestro sistema escanea la dark y deep web en tiempo real buscando cualquier exposición de tus datos." },
                { title: "Alerta y acción inmediata", description: "Te notificamos por WhatsApp o email con pasos claros y accionables para resolver el problema de inmediato." },
            ],
        },
        quiz: {
            badge: "Score de Seguridad",
            title: "¿Qué tan seguro estás en línea?",
            subtitle: "Responde 5 preguntas rápidas y obtén tu puntaje de seguridad digital de forma privada y confidencial.",
            start: "Iniciar Cuestionario",
            next: "Siguiente",
            prev: "Anterior",
            seeResult: "Ver Mi Puntaje",
            restart: "Reiniciar",
            question: "Pregunta",
            of: "de",
            yourScore: "Tu puntaje",
            ctaResult: "Protege tus datos con DataAssist",
            questions: [
                {
                    question: "¿Con qué frecuencia cambias tus contraseñas?",
                    options: ["Mensualmente", "Cada 3 meses", "Una vez al año", "Nunca"],
                    scores: [5, 3, 1, 0],
                },
                {
                    question: "¿Utilizas autenticación de dos factores (2FA)?",
                    options: ["Siempre en todas mis cuentas", "Solo en algunas cuentas", "Nunca"],
                    scores: [5, 2, 0],
                },
                {
                    question: "¿Usas la misma contraseña en múltiples sitios?",
                    options: ["Nunca, uso contraseñas únicas", "A veces", "Siempre"],
                    scores: [5, 2, 0],
                },
                {
                    question: "¿Usas redes WiFi públicas sin VPN?",
                    options: ["Nunca", "Ocasionalmente", "Con frecuencia"],
                    scores: [5, 2, 0],
                },
                {
                    question: "¿Revisas tus cuentas bancarias buscando actividad sospechosa?",
                    options: ["Semanalmente", "Mensualmente", "Rara vez", "Nunca"],
                    scores: [5, 3, 1, 0],
                },
            ],
            results: {
                low: {
                    label: "Alto Riesgo",
                    description: "Tus hábitos digitales te exponen a fraudes y robos de identidad. DataAssist puede monitorear lo que tú no puedes ver.",
                },
                medium: {
                    label: "Riesgo Moderado",
                    description: "Vas por buen camino pero hay áreas críticas que mejorar. DataAssist te protege en la dark web mientras mejoras tus hábitos.",
                },
                high: {
                    label: "Protección Sólida",
                    description: "Tienes buenos hábitos digitales. DataAssist complementa tu protección monitoreando la dark web 24/7 donde tú no puedes llegar.",
                },
            },
        },
        pricing: {
            badge: "Planes",
            title: "Elige el plan que necesitas",
            subtitle: "Protege tu identidad digital con monitoreo continuo de la dark y deep web.",
        },
        blog: {
            badge: "Blog & Recursos",
            title: "Mantente un paso adelante",
            subtitle: "Guías, noticias y mejores prácticas sobre ciberseguridad e higiene digital.",
            readMore: "Leer artículo",
            viewAll: "Ver todos los artículos",
            posts: [
                {
                    slug: "que-es-la-dark-web",
                    title: "¿Qué es la dark web y por qué deberías protegerte?",
                    description: "Una guía completa sobre la dark web, cómo funciona y cómo tus datos personales pueden terminar allí sin que lo sepas.",
                    category: "Guía",
                    image: "/assets/blog1.webp",
                },
                {
                    slug: "senales-datos-comprometidos",
                    title: "5 señales de que tus datos han sido comprometidos",
                    description: "Aprende a identificar los indicadores de que tu información personal fue filtrada y qué pasos tomar de inmediato.",
                    category: "Seguridad",
                    image: "/assets/blog2.webp",
                },
                {
                    slug: "guia-autenticacion-dos-factores",
                    title: "Guía completa de autenticación de dos factores (2FA)",
                    description: "Por qué el 2FA es tu segunda línea de defensa más importante y cómo activarlo en todas tus cuentas.",
                    category: "Tutorial",
                    image: "/assets/blog3.webp",
                },
            ],
        },
        reviews: {
            badge: "Testimonios",
            title: "Lo que dicen nuestros usuarios",
            subtitle: "Personas y empresas de toda América Latina ya protegen sus datos con DataAssist.",
        },
        faq: {
            badge: "FAQ",
            title: "Preguntas Frecuentes",
            subtitle: "Todo lo que necesitas saber sobre cómo DataAssist protege tu información.",
            items: [
                {
                    question: "¿Cómo se envían las alertas?",
                    answer: "Las alertas se envían por WhatsApp y/o email en tiempo real, tan pronto como nuestro sistema detecta que tus datos han sido comprometidos. Cada alerta incluye pasos específicos y accionables para resolver el problema de inmediato.",
                },
                {
                    question: "¿Qué datos se monitorean?",
                    answer: "Monitoreamos correos electrónicos, números de tarjetas de crédito y débito, documentos de identidad (cédula, pasaporte), números de teléfono y credenciales de acceso en la dark y deep web.",
                },
                {
                    question: "¿Mis datos están seguros con DataAssist?",
                    answer: "Absolutamente. Utilizamos encriptación de nivel bancario para proteger toda la información que nos confías. Nuestra infraestructura está alojada en AWS con cumplimiento estricto de normas internacionales de privacidad y seguridad.",
                },
                {
                    question: "¿Cuánto tiempo tarda en detectar una brecha?",
                    answer: "Nuestro sistema opera 24/7 y detecta brechas en tiempo real. Una vez identificada una exposición de datos, recibirás la alerta en minutos, no días ni semanas.",
                },
                {
                    question: "¿Funciona para empresas y bancos?",
                    answer: "Sí. Ofrecemos soluciones escalables para empresas, bancos y organizaciones que necesitan proteger tanto sus datos corporativos como los de sus clientes. Contáctanos para una solución personalizada.",
                },
                {
                    question: "¿Necesito hacer algo manualmente para estar protegido?",
                    answer: "No. Una vez que registras tus datos, DataAssist trabaja en segundo plano de forma continua y autónoma. Solo necesitas revisar las alertas que te enviamos cuando encontramos algo.",
                },
            ],
        },
        cta: {
            title: "Empieza a proteger tus datos hoy",
            subtitle: "Monitoreo continuo de la dark y deep web. Alertas inmediatas. Sin esfuerzo de tu parte.",
            btn: "Comenzar Gratis",
        },
        footer: {
            tagline: "Protección digital 24/7 para personas y empresas en todo el mundo.",
            product: "Producto",
            resources: "Recursos",
            company: "Empresa",
            links: {
                features: "Funcionalidades",
                pricing: "Precios",
                blog: "Blog",
                faq: "FAQ",
                privacy: "Política de Privacidad",
                terms: "Términos de Uso",
                contact: "Contacto",
                about: "Acerca de",
            },
            aws: "Infraestructura en AWS",
            copyright: "Todos los derechos reservados.",
        },
    },
    en: {
        nav: {
            features: "Features",
            featureItems: {
                darkWeb: { title: "Dark Web Monitoring", tagline: "Detect your exposed data on the dark web." },
                alerts: { title: "Real-Time Alerts", tagline: "Instant notifications via WhatsApp or email." },
                identity: { title: "Identity Protection", tagline: "Protect emails, documents and cards." },
                score: { title: "Security Score", tagline: "Evaluate your cybersecurity habits." },
            },
            pricing: "Pricing",
            blog: "Blog",
            faq: "FAQ",
            getStarted: "Get Started",
        },
        hero: {
            badge: "24/7 Digital Protection",
            title: "Protect your data on the",
            titleHighlight: "dark & deep web",
            subtitle: "DataAssist continuously monitors your sensitive data and immediately alerts you via WhatsApp or email when it detects a breach. No manual reviews needed.",
            cta: "Start for Free",
        },
        companies: {
            title: "Backed by world leaders in cybersecurity",
        },
        features: {
            badge: "Features",
            title: "Total protection, effortlessly",
            subtitle: "Everything you need to keep your data safe in a vulnerable digital world.",
            cards: [
                { name: "Dark Web Monitoring", description: "We continuously scan the dark and deep web to detect your exposed data before it's too late." },
                { name: "Real-Time Alerts", description: "Receive instant notifications via WhatsApp or email with actionable steps when a breach is detected." },
                { name: "Identity Protection", description: "Monitor emails, card numbers and identity documents to prevent fraud and identity theft." },
                { name: "Security Score", description: "Evaluate your digital habits and get personalized recommendations to improve your security posture." },
            ],
            cta: "Learn more",
        },
        process: {
            badge: "How It Works",
            title: "Protection in 3 simple steps",
            subtitle: "No hassle. No manual reviews. Just continuous protection around the clock.",
            steps: [
                { title: "Register your data", description: "Enter the data you want to protect: email addresses, identity documents and card numbers." },
                { title: "24/7 continuous monitoring", description: "Our system scans the dark and deep web in real time looking for any exposure of your data." },
                { title: "Immediate alert & action", description: "We notify you via WhatsApp or email with clear, actionable steps to resolve the issue right away." },
            ],
        },
        quiz: {
            badge: "Security Score",
            title: "How safe are you online?",
            subtitle: "Answer 5 quick questions and get your digital security score privately and confidentially.",
            start: "Start Quiz",
            next: "Next",
            prev: "Previous",
            seeResult: "See My Score",
            restart: "Restart",
            question: "Question",
            of: "of",
            yourScore: "Your score",
            ctaResult: "Protect your data with DataAssist",
            questions: [
                {
                    question: "How often do you change your passwords?",
                    options: ["Monthly", "Every 3 months", "Once a year", "Never"],
                    scores: [5, 3, 1, 0],
                },
                {
                    question: "Do you use two-factor authentication (2FA)?",
                    options: ["Always on all accounts", "Only on some accounts", "Never"],
                    scores: [5, 2, 0],
                },
                {
                    question: "Do you use the same password on multiple sites?",
                    options: ["Never, I use unique passwords", "Sometimes", "Always"],
                    scores: [5, 2, 0],
                },
                {
                    question: "Do you use public WiFi without a VPN?",
                    options: ["Never", "Occasionally", "Frequently"],
                    scores: [5, 2, 0],
                },
                {
                    question: "Do you check your bank accounts for suspicious activity?",
                    options: ["Weekly", "Monthly", "Rarely", "Never"],
                    scores: [5, 3, 1, 0],
                },
            ],
            results: {
                low: {
                    label: "High Risk",
                    description: "Your digital habits expose you to fraud and identity theft. DataAssist can monitor what you cannot see.",
                },
                medium: {
                    label: "Moderate Risk",
                    description: "You're on the right track but there are critical areas to improve. DataAssist protects you on the dark web while you improve your habits.",
                },
                high: {
                    label: "Strong Protection",
                    description: "You have good digital habits. DataAssist complements your protection by monitoring the dark web 24/7 where you cannot reach.",
                },
            },
        },
        pricing: {
            badge: "Pricing",
            title: "Choose the plan you need",
            subtitle: "Protect your digital identity with continuous dark and deep web monitoring.",
        },
        blog: {
            badge: "Blog & Resources",
            title: "Stay one step ahead",
            subtitle: "Guides, news and best practices on cybersecurity and digital hygiene.",
            readMore: "Read article",
            viewAll: "View all articles",
            posts: [
                {
                    slug: "what-is-the-dark-web",
                    title: "What is the dark web and why should you protect yourself?",
                    description: "A complete guide to the dark web, how it works and how your personal data can end up there without you knowing.",
                    category: "Guide",
                    image: "/assets/blog-01.jpg",
                },
                {
                    slug: "signs-data-compromised",
                    title: "5 signs your data has been compromised",
                    description: "Learn to identify the indicators that your personal information was leaked and what steps to take immediately.",
                    category: "Security",
                    image: "/assets/blog-02.jpg",
                },
                {
                    slug: "two-factor-authentication-guide",
                    title: "Complete guide to two-factor authentication (2FA)",
                    description: "Why 2FA is your second most important line of defense and how to enable it on all your accounts.",
                    category: "Tutorial",
                    image: "/assets/blog-03.jpg",
                },
            ],
        },
        reviews: {
            badge: "Testimonials",
            title: "What our users say",
            subtitle: "People and companies across Latin America already protect their data with DataAssist.",
        },
        faq: {
            badge: "FAQ",
            title: "Frequently Asked Questions",
            subtitle: "Everything you need to know about how DataAssist protects your information.",
            items: [
                {
                    question: "How are alerts sent?",
                    answer: "Alerts are sent via WhatsApp and/or email in real time, as soon as our system detects that your data has been compromised. Each alert includes specific, actionable steps to resolve the issue immediately.",
                },
                {
                    question: "What data is monitored?",
                    answer: "We monitor email addresses, credit and debit card numbers, identity documents (national ID, passport), phone numbers and access credentials on the dark and deep web.",
                },
                {
                    question: "Is my data safe with DataAssist?",
                    answer: "Absolutely. We use bank-level encryption to protect all the information you entrust to us. Our infrastructure is hosted on AWS with strict compliance to international privacy and security standards.",
                },
                {
                    question: "How long does it take to detect a breach?",
                    answer: "Our system operates 24/7 and detects breaches in real time. Once a data exposure is identified, you will receive the alert within minutes, not days or weeks.",
                },
                {
                    question: "Does it work for businesses and banks?",
                    answer: "Yes. We offer scalable solutions for businesses, banks and organizations that need to protect both their corporate data and their clients' data. Contact us for a custom solution.",
                },
                {
                    question: "Do I need to do anything manually to stay protected?",
                    answer: "No. Once you register your data, DataAssist works continuously and autonomously in the background. You only need to review the alerts we send you when we find something.",
                },
            ],
        },
        cta: {
            title: "Start protecting your data today",
            subtitle: "Continuous dark and deep web monitoring. Immediate alerts. No effort on your part.",
            btn: "Start for Free",
        },
        footer: {
            tagline: "24/7 digital protection for individuals and businesses worldwide.",
            product: "Product",
            resources: "Resources",
            company: "Company",
            links: {
                features: "Features",
                pricing: "Pricing",
                blog: "Blog",
                faq: "FAQ",
                privacy: "Privacy Policy",
                terms: "Terms of Use",
                contact: "Contact",
                about: "About Us",
            },
            aws: "Infrastructure on AWS",
            copyright: "All rights reserved.",
        },
    },
} as const;
