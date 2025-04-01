export const formSteps = [
    {
        id: "1",
        fields: [
            {
                name: "nameLastname",
                label: "Nombre completo :",
                type: "text",
                max: "40",
                required: true
            },
            {
                name: "city",
                label: "Ciudad :",
                type: "text",
                max: "25",
                required: true
            },
            {
                name: "country",
                label: "País :",
                type: "text",
                max: "25",
                required: true
            },
            {
                name: "linkedin",
                label: "LinkedIn :",
                type: "text",
                help: {
                    text1: "Ingresa la URL de tu perfil de LinkedIn. Te recomiendo personalizarla para que sea más profesional.",
                    text2: "Ejemplo: https://www.linkedin.com/in/reidhoffman/",
                },
                max: "100",
                required: true
            },
            {
                name: "phone",
                label: "Número teléfonico :",
                type: "text",
                help: {
                    text1: "Ingresa tu número con el código de tu país.",
                    text2: "Ejemplo: +51 987 654 321",
                },
                max: "16",
                required: true
            },
            {
                name: "email",
                label: "Correo eléctronico :",
                type: "email",
                max: "35",
                required: true
            },

        ]
    },
    {
        id: "2",
        fields: [
            {
                name: "profileSummary",
                label: "Resumen sobre tu perfil :",
                type: "textarea",
                max: "330",
                help: {
                    text1: "Destaca logros medibles y concretos: Aumenté, Reduje, Implementé, Lideré, Optimizé…",
                    text2: "Ejemplo: Más de 15 años de experiencia como Desarrollador de Software. Lideré el desarrollo FrontEnd en Adevinta, logrando un 40% de mejora en la entrega de productos, un 25% en rendimiento web y una plataforma unificada. Como Divulgador, tengo el canal de programación más visto de Twitch en español.",
                },
                required: true
            }
        ]
    },
    {
        id: "3",
        fields: [
            {
                name: "experience1",
                label: "Nombre de la empresa :",
                type: "text",
                max: "25",
                required: true
            },
            {
                name: "role1",
                label: "Cargo :",
                type: "text",
                max: "25",
                required: true
            },
            {
                name: "experience1_city",
                label: "Ciudad de la empresa :",
                type: "text",
                max: "25",
                required: true
            },
            {
                name: "experience1_country",
                label: "País de la empresa :",
                type: "text",
                max: "25",
                required: true
            },
            {
                name: "experience1_start_date",
                label: "Fecha de Ingreso :",
                type: "date",
                max: "30",
                required: true
            },
            {
                name: "experience1_end_date",
                label: "Fecha de Salida :",
                type: "date",
                max: "30",
                required: true
            },
            {
                name: "experience1_activity1",
                label: "Descripción del Proyecto :",
                type: "textarea",
                help: {
                    text1: "Usa verbos de acción: Optimizar, Mejorar, Desarrollar, Implementar, Diseñar, Facilitar, Integrar…",
                    text2: "Ejemplo: Desarrollé una aplicación web para gestionar reservas en restaurantes, permitiendo a los clientes elegir horarios y mesas de forma rápida y sencilla. Esto ayudó a reducir tiempos de espera y mejorar la experiencia de los usuarios.",
                },
                max: "250",
                required: true
            },
            {
                name: "experience1_activity2",
                label: "Alcance del Proyecto :",
                type: "textarea",
                help: {
                    text1: "Define el impacto y la escalabilidad del proyecto. Explica cómo beneficia a la empresa, usuarios o clientes.",
                    text2: "Ejemplo: El sistema fue implementado en más de 50 restaurantes, facilitando la administración de reservas y reduciendo cancelaciones en un 30%. Además, permitió a los dueños tomar decisiones basadas en datos sobre la demanda de mesas.",
                },
                max: "250",
                required: true
            },
            {
                name: "experience1_activity3",
                label: "Mejoras Aplicadas :",
                type: "textarea",
                help: {
                    text1: "Detalla las mejoras implementadas y su efecto en el rendimiento, experiencia del usuario, costos o productividad.",
                    text2: "Ejemplo: Optimizamos la velocidad de carga de la plataforma en un 50%, mejorando la navegación en dispositivos móviles. También añadimos notificaciones automáticas para recordar a los clientes sus reservas y evitar cancelaciones de último minuto.",
                },
                max: "250",
                required: true
            },
            {
                name: "experience1_activity4",
                label: "Soluciones Innovadoras :",
                type: "textarea",
                help: {
                    text1: "Destaca estrategias o tecnologías innovadoras que aplicaste y cómo diferenciaron tu proyecto.",
                    text2: "Ejemplo: Integramos inteligencia artificial para sugerir horarios alternativos en caso de falta de disponibilidad, aumentando en un 20% la tasa de reservas exitosas. Además, implementamos un sistema de comentarios y calificaciones para mejorar la calidad del servicio.",
                },
                max: "250",
                required: false
            },
        ]
    },
    {
        id: "4",
        fields: [
            {
                name: "experience2",
                label: "Nombre de la empresa :",
                type: "text",
                max: "25",
                required: true
            },
            {
                name: "role2",
                label: "Cargo :",
                type: "text",
                max: "25",
                required: true
            },
            {
                name: "experience2_city",
                label: "Ciudad de la empresa :",
                type: "text",
                max: "25",
                required: true
            },
            {
                name: "experience2_country",
                label: "País de la empresa :",
                type: "text",
                max: "25",
                required: true
            },
            {
                name: "experience2_start_date",
                label: "Fecha de Ingreso :",
                type: "date",
                max: "30",
                required: true
            },
            {
                name: "experience2_end_date",
                label: "Fecha de Salida :",
                type: "date",
                max: "30",
                required: true
            },
            {
                name: "experience2_activity1",
                label: "Proyecto Realizado :",
                type: "textarea",
                help: {
                    text1: "Usa verbos de acción: Optimizar, Mejorar, Desarrollar, Implementar, Diseñar, Facilitar, Integrar…",
                    text2: "Ejemplo: Implementé una plataforma web para la gestión de inventarios en pequeños negocios, reduciendo el tiempo de registro de productos y mejorando el control de stock.",
                },
                max: "200",
                required: true
            },
            {
                name: "experience2_activity2",
                label: "Alcance del proyecto :",
                type: "textarea",
                help: {
                    text1: "Muestra números, ya que llaman mucho la atención de la persona que está leyendo.",
                    text2: "Ejemplo:  La solución fue adoptada por más de 15 negocios locales, mejorando la gestión de productos y reduciendo pérdidas por falta de control en un 40%.",
                },
                max: "200",
                required: true
            },
        ]
    },
    {
        id: "5",
        fields: [
            {
                name: "experience3",
                label: "Nombre de la empresa :",
                type: "text",
                max: "25",
                required: false
            },
            {
                name: "role3",
                label: "Cargo :",
                type: "text",
                max: "25",
                required: false
            },
            {
                name: "experience3_city",
                label: "Ciudad de la empresa :",
                type: "text",
                max: "25",
                required: false
            },
            {
                name: "experience3_country",
                label: "País de la empresa :",
                type: "text",
                max: "25",
                required: false
            },
            {
                name: "experience3_start_date",
                label: "Fecha de Ingreso :",
                type: "date",
                max: "30",
                required: false
            },
            {
                name: "experience3_end_date",
                label: "Fecha de Salida :",
                type: "date",
                max: "30",
                required: false
            },
            {
                name: "experience3_activity1",
                label: "Proyecto Realizado :",
                type: "textarea",
                help: {
                    text1: "Breve descripción de tus funciones.",
                    text2: "Ejemplo: Diseñé e implementé un sistema de reservas en línea para un gimnasio, facilitando la gestión de horarios y optimizando la experiencia de los usuarios.",
                },
                max: "170",
                required: false
            },
        ]
    },
    {
        id: "6",
        fields: [
            {
                name: "studycenter",
                label: "Centro de estudios :",
                type: "text",
                max: "40",
                required: true
            },
            {
                name: "specialty",
                label: "Área de estudio :",
                type: "text",
                max: "50",
                required: true
            },
            {
                name: "studycenter_city",
                label: "Ciudad de la institución :",
                type: "text",
                max: "25",
                required: true
            },
            {
                name: "studycenter_country",
                label: "País de la institución :",
                type: "text",
                max: "25",
                required: true
            },
            {
                name: "graduation_date",
                label: "Fecha de egreso :",
                type: "date",
                max: "30",
                required: true
            },
        ]
    },
    {
        id: "7",
        fields: [
            {
                name: "skill1",
                label: "Primera habilidad adicional :",
                type: "textarea",
                help: {
                    text1: "Menciona una habilidad adicional relacionada con tu especialidad (opcional).",
                    text2: "Ejemplo: Creación de contenido sobre programación en redes sociales."
                },
                max: "100",
                required: false
            },
            {
                name: "skill2",
                label: "Segunda habilidad adicional :",
                type: "textarea",
                help: {
                    text1: "Añade otra habilidad complementaria a tu perfil profesional (opcional).",
                    text2: "Ejemplo: Nivel intermedio de inglés en lectura, escritura y conversación."
                },
                max: "80",
                required: false
            },
        ]
    },
]