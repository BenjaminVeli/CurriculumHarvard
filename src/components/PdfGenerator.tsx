"use client"

import React from 'react';
import jsPDF from 'jspdf';
import Pdf from "../assets/icons/pdf.svg"

import { useFormDataContext } from "./FormProvider";

const PDFGenerator = () => {

    const { allValues } = useFormDataContext();

    const generatePDF = () => {
        // Crea un nuevo documento PDF
        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
        });

        const pageWidth = doc.internal.pageSize.getWidth();

        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text(allValues.nameLastname || '_____________________', pageWidth / 2, 20, {
            align: 'center'
        });

        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text((allValues.city || '___') + ', ' + (allValues.country || '___') + ' ·' + ' ' + (allValues.phone || '___') + ' ·' + ' ' + (allValues.email || '___'), pageWidth / 2, 27, {
            align: 'center'
        });

        doc.setFont('helvetica', 'bold');
        doc.text('Empresa Proveedora:', 20, 50);
        doc.setFont('helvetica', 'normal');
        doc.text('Soluciones Tecnológicas S.A.', 20, 57);

        doc.setFont('helvetica', 'bold');
        doc.text('Cliente:', 20, 70);
        doc.setFont('helvetica', 'normal');
        doc.text('[Nombre del Cliente]', 20, 77);

        // Cláusulas del contrato
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('1. Objeto del Contrato', 20, 100);

        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('El presente contrato tiene por objeto la prestación de', 20, 110);
        doc.text('servicios de consultoría tecnológica.', 20, 117);

        // Duración
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('2. Duración', 20, 140);

        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('El contrato tendrá una vigencia de 12 meses a partir', 20, 150);
        doc.text('de la fecha de firma.', 20, 157);

        // Condiciones Económicas
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('3. Condiciones Económicas', 20, 180);

        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('La tarifa mensual por servicios será de $5,000 más IVA.', 20, 190);

        // Firmas
        doc.text('Firma Representante Legal', 20, 250);
        doc.text('Fecha: ' + new Date().toLocaleDateString(), 20, 260);

        // Guardar PDF
        doc.save('CV.pdf');
    };

    return (
        <div className="flex flex-col items-center justify-start h-full">
            <div className="flex gap-2">
                <h2 className="text-base mb-4">Tu Currículum ha sido generado</h2>
                <Pdf className="h-6 w-6" />
            </div>
            <button
                onClick={generatePDF}
                className="text-sm/6 font-semibold px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 duration-300 transition-all cursor-pointer"
            >
                Descargar Currículum
            </button>
        </div>
    );
};

export default PDFGenerator;