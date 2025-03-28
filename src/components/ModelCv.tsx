"use client";

import useModelCv from "@/hooks/useModelCv";

const ModelCv = () => {

    const { allValues, linkedinUrl, linkedinDisplay, formatDate } = useModelCv();

    return (
        <div id="curriculum_vitae" className="md:col-span-2 col-span-full overflow-y-auto h-[800px] w-full md:block hidden">
            <header className="">
                <p className="font-bold text-2xl text-center">{allValues.nameLastname || "_____________________"}</p>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 justify-center max-w-[850px] mx-auto text-sm">
                    <p >{allValues.city || "_____"}<span >,{" "}{allValues.country || "_____"}</span><span className="font-bold text-base">{" "}·</span></p>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><span className="text-link underline">{linkedinDisplay || "____________"}</span><span className="font-bold text-base">{" "}·</span></a>
                    <p>{allValues.phone || "+__ ___ ___ ___"}<span className="font-bold text-base">{" "}·</span></p>
                    <p>{allValues.email || "_________________"}</p>
                </div>

                {/* Profile Summary */}
                <div className="pt-3 pb-4 border-t border-black">
                    <p className="italic text-sm px-4 text-left">{allValues.profileSummary || "_______________________________________"}</p>
                </div>
            </header>

            <main className="text-sm">

                {/* Section experience */}
                <section id="experience" className="pb-4">
                    <h2 className="font-bold text-base uppercase border-b border-black px-4">Experiencia profesional</h2>
                    <article className="py-3 px-4">
                        <div className="grid sm:grid-cols-2 grid-cols-1">
                            <h3 className="font-bold">{allValues.experience1 || "________"}</h3>
                            <p className="flex text-left md:justify-end justify-start font-bold">{allValues.experience1_city || "______"},{" "}{allValues.experience1_country || "______"}</p>
                            <p className="">{allValues.role1 || "______"}</p>
                            <p className="flex text-left md:justify-end justify-start italic">{allValues.experience1_start_date ? formatDate(allValues.experience1_start_date) : "__________"}–{allValues.experience1_end_date ? formatDate(allValues.experience1_end_date) : "__________"}</p>
                        </div>
                        <ul className="list-disc pt-1 break-words">
                            <li className="md:pr-14 mx-6">{allValues.experience1_activity1 || "____________________________________"}</li>
                            <li className="md:pr-14 mx-6">{allValues.experience1_activity2 || "____________________________________"}</li>
                            <li className="md:pr-14 mx-6">{allValues.experience1_activity3 || "____________________________________"}</li>
                            <li className="md:pr-14 mx-6">{allValues.experience1_activity4 || "____________________________________"}</li>
                        </ul>
                    </article>

                    <article className="py-3 px-4">
                        <div className="grid sm:grid-cols-2 grid-cols-1">
                            <h3 className="font-bold">{allValues.experience2 || "________"}</h3>
                            <p className="flex text-left md:justify-end justify-start font-bold">{allValues.experience2_city || "______"},{" "}{allValues.experience2_country || "______"}</p>
                            <p className="">{allValues.role2 || "______"}</p>
                            <p className="flex text-left md:justify-end justify-start italic">{allValues.experience2_start_date ? formatDate(allValues.experience2_start_date) : "__________"}–{allValues.experience2_end_date ? formatDate(allValues.experience2_end_date) : "__________"}</p>
                        </div>
                        <ul className="list-disc pt-1 break-words">
                            <li className="md:pr-14 mx-6">{allValues.experience2_activity1 || "____________________________________"}</li>
                            <li className="md:pr-14 mx-6">{allValues.experience2_activity2 || "____________________________________"}</li>
                        </ul>
                    </article>

                    <article className="py-3 px-4">
                        <div className="grid sm:grid-cols-2 grid-cols-1">
                            <h3 className="font-bold">{allValues.experience3 || "________"}</h3>
                            <p className="flex text-left md:justify-end justify-start font-bold">{allValues.experience3_city || "______"},{" "}{allValues.experience3_country || "______"}</p>
                            <p className="">{allValues.role3 || "______"}</p>
                            <p className="flex text-left md:justify-end justify-start italic">{allValues.experience3_start_date ? formatDate(allValues.experience3_start_date) : "__________"}–{allValues.experience3_end_date ? formatDate(allValues.experience3_end_date) : "__________"}</p>
                        </div>
                        <ul className="list-disc pt-1 break-words">
                            <li className="md:pr-14 mx-6">{allValues.experience3_activity1 || "____________________________________"}</li>
                        </ul>
                    </article>
                </section>

                {/* Section education */}
                <section id="education" className="pb-4">
                    <h2 className="font-bold text-base uppercase border-b border-black px-4">Educación</h2>
                    <article className="py-3 px-4">
                        <div className="grid sm:grid-cols-2 grid-cols-1">
                            <h3 className="font-bold uppercase">{allValues.studycenter || "__________________________________"}</h3>
                            <p className="flex text-left md:justify-end justify-start font-bold">{allValues.studycenter_city || "_____"},{" "}{allValues.studycenter_country || "_____"}</p>
                            <p className="">{allValues.specialty || "__________________________________"}</p>
                            <p className="flex text-left md:justify-end justify-start italic">{allValues.graduation_date ? formatDate(allValues.graduation_date) : "__________"}</p>
                        </div>
                    </article>
                </section>

                {/* Section skills */}
                <section id="skills">
                    <h2 className="font-bold text-base uppercase border-b border-black px-4">Skills adicionales</h2>
                    <article className="py-3 px-4">
                        <ul className="list-disc pt-1">
                            <li className="md:pr-14 mx-6">{allValues.skill1 || "_____________________________________"}
                            </li>
                            <li className="md:pr-14 mx-6">{allValues.skill2 || "_____________________________________"}
                            </li>
                        </ul>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default ModelCv