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