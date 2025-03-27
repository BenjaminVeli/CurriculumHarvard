"use client";

import { Inter } from "next/font/google";
import Help from "../assets/icons/help.svg"
import Modal from "./Modal";
import { useFormData } from "@/hooks/useFormData";
import { useFormDataContext } from "./FormProvider";
import React from "react";
import PDFGenerator from "./PdfGenerator";

const interFont = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

const FormData = () => {
    const { setAllValues } = useFormDataContext();
    const { register, handleSubmit, watch, open, setOpen, charCounts, currentFields, currentStep, selectedField, formSteps, errors, showPDFGenerator,
        handleFinalStep, handlePrevious, handleInputChange, handleOpenHelp, onSubmit } = useFormData();

    React.useEffect(() => {
        // This will only update the context when form values actually change
        const subscription = watch((value) => {
            setAllValues(value);
        });

        // Clean up subscription
        return () => subscription.unsubscribe();
    }, [watch, setAllValues]);

    return (
        <div className={`${interFont.className} overflow-y-auto h-[600px]`}>
            {!showPDFGenerator ? (
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="flex flex-col gap-3 px-1">
                        {currentFields.map((field) => {
                            const maxLength = parseInt(field.max || "0");
                            const currentCount = charCounts[field.name] || 0;
                            const isAtLimit = maxLength > 0 && currentCount >= maxLength;
                            const fieldError = errors[field.name];

                            return (
                                <div key={field.name} className="flex flex-col gap-3">
                                    <label htmlFor={field.name} className="text-zinc-950 text-sm/6 font-medium">
                                        {field.label}
                                    </label>
                                    <div className="flex items-center justify-between">
                                        {field.type === "textarea" ? (
                                            <textarea
                                                {...register(field.name, {
                                                    // required: field.required,
                                                    maxLength: maxLength,
                                                    onChange: (e) => handleInputChange({ e, fieldName: field.name })
                                                })}
                                                rows={4}
                                                className="relative px-3 py-1 rounded-lg w-10/12 md:w-11/12 text-sm/6 border border-gray-300 text-zinc-950 focus:outline-2 focus:outline-blue-500 resize-none"
                                                id={field.name}
                                                maxLength={maxLength}
                                            />
                                        ) : field.type === "date" ? (
                                            <input
                                                {...register(field.name, {
                                                    // required: field.required,
                                                    maxLength: maxLength,
                                                    onChange: (e) => handleInputChange({ e, fieldName: field.name })
                                                })}
                                                className="relative px-3 py-1 rounded-lg w-10/12 md:w-11/12 text-sm/6 border border-gray-300 text-zinc-950 focus:outline-2 focus:outline-blue-500"
                                                id={field.name}
                                                type={field.type}
                                                maxLength={maxLength}
                                            >
                                            </input>

                                        ) : (
                                            <input
                                                {...register(field.name, {
                                                    // required: field.required,
                                                    maxLength: maxLength,
                                                    onChange: (e) => handleInputChange({ e, fieldName: field.name })
                                                })}
                                                className="relative px-3 py-1 rounded-lg w-10/12 md:w-11/12 text-sm/6 border border-gray-300 text-zinc-950 focus:outline-2 focus:outline-blue-500"
                                                id={field.name}
                                                type={field.type}
                                                maxLength={maxLength}

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
                                    {fieldError && (
                                        <p className="text-sm/6 font-normal text-red-500">
                                            Este campo es obligatorio
                                        </p>
                                    )}
                                    {maxLength > 0 && isAtLimit && (
                                        <p className="text-sm/6 font-normal text-red-500">
                                            {`Has alcanzado el límite de ${maxLength} caracteres`}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
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
                    <div className="flex justify-between mt-4 px-1">
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
                            onClick={handleFinalStep}
                            className="text-sm/6 font-semibold text-white bg-zinc-950 rounded-lg cursor-pointer px-3 py-1.5 border border-zinc-950"
                        >
                            {currentStep === formSteps.length - 1 ? 'Generar Currículum' : 'Siguiente'}
                        </button>
                    </div>
                </form>
            ) : (
                <PDFGenerator />
            )}
        </div>
    )
}

export default FormData