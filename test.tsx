
"use client"

import React from 'react';
import jsPDF from 'jspdf';
import Pdf from "../assets/icons/pdf.svg"

import useModelCv from '@/hooks/useModelCv';

const PDFGenerator = () => {

    const { allValues, linkedinUrl, linkedinDisplay, formatDate } = useModelCv();

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



        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text((allValues.city || '___') + ', ' + (allValues.country || '___') + ' ·' + ' ' + (allValues.phone || '___') + ' ·' + ' ' + (allValues.email || '___'), pageWidth / 2, 27, {
            align: 'center'
        });

        doc.setTextColor(17, 85, 204);
        doc.textWithLink(linkedinDisplay, pageWidth / 2 + 40, 27, {
            url: linkedinUrl
        });

        doc.setTextColor(0, 0, 0);

        doc.setFont('helvetica', 'bold');
        doc.text('Empresa Proveedora:', 20, 50);
        doc.setFont('helvetica', 'normal');
        doc.text('Soluciones Tecnológicas S.A.', 20, 57);

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