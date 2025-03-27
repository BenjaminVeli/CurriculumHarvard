import React, { useState } from "react";
import { FormField, InputCharCount } from "@/types";
import { formSteps } from "@/constants";
import { useForm } from "react-hook-form"

export const useFormData = () => {

    const [open, setOpen] = useState(false);
    const [selectedField, setSelectedField] = useState<FormField | null>(null);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [charCounts, setCharCounts] = useState<Record<string, number>>({});
    const { register, handleSubmit, watch, trigger, formState: { errors } } = useForm();
    const [showPDFGenerator, setShowPDFGenerator] = React.useState(false);

    const onSubmit = () => {
        // Aquí puedes manejar el envío final del formulario
    }

    // Manejar la apertura del modal de ayuda
    const handleOpenHelp = (field: FormField) => {
        setSelectedField(field);
        setOpen(true);
    };

    // Obtener los campos del paso actual
    const currentFields = formSteps[currentStep]?.fields || [];

    // Manejar el cambio en los inputs para contar caracteres
    const handleInputChange = ({ e, fieldName }: InputCharCount) => {
        const value = e.target.value;
        setCharCounts(prev => ({
            ...prev,
            [fieldName]: value.length
        }));
    };

    // Manejar el botón siguiente
    const handleNext = async () => {
        // Validación de los campos del paso actual
        const currentStepFields = currentFields.map(field => field.name);
        const isStepValid = await trigger(currentStepFields);

        // Si la validación pasa, avanza al siguiente paso
        if (isStepValid) {
            if (currentStep < formSteps.length - 1) {
                setCurrentStep(prevStep => prevStep + 1);
            } else {
                // Si es el último paso, envía el formulario
                handleSubmit(onSubmit)();
            }
        }
    }

    // Manejar el botón anterior
    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(prevStep => prevStep - 1);
        }
    }

    const handleFinalStep = () => {
        if (currentStep === formSteps.length - 1) {
            setShowPDFGenerator(true);
        } else {
            handleNext();
        }
    };

    return {
        register,
        handleSubmit,
        watch,
        errors,

        open,
        setOpen,
        charCounts,
        currentFields,
        currentStep,
        selectedField,
        formSteps,
        onSubmit,
        showPDFGenerator,

        handleOpenHelp,
        handleFinalStep,
        handlePrevious,
        handleInputChange
    }
}