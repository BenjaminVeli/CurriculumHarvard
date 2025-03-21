import { ReactNode } from "react";

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

export interface FormField {
    name: string;
    label: string;
    type: string;
    help?: HelpText;
}

export interface HelpText {
    text1: string;
    text2?: string;
}

export interface InputCharCount {
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
    fieldName: string;
}

export interface FormContextType {
    // 1er String -> representa la key del objeto ejmpl: phone
    // 2do String -> representa el valor del objeto ejmpl: 987654321
    allValues: Record<string, string | null>;
    setAllValues: React.Dispatch<React.SetStateAction<Record<string, string | null>>>;
}