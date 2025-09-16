import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { FeatureCardsSection } from "../components/feature-cards-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 bg-[#000214] text-white h-16 fixed top-0 left-0 z-50">
          <div className="w-full max-w-5xl flex items-center p-3 px-5 text-sm">
            <div className="flex gap-3 items-center font-semibold text-xl">
              <img
                src="https://ekfzpyeidnedjyctkkxs.supabase.co/storage/v1/object/sign/Archivos/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84MTQ0OTUyYS0xMzA4LTRkMmItOWYwOC0zNTEwYzYyMGM1M2YiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBcmNoaXZvcy9sb2dvLnBuZyIsImlhdCI6MTc1Nzk2ODk4MywiZXhwIjoxNzg5NTA0OTgzfQ.4aNjRS6W6EgVHy7VFflFIFIqSXJfoKbmIJ5zy6EzoWc"
                alt="Logo personalizado"
                className="h-10 w-15 mr-2"
              />
              <Link href={"/"}>Match Study</Link>
            </div>
            <div className="flex gap-2 ml-auto text-base">
              {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
            </div>
          </div>
        </nav>

        <div className="flex-1 flex flex-col items-center max-w-2xl text-center px-4 mt-24">
          <h1 className="font-medium text-4xl mb-4">
            Bienvenido a Match Study
          </h1>
          <p className="font-medium text-m mb-8 text-gray-600">
            Tu plataforma para conectar con compañeros, compartir materiales y
            organizar sesiones de estudio en linea de manera sencilla
          </p>
        </div>
        <img
          src="https://ekfzpyeidnedjyctkkxs.supabase.co/storage/v1/object/sign/Archivos/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84MTQ0OTUyYS0xMzA4LTRkMmItOWYwOC0zNTEwYzYyMGM1M2YiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBcmNoaXZvcy9sb2dvLnBuZyIsImlhdCI6MTc1Nzk2ODk4MywiZXhwIjoxNzg5NTA0OTgzfQ.4aNjRS6W6EgVHy7VFflFIFIqSXJfoKbmIJ5zy6EzoWc"
          alt="Logo personalizado"
          className="h-100 w-150 mr-2"
        />
        <div className="flex flex-col items-center">
          <h1 className="font-medium text-2xl text-purple-500 mb-2">
            Características
          </h1>
        </div>
        <div className="mt-0 w-full">
          <FeatureCardsSection />
        </div>
        <section className="flex flex-col items-center my-8 px-5 max-w-6xl text-justify">
          <h2 className="text-xl font-semibold mb-2 text-purple-700">
            Acerca de
          </h2>
          <p className="text-base text-gray-700">
            La Universidad de Guadalajara (UDG) es una de las instituciones de
            educación superior más importantes de México y América Latina,
            reconocida por su compromiso con la innovación académica, la
            investigación científica y la vinculación social. A través de sus
            centros universitarios, la UDG impulsa proyectos que buscan
            responder a las necesidades actuales de la sociedad y fomentar el
            desarrollo integral de los estudiantes. En este contexto, surge un
            proyecto académico y tecnológico orientado a fortalecer el
            aprendizaje colaborativo dentro de la comunidad universitaria: el
            desarrollo de una plataforma web que conecte estudiantes en roles de
            tutor o aprendiz. Esta iniciativa propone crear un espacio digital
            en el que los alumnos puedan interactuar de manera organizada según
            categorías temáticas, lo que permitirá localizar fácilmente apoyo en
            áreas específicas de estudio. La plataforma integra funcionalidades
            modernas como chat en tiempo real y videollamadas, herramientas que
            facilitan la comunicación directa y personalizada entre los
            participantes. El propósito principal es fortalecer el aprendizaje
            colaborativo al ofrecer un entorno que fomente el intercambio de
            conocimientos, la construcción de redes de apoyo académico y el
            aprovechamiento de las habilidades individuales de los estudiantes.
            Con ello, la UDG busca no solo mejorar el rendimiento académico,
            sino también promover una cultura de solidaridad y cooperación
            dentro de la comunidad universitaria.
          </p>
          <img
            src="https://ekfzpyeidnedjyctkkxs.supabase.co/storage/v1/object/sign/Archivos/logo_udeg_negro_horizontal_2_0.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84MTQ0OTUyYS0xMzA4LTRkMmItOWYwOC0zNTEwYzYyMGM1M2YiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBcmNoaXZvcy9sb2dvX3VkZWdfbmVncm9faG9yaXpvbnRhbF8yXzAucG5nIiwiaWF0IjoxNzU3OTc3NzM0LCJleHAiOjE3ODk1MTM3MzR9.cvys5kvY3tyWAPciys2fKWTmcegAg9eB0cjGuwIfR2w"
            alt="Logo personalizado"
            className="h-100 w-150 mr-2"
          />
        </section>

        <section className="flex flex-col items-center my-8 px-4 max-w-2xl">
          <h2 className="text-xl font-semibold mb-2 text-purple-700">
            Contacto
          </h2>
          <p className="text-base text-gray-700 mb-4">
            ¿Tienes dudas, sugerencias o deseas colaborar con nosotros?
            ¡Contáctanos!
          </p>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-purple-100">
                  <th className="py-2 px-4 border-b text-left">Nombre</th>
                  <th className="py-2 px-4 border-b text-left">Correo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">ERNESTO CASAS</td>
                  <td className="py-2 px-4 border-b">
                    ernesto.cherrera@alumnos.udg.mx
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">JUAN VALENZUELA</td>
                  <td className="py-2 px-4 border-b">
                    juan.valenzuela7221@alumnos.udg.mx
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">MIGUEL HERNANDEZ</td>
                  <td className="py-2 px-4 border-b">
                    miguel.hernandez3986@alumnos.udg.mx
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <footer className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-center border-t mx-auto text-center text-xs gap-8 bg-[#000214] text-white h-12">
          <p>2025 Match Study. Todos los derechos reservados</p>
        </footer>
      </div>
      <div className="h-12" /> {/* Espaciador para el footer fijo */}
    </main>
  );
}
