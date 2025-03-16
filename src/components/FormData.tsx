"use client";

import { formSteps } from "@/constants"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Inter } from "next/font/google";
import Help from "../assets/icons/help.svg"
import Modal from "./Modal";
import { FormField } from "@/types";

const interFont = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

const FormData = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [selectedField, setSelectedField] = useState<FormField | null>(null);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Aquí puedes manejar el envío final del formulario
    }

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

    // Manejar la apertura del modal de ayuda
    const handleOpenHelp = (field: FormField) => {
        setSelectedField(field);
        setOpen(true);
    }

    return (
        <div className={`${interFont.className}`}>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="flex flex-col gap-3">
                    {currentFields.map((field) => (
                        <div key={field.name} className="flex flex-col gap-3">
                            <label htmlFor={field.name} className="text-zinc-950 text-sm/6 font-medium">
                                {field.label}
                            </label>
                            <div className="flex items-center justify-between">
                                {field.type === "textarea" ? (
                                    <textarea
                                        {...register(field.name)}
                                        rows={4}
                                        className="relative px-3 py-1 rounded-lg w-11/12 text-sm/6 border border-gray-300 text-zinc-950 focus:outline-2 focus:outline-blue-500 resize-none"
                                        id={field.name}
                                        name={field.name}
                                    />

                                ) : (
                                    <input
                                        {...register(field.name)}
                                        type={field.type}
                                        className="relative px-3 py-1 rounded-lg w-11/12 text-sm/6 border border-gray-300 text-zinc-950 focus:outline-2 focus:outline-blue-500"
                                        id={field.name}
                                        name={field.name}
                                    />
                                )}
                                {field.help && (
                                    <button
                                        type="button"
                                        onClick={() => handleOpenHelp(field)}
                                        className="bg-zinc-950 h-6 w-6 flex items-center justify-center rounded-full cursor-pointer hover:bg-h1 transition-colors duration-300">
                                        <Help className="text-white h-4 w-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <Modal open={open} onClose={() => setOpen(false)}>
                    {selectedField && selectedField.help && (
                        <div className="text-zinc-950">
                            <p className="text-sm/6 font-medium my-2">
                                {selectedField.help.text1}
                            </p>
                            {selectedField.help.text2 && (
                                <p className="text-sm/6 font-normal my-2">
                                    {selectedField.help.text2}
                                </p>
                            )}
                        </div>
                    )}
                </Modal>
                <div className="flex justify-between mt-4">
                    {currentStep > 0 ? (
                        <button
                            type="button"
                            onClick={handlePrevious}
                            className="text-sm/6 font-semibold text-zinc-950 bg-white rounded-lg cursor-pointer px-3 py-1.5 border border-gray-300 hover:border-zinc-950 transition-all duration-300"
                        >
                            Anterior
                        </button>
                    ) : (
                        <div></div> // Espacio vacío para mantener el layout cuando no hay botón
                    )}
                    <button
                        type="button"
                        onClick={handleNext}
                        className="text-sm/6 font-semibold text-white bg-zinc-950 rounded-lg cursor-pointer px-3 py-1.5 border border-zinc-950"
                    >
                        {currentStep === formSteps.length - 1 ? 'Enviar' : 'Siguiente'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormData