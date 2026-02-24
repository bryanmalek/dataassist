import { DatabaseIcon, SearchIcon, ZapIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Asana",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Tidal",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Innovaccer",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Linear",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Raycast",
        logo: "/assets/company-05.svg",
    },
    {
        name: "Labelbox",
        logo: "/assets/company-06.svg",
    },
] as const;

export const PROCESS = [
    {
        title: { es: "Registra tus datos", en: "Register your data" },
        description: {
            es: "Ingresa los datos que quieres proteger: correos electrónicos, documentos de identidad y números de tarjetas.",
            en: "Enter the data you want to protect: email addresses, identity documents and card numbers.",
        },
        icon: DatabaseIcon,
    },
    {
        title: { es: "Monitoreo continuo 24/7", en: "24/7 Continuous Monitoring" },
        description: {
            es: "Nuestro sistema escanea la dark y deep web en tiempo real buscando cualquier exposición de tus datos.",
            en: "Our system scans the dark and deep web in real time looking for any exposure of your data.",
        },
        icon: SearchIcon,
    },
    {
        title: { es: "Alerta y acción inmediata", en: "Immediate Alert & Action" },
        description: {
            es: "Te notificamos por WhatsApp o email con pasos claros y accionables para resolver el problema.",
            en: "We notify you via WhatsApp or email with clear, actionable steps to resolve the issue.",
        },
        icon: ZapIcon,
    },
] as const;

export const REVIEWS = [
    {
        name: "Carlos Mendoza",
        username: "@carlosmendoza",
        rating: 5,
        review: "DataAssist me alertó que mi correo estaba en una filtración antes de que yo lo supiera. Pude cambiar mis contraseñas a tiempo y evitar un fraude. Increíble herramienta.",
    },
    {
        name: "Laura Vásquez",
        username: "@lauravasquez",
        rating: 5,
        review: "Como directora de TI en un banco, DataAssist nos da tranquilidad total. Protegemos los datos de nuestros clientes de forma proactiva y cumplimos con todas las normativas.",
    },
    {
        name: "Roberto Arias",
        username: "@robertoarias",
        rating: 4,
        review: "Recibí una alerta por WhatsApp en cuestión de minutos. Los pasos que me dieron para resolver el problema fueron claros y fáciles de seguir. Muy recomendado.",
    },
    {
        name: "María González",
        username: "@mariagonzalez",
        rating: 5,
        review: "Pensé que era solo para empresas grandes, pero el plan personal es perfecto para mí. Por fin tengo protección real sin tener que revisar nada manualmente.",
    },
    {
        name: "Andrés Pérez",
        username: "@andresperez",
        rating: 5,
        review: "Mi tarjeta de crédito apareció en la dark web y DataAssist me lo avisó de inmediato. Bloqueé la tarjeta antes de que realizaran cualquier compra fraudulenta.",
    },
    {
        name: "Sofía Ramírez",
        username: "@sofiaramirez",
        rating: 4,
        review: "El cuestionario de seguridad me abrió los ojos. No sabía lo vulnerable que era. Ahora tengo DataAssist monitoreando mis datos y me siento mucho más segura.",
    },
    {
        name: "Daniel Castro",
        username: "@danielcastro",
        rating: 5,
        review: "Nuestra empresa maneja datos sensibles de miles de clientes. DataAssist nos permite cumplir con las normativas de seguridad y dormir tranquilos por las noches.",
    },
    {
        name: "Patricia Morales",
        username: "@patriciamorales",
        rating: 5,
        review: "La mejor inversión en ciberseguridad que he hecho. Simple, efectivo y las alertas llegan exactamente cuando las necesitas. 100% recomendado.",
    },
    {
        name: "Fernando Jiménez",
        username: "@fernandojimenez",
        rating: 4,
        review: "Integrar DataAssist a nuestra plataforma bancaria fue sencillo. Nuestros clientes ahora tienen una capa extra de protección que nos diferencia de la competencia.",
    },
] as const;
