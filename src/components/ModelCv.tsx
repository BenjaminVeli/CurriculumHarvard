"use client";

import { useFormDataContext } from "./FormProvider";

const ModelCv = () => {
    const { allValues } = useFormDataContext();

    const linkedinBaseUrl = "https://www.linkedin.com/in/";
    const linkedinCode = allValues.linkedin || ""; // Código ingresado por el usuario
    const linkedinUrl = linkedinCode.startsWith("http")
        ? linkedinCode // Si ya es una URL completa, úsala directamente
        : `${linkedinBaseUrl}${linkedinCode}`; // Construir la URL completa
        
    // Mostrar siempre "/in/" seguido del código ingresado
    const linkedinDisplay = linkedinCode.startsWith("http")
        ? `/in/${linkedinCode.replace(linkedinBaseUrl, "")}` // Extraer el código y agregar "/in/"
        : `/in/${linkedinCode}`; // Mostrar "/in/" seguido del código ingresado

    return (
        <div id="curriculum_vitae" className="md:col-span-2 col-span-full overflow-auto h-[800px]">
            <header className="">
                <p className="font-bold text-2xl text-center">{allValues.nameLastname || "_____________________"}</p>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 justify-center max-w-[850px] mx-auto text-sm">
                    <p id="direction">{allValues.city || "_____"}<span id="">,{" "}{allValues.country || "_____"}</span><span className="font-bold text-base">{" "}·</span></p>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><span className="text-link underline">{linkedinDisplay || "____________"}</span><span className="font-bold text-base">{" "}·</span></a>
                    <p>+__ ___ ___ ___<span className="font-bold text-base">{" "}·</span></p>
                    <p>_________________</p>
                </div>

                {/* Profile Summary */}
                <div className="pt-3 pb-4 border-t border-black">
                    <p className="italic text-sm px-4" id="profile-summary">Más de 2 años de experiencia como Desarrollador de Software. Lideré el desarrollo de Exploratec, implementando un recorrido virtual en 360° que facilitó las visitas presenciales al campus de Tecsup, ayudando a un 30% de los nuevos estudiantes a orientarse y explorar el campus de manera eficiente.</p>
                </div>
            </header>

            <main className="text-sm">

                {/* Section experience */}
                <section id="experience" className="pb-4">
                    <h2 className="font-bold text-base uppercase border-b border-black px-4">Experiencia profesional</h2>
                    <article className="py-3 px-4">
                        <div className="grid sm:grid-cols-2 grid-cols-1">
                            <h3 id="company" className="font-bold">Tecsup</h3>
                            <p id="country" className="flex text-left md:justify-end justify-start font-bold">Lima Peru</p>
                            <p id="" className="">Full Stack</p>
                            <p id="" className="flex text-left md:justify-end justify-start">Marzo 2024–Diciembre 2024</p>
                        </div>
                        <ul className="list-disc pt-1">
                            <li className="md:pr-14 mx-6">Diseñé y desarrollé una plataforma web de recorrido virtual para el campus de la sede Lima de Tecsup, permitiendo a futuros estudiantes conocer el campus de manera remota.
                            </li>
                            <li className="md:pr-14 mx-6">Diseñé y desarrollé una plataforma web de recorrido virtual para el campus de la sede Lima de Tecsup, permitiendo a futuros estudiantes conocer el campus de manera remota.
                            </li>
                            <li className="md:pr-14 mx-6">Diseñé y desarrollé una plataforma web de recorrido virtual para el campus de la sede Lima de Tecsup, permitiendo a futuros estudiantes conocer el campus de manera remota.
                            </li>
                            <li className="md:pr-14 mx-6">Diseñé y desarrollé una plataforma web de recorrido virtual para el campus de la sede Lima de Tecsup, permitiendo a futuros estudiantes conocer el campus de manera remota.
                            </li>
                        </ul>
                    </article>

                    <article className="py-3 px-4">
                        <div className="grid sm:grid-cols-2 grid-cols-1">
                            <h3 id="company" className="font-bold">Tecsup</h3>
                            <p id="country" className="flex text-left md:justify-end justify-start font-bold">Lima Peru</p>
                            <p id="" className="">Full Stack</p>
                            <p id="" className="flex text-left md:justify-end justify-start">Marzo 2024–Diciembre 2024</p>
                        </div>
                        <ul className="list-disc pt-1">
                            <li className="md:pr-14 mx-6">Diseñé y desarrollé una plataforma web de recorrido virtual para el campus de la sede Lima de Tecsup, permitiendo a futuros estudiantes conocer el campus de manera remota.
                            </li>
                            <li className="md:pr-14 mx-6">Diseñé y desarrollé una plataforma web de recorrido virtual para el campus de la sede Lima de Tecsup, permitiendo a futuros estudiantes conocer el campus de manera remota.
                            </li>
                        </ul>
                    </article>

                    <article className="py-3 px-4">
                        <div className="grid sm:grid-cols-2 grid-cols-1">
                            <h3 id="company" className="font-bold">Tecsup</h3>
                            <p id="country" className="flex text-left md:justify-end justify-start font-bold">Lima Peru</p>
                            <p id="" className="">Full Stack</p>
                            <p id="" className="flex text-left md:justify-end justify-start">Marzo 2024–Diciembre 2024</p>
                        </div>
                        <ul className="list-disc pt-1">
                            <li className="md:pr-14 mx-6">Diseñé y desarrollé una plataforma web de recorrido virtual para el campus de la sede Lima de Tecsup, permitiendo a futuros estudiantes conocer el campus de manera remota.
                            </li>
                        </ul>
                    </article>
                </section>

                {/* Section education */}
                <section id="education" className="pb-4">
                    <h2 className="font-bold text-base uppercase border-b border-black px-4">Educación</h2>
                    <article className="py-3 px-4">
                        <div className="grid sm:grid-cols-2 grid-cols-1">
                            <h3 id="studyhouse" className="font-bold uppercase">Instituto de Educación Privado TECSUP</h3>
                            <p id="country" className="flex text-left md:justify-end justify-start font-bold">Lima Peru</p>
                            <p id="profession" className="">Diseñador y Desarrollador de Software</p>
                            <p id="completiondate" className="flex text-left md:justify-end justify-start">Diciembre 2024</p>
                        </div>
                    </article>
                </section>

                {/* Section skills */}
                <section id="skills">
                    <h2 className="font-bold text-base uppercase border-b border-black px-4">Skills adicionales</h2>
                    <article className="py-3 px-4">
                        <ul className="list-disc pt-1">
                            <li className="md:pr-14 mx-6">Diseñé y desarrollé una plataforma web de recorrido virtual para el campus de la sede Lima de Tecsup, permitiendo a futuros estudiantes conocer el campus de manera remota.
                            </li>
                            <li className="md:pr-14 mx-6">Diseñé y desarrollé una plataforma web de recorrido virtual para el campus de la sede Lima de Tecsup, permitiendo a futuros estudiantes conocer el campus de manera remota.
                            </li>
                        </ul>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default ModelCv