"use client"
import { useState, ReactNode, useContext } from "react";
import React, { createContext } from 'react';
import { FormContextType } from "@/types";

// se establece null para el valor inicial del contexto
export const FormDataContext = createContext<FormContextType | null>(null);


export const FormDataProvider = ({ children }: { children: ReactNode }) => {
    const [allValues, setAllValues] = useState<Record<string, string | null>>({});

    return (
        <FormDataContext.Provider value={{ allValues, setAllValues }}>
            {children}
        </FormDataContext.Provider>
    )
}

export default FormDataProvider

export const useFormDataContext = () => {
    const context = useContext(FormDataContext);
    if (!context) {
        throw new Error("useFormContext debe usarse dentro de un FormProvider");
    }
    return context;
};
