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
                    text1: "Ingresa la URL de tu perfil de LinkedIn.",
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
                max: "300",
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
                type: "text",
                help: {
                    text1: "Usa verbos de acción: Optimizar, Mejorar, Desarrollar, Implementar, Diseñar, Facilitar, Integrar…",
                    text2: "Ejemplo: Desarrollé una plataforma unificada de componentes y herramientas para los diferentes productos de la empresa para converger técnicamente y acelerar la entrega de producto.",
                },
                max: "175",
                required: true
            },
            {
                name: "experience1_activity2",
                label: "Alcance del Proyecto :",
                type: "text",
                help: {
                    text1: "Define el impacto y la escalabilidad del proyecto.",
                    text2: "Ejemplo: Implementé prácticas de CI/CD para mejorar la eficiencia en la entrega de software, reduciendo errores y tiempos de despliegue en más de un 80%.",
                },
                max: "175",
                required: true
            },
            {
                name: "experience1_activity3",
                label: "Mejoras Aplicadas :",
                type: "text",
                help: {
                    text1: "Explica qué mejoras implementaste y su efecto.",
                    text2: "Ejemplo: Lideré la mejora del rendimiento web de productos como Fotocasa e InfoJobs mentorizando con mejores prácticas, creando dashboards de DataDog y diseñando estrategias.",
                },
                max: "175",
                required: true
            },
            {
                name: "experience1_activity4",
                label: "Soluciones Innovadoras :",
                type: "text",
                help: {
                    text1: "Menciona estrategias o tecnologías innovadoras que aplicaste.",
                    text2: "Ejemplo: Aporté soluciones pioneras como usar Ship/Show/Ask como estrategia de trabajo en GitHub, Rust para acelerar compilaciones, paralelización de CI para optimizar tiempos y exploración de AWS para escalabilidad.",
                },
                max: "270",
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
                type: "text",
                help: {
                    text1: "Usa verbos de acción: Optimizar, Mejorar, Desarrollar, Implementar, Diseñar, Facilitar, Integrar…",
                    text2: "Ejemplo: Desarrollé y diseñé un sistema de gestión de alquileres en Java, optimizando la administración de cuartos, consumo de luz y agua.",
                },
                max: "130",
                required: true
            },
            {
                name: "experience2_activity2",
                label: "Alcance del proyecto :",
                type: "text",
                help: {
                    text1: "Muestra números, ya que llaman mucho la atención de la persona que está leyendo.",
                    text2: "Ejemplo: El proyecto fue implementado para 5 usuarios, permitiéndoles gestionar de manera eciente el uso de los recursos.",
                },
                max: "130",
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
                type: "text",
                help: {
                    text1: "Breve descripción de tus funciones.",
                    text2: "Ejemplo: Desarrollé y diseñé una landing page para ofrecer servicios de creación de páginas web.",
                },
                max: "100",
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
                required: true
            },
            {
                name: "skill2",
                label: "Segunda habilidad adicional :",
                type: "textarea",
                help: {
                    text1: "Añade otra habilidad complementaria a tu perfil profesional (opcional).",
                    text2: "Ejemplo: Nivel intermedio de inglés en lectura, escritura y conversación."
                },
                max: "50",
                required: false
            },
        ]
    },
]