import React from 'react'
import Link from 'next/link'
import Background from "../assets/background.svg";

const page = () => {
  return (
    <div className="bg-deepBlack">
      <section id="hero" className="min-h-screen flex items-center">
        <div className="container">
          <Background id="background" className="fixed top-0 left-0 w-full h-full z-10 custom-blur"/>
          <div className="flex flex-col items-center gap-5">
            <h1 className="xl:text-[80px] sm:text-5xl text-3xl text-center font-medium text-softWhite tracking-tight">Crea tu <span className="bg-gradient-to-r from-[#1C60FF] via-[#0D1EB8] to-[#021338] inline-block text-transparent bg-clip-text font-semibold">Currículum</span><span className="block">Harvard con <span className="bg-gradient-to-r from-[#1C60FF] via-[#0D1EB8] to-[#021338] inline-block text-transparent bg-clip-text font-semibold">Smart CV</span></span></h1>
            <p className="text-center text-base sm:text-xl text-softWhite">Transforma tu currículum profesional con el estilo académico de Harvard.</p>
            <div className="flex gap-2">
              <Link href="/curriculum" className="px-4 py-2.5 sm:px-5 sm:py-3.5 bg-gradient-to-r from-[#1C60FF] via-[#0D1EB8] to-[#021338] rounded-3xl transition-all duration-300 hover:brightness-50">
                <span className='text-sm sm:text-base text-white transition-none'>Empieza ahora</span>
              </Link>
              <a href="https://github.com/BenjaminVeli/CurriculumHarvard" target="_blank" rel="noopener noreferrer" className='px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-3xl bg-softWhite'>
                <span className='text-sm sm:text-base transition-none text-[#0D1EB8]'>Repositorio</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page