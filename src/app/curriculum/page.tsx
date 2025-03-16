import { STIX_Two_Text } from "next/font/google";
import { Metadata } from "next"
import FormData from "@/components/FormData";

const geistStix = STIX_Two_Text({
    variable: "--font-stix-two-textf",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Curriculum Harvard",
}

const page = () => {
    return (
        <div className={`${geistStix.className} min-h-screen flex items-center`}>
            <div className="container">
                <h1 className="text-center font-bold text-3xl md:text-4xl my-5 text-h1">Currículum Harvard</h1>
                <div className="grid grid-cols-3 gap-8">

                    <div className="md:col-span-1 col-span-full">
                        <FormData />
                    </div>
        
                    <div id="curriculum_vitae" className="md:col-span-2 col-span-full overflow-auto h-[800px]">
                        <header className="">
                            <p className="font-bold text-2xl text-center">_____________________</p>

                            {/* Contact Info */}
                            <div className="flex flex-wrap gap-4 justify-center max-w-[850px] mx-auto text-sm">
                                <p id="direction">_____<span id="">,{" "}</span>______</p>
                                <a href="https://www.linkedin.com/in/benjamin-jhosep-veli-mariano/" target="_blank" rel="noopener noreferrer" className="text-link underline" id="linkedin">linkedin.com/in/benjamin/</a>
                                <p id="phone">+51 ___ ___ ___</p>
                                <p id="email">@_________________</p>
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

                </div>
            </div>
        </div>
    )
}

export default page