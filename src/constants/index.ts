export const formSteps = [
    {
        id: "1",
        fields: [
            {
                name: "nameLastname",
                label: "Nombre completo :",
                type: "text",
                max: "40",
            },
            {
                name: "city",
                label: "Ciudad :",
                type: "text",
                max: "25",
            },
            {
                name: "country",
                label: "País :",
                type: "text",
                max: "25",
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
            },
            {
                name: "phone",
                label: "Número teléfonico :",
                type: "text",
                help: {
                    text1: "Ingresa tu número con código de país.",
                    text2: "Ejemplo: +51 987 654 321",
                },
                max: "16",
            },
            {
                name: "email",
                label: "Correo eléctronico :",
                type: "email",
                max: "35",
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
                max: "50",
            },
            {
                name: "role1",
                label: "Cargo :",
                type: "text",
                max: "",
            },
            {
                name: "experience1_city",
                label: "Ciudad de la empresa :",
                type: "text",
                max: "",
            },
            {
                name: "experience1_country",
                label: "País de la empresa :",
                type: "text",
                max: "",
            },
            {
                name: "experience1_activity1",
                label: "Question1 :",
                type: "text",
                max: "",
            },
            {
                name: "experience1_activity2",
                label: "Question2 :",
                type: "text",
                max: "",
            },
            {
                name: "experience1_activity3",
                label: "Question3 :",
                type: "text",
                max: "",
            },
            {
                name: "experience1_activity4",
                label: "Question4 :",
                type: "text",
                max: "",
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
                max: "",
            },
            {
                name: "role2",
                label: "Cargo :",
                type: "text",
                max: "",
            },
            {
                name: "experience2_city",
                label: "Ciudad de la empresa :",
                type: "text",
                max: "",
            },
            {
                name: "experience2_country",
                label: "País de la empresa :",
                type: "text",
                max: "",
            },
            {
                name: "experience2_activity1",
                label: "Question1 :",
                type: "text",
                max: "",
            },
            {
                name: "experience2_activity2",
                label: "Question2 :",
                type: "text",
                max: "",
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
                max: "",
            },
            {
                name: "role3",
                label: "Cargo :",
                type: "text",
                max: "",
            },
            {
                name: "experience3_city",
                label: "Ciudad de la empresa :",
                type: "text",
                max: "",
            },
            {
                name: "experience3_country",
                label: "País de la empresa :",
                type: "text",
                max: "",
            },
            {
                name: "experience3_activity1",
                label: "Question1 :",
                type: "text",
                max: "",
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
                max: "",
            },
            {
                name: "specialty",
                label: "Área de estudio :",
                type: "text",
                max: "",
            },
            {
                name: "studycenter_city",
                label: "Ciudad de la institución :",
                type: "text",
                max: "",
            },
            {
                name: "studycenter_country",
                label: "País de la institución :",
                type: "text",
                max: "",
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
            },
        ]
    },
]