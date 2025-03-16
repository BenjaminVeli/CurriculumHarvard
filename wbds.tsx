import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const CurriculumPDF = () => {
  const curriculumRef = useRef(null);

  // Función para generar el PDF
  const generatePDF = async () => {
    if (!curriculumRef.current) return;
    
    // Muestra un mensaje de carga
    const loadingElement = document.createElement('div');
    loadingElement.innerHTML = 'Generando PDF...';
    loadingElement.style.position = 'fixed';
    loadingElement.style.top = '50%';
    loadingElement.style.left = '50%';
    loadingElement.style.transform = 'translate(-50%, -50%)';
    loadingElement.style.padding = '20px';
    loadingElement.style.background = 'rgba(0,0,0,0.7)';
    loadingElement.style.color = 'white';
    loadingElement.style.borderRadius = '8px';
    loadingElement.style.zIndex = '9999';
    document.body.appendChild(loadingElement);
    
    try {
      // Captura el elemento como canvas
      const canvas = await html2canvas(curriculumRef.current, {
        scale: 2, // Mayor escala para mejor calidad
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      // Crea un nuevo documento PDF (A4)
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Obtiene la relación de aspecto para mantener las proporciones
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Añade la imagen al PDF
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      
      // Si el contenido es más largo que una página, añade páginas adicionales
      let heightLeft = imgHeight;
      let position = 0;
      
      while (heightLeft > pageHeight) {
        position = heightLeft - pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, -position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      // Descarga el PDF
      pdf.save('Curriculum_Benjamin_Veli.pdf');
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      alert('Hubo un error al generar el PDF. Por favor, inténtalo de nuevo.');
    } finally {
      // Elimina el mensaje de carga
      document.body.removeChild(loadingElement);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Barra superior con botón de generar PDF */}
      <header className="sticky top-0 z-10 bg-white shadow-md p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Curriculum Harvard</h1>
          <button 
            onClick={generatePDF}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Generar PDF
          </button>
        </div>
      </header>

      {/* Contenedor principal */}
      <main className="flex-grow p-4 md:p-6 flex justify-center">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Curriculum que se convertirá en PDF */}
          <div 
            ref={curriculumRef} 
            className="p-6 md:p-8 bg-white"
            style={{ 
              maxWidth: "210mm",
              margin: "0 auto"
            }}
          >
            {/* Encabezado del Curriculum */}
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Curriculum Harvard</h1>
            </div>

            {/* Información personal */}
            <div className="mb-6 text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Benjamin Veli Mariano</h2>
              <p className="text-gray-600">Lima, Santa Anita</p>
              <div className="flex justify-center gap-4 mt-2 text-sm flex-wrap">
                <a href="https://linkedin.com/in/benjamin/" className="text-blue-600 hover:underline">linkedin.com/in/benjamin/</a>
                <span className="text-gray-600">+51 959 128 835</span>
                <a href="mailto:velibenjamin222@gmail.com" className="text-blue-600 hover:underline">velibenjamin222@gmail.com</a>
              </div>
            </div>

            {/* Resumen profesional */}
            <div className="mb-6 text-sm text-gray-700 italic">
              <p>Más de 2 años de experiencia como Desarrollador de Software. Lideré el desarrollo de Exploratore, implementando un recorrido virtual en 360° que facilitó las visitas presenciales al campus de Tecsup, ayudando a un 30% de los nuevos estudiantes a orientarse y explorar el campus de manera eficiente.</p>
            </div>

            {/* Experiencia Profesional */}
            <section className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-4">EXPERIENCIA PROFESIONAL</h3>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <div>
                    <h4 className="font-semibold">Tecsup</h4>
                    <p className="text-sm text-gray-600">Full Stack</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Lima Perú</p>
                    <p className="text-sm text-gray-600">Marzo 2024-Diciembre 2024</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-sm">
                  <li>Diseñé y desarrollé una plataforma web de recorrido virtual para el campus de la sede Lima de Tecsup, permitiendo a futuros estudiantes conocer el campus de manera remota.</li>
                </ul>
              </div>
            </section>

            {/* Educación */}
            <section className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-4">EDUCACIÓN</h3>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <div>
                    <h4 className="font-semibold">INSTITUTO DE EDUCACIÓN PRIVADO TECSUP</h4>
                    <p className="text-sm text-gray-600">Diseñador y Desarrollador de Software</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Lima Perú</p>
                    <p className="text-sm text-gray-600">Diciembre 2024</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Habilidades */}
            <section>
              <h3 className="text-lg font-bold text-gray-800 border-b-2 border-gray-300 pb-1 mb-4">SKILLS ADICIONALES</h3>
              {/* Contenido de skills */}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CurriculumPDF;