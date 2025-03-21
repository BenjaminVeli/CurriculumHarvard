import { useState } from "react";
import { FormField, InputCharCount } from "@/types";
import { formSteps } from "@/constants";
import { useForm } from "react-hook-form"

export const useFormData = () => {

    const [open, setOpen] = useState(false);
    const [selectedField, setSelectedField] = useState<FormField | null>(null);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [charCounts, setCharCounts] = useState<Record<string, number>>({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Aquí puedes manejar el envío final del formulario
    }

    // Manejar la apertura del modal de ayuda
    const handleOpenHelp = (field: FormField) => {
        setSelectedField(field);
        setOpen(true);
    };

    // Obtener los campos del paso actual
    const currentFields = formSteps[currentStep]?.fields || [];

    // Manejar el botón siguiente
    const handleNext = () => {
        // Si hay más pasos, avanza
        if (currentStep < formSteps.length - 1) {
            setCurrentStep(prevStep => prevStep + 1);
        } else {
            // Si es el último paso, envía el formulario
            handleSubmit(onSubmit)();
        }
    }

    // Manejar el botón anterior
    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(prevStep => prevStep - 1);
        }
    }

    // Manejar el cambio en los inputs para contar caracteres
    const handleInputChange = ({ e, fieldName }: InputCharCount) => {
        const value = e.target.value;
        setCharCounts(prev => ({
            ...prev,
            [fieldName]: value.length
        }));
    };

    return {
        register,
        handleSubmit,
        watch,

        open,
        setOpen,
        charCounts,
        currentFields,
        currentStep,
        selectedField,
        formSteps,
        onSubmit,


        handleOpenHelp,
        handleNext,
        handlePrevious,
        handleInputChange
    }
}