import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureCardsSection } from "../components/feature-cards-section";
import { LogoPNG } from "@/app/components/im/LogoPNG";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 bg-[#001f3f] text-white h-16">
          <div className="w-full max-w-5xl flex items-center p-3 px-5 text-sm">
            <div className="flex gap-3 items-center font-semibold text-xl">
              <LogoPNG className="h-12 w-12" />
              <Link href={"/"}>Match Study</Link>
            </div>
            <div className="flex gap-2 ml-auto text-base">
              <Link href="/features">
                <Button variant="outline" size="sm" className="bg-white text-black border-gray-300 hover:bg-gray-100">
                  Características
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="sm" className="bg-white text-black border-gray-300 hover:bg-gray-100">
                  Acerca de
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="sm" className="bg-white text-black border-gray-300 hover:bg-gray-100">
                  Contacto
                </Button>
              </Link>
              {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
            </div>
          </div>
        </nav>

        <div className="flex-1 flex flex-col items-center max-w-2xl text-center px-4">
          <h1 className="font-medium text-4xl mb-4">
            Bienvenido a Match Study
          </h1>
          <p className="font-medium text-m mb-8 text-gray-600">
            Tu plataforma para conectar con compañeros, compartir materiales y
            organizar sesiones de estudio en linea de manera sencilla
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-medium text-2xl text-purple-500 mb-2">
            Características
          </h1>
        </div>
        <div className="mt-0 w-full">
          <FeatureCardsSection />
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 bg-[#001f3f] text-white">
          <p>2025 Match Study. Todos los derechos reservados</p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
