import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex">
      {/* Sidebar vertical */}
      <nav className="fixed left-0 top-0 h-screen w-72 border-r border-foreground/10 bg-[#000214] text-white z-50">
        <div className="h-full flex flex-col">
          <div className="flex items-center gap-3 p-4 border-b border-white/10">
            <img
              src="https://ekfzpyeidnedjyctkkxs.supabase.co/storage/v1/object/sign/Archivos/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84MTQ0OTUyYS0xMzA4LTRkMmItOWYwOC0zNTEwYzYyMGM1M2YiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBcmNoaXZvcy9sb2dvLnBuZyIsImlhdCI6MTc1Nzk2ODk4MywiZXhwIjoxNzg5NTA0OTgzfQ.4aNjRS6W6EgVHy7VFflFIFIqSXJfoKbmIJ5zy6EzoWc"
              alt="Logo personalizado"
              className="h-10 w-15"
            />
            <span className="font-semibold text-lg">Bienvenido al feed</span>
          </div>
          {/* Sección de sesión justo debajo del encabezado */}
          <div className="p-4 border-b border-white/10">
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
          {/* Relleno flexible para empujar otros elementos hacia abajo si los agregas */}
          <div className="flex-1" />
        </div>
      </nav>

      {/* Contenido principal con padding para la barra lateral */}
      <div className="flex-1 w-full flex flex-col gap-8 items-center pl-72">

        {/* Search bar */}
        <div className="w-full max-w-2xl px-4 mt-6 mb-6">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-2 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Contenido principal */}
        <div className="w-full flex flex-row flex-wrap justify-center items-start gap-8 px-8">
          {[
            { id: 1,  img: "photo-1506744038136-46273834b3fb", title: "Título del Feed 1",  desc: "Esta es la descripción del primer recuadro del feed. Aquí puedes mostrar información relevante para los usuarios." },
            { id: 2,  img: "photo-1520975916090-3105956dac38", title: "Título del Feed 2",  desc: "Esta es la descripción del segundo recuadro del feed. Aquí puedes mostrar información relevante para los usuarios." },
            { id: 3,  img: "photo-1500530855697-b586d89ba3ee", title: "Título del Feed 3",  desc: "Esta es la descripción del tercer recuadro del feed. Aquí puedes mostrar información relevante para los usuarios." },
            { id: 4,  img: "photo-1515879218367-8466d910aaa4", title: "Título del Feed 4",  desc: "Esta es la descripción del cuarto recuadro del feed. Aquí puedes mostrar información relevante para los usuarios." },
            { id: 5,  img: "photo-1498050108023-c5249f4df085", title: "Título del Feed 5",  desc: "Esta es la descripción del quinto recuadro del feed. Aquí puedes mostrar información relevante para los usuarios." },
            { id: 6,  img: "photo-1492724441997-5dc865305da7", title: "Título del Feed 6",  desc: "Este es un nuevo recuadro agregado al feed (sexto elemento). Aquí puedes mostrar información relevante para los usuarios." },
            { id: 7,  img: "photo-1487058792275-0ad4aaf24ca7", title: "Título del Feed 7",  desc: "Este es otro recuadro nuevo agregado al feed (séptimo elemento). Aquí puedes mostrar información relevante para los usuarios." },
            { id: 8,  img: "photo-1521737604893-d14cc237f11d", title: "Título del Feed 8",  desc: "Contenido de ejemplo del octavo recuadro del feed." },
            { id: 9,  img: "photo-1496302662116-35cc4f36df92", title: "Título del Feed 9",  desc: "Contenido de ejemplo del noveno recuadro del feed." },
            { id: 10, img: "photo-1472289065668-ce650ac443d2", title: "Título del Feed 10", desc: "Contenido de ejemplo del décimo recuadro del feed." },
            { id: 11, img: "photo-1469474968028-56623f02e42e", title: "Título del Feed 11", desc: "Contenido de ejemplo del undécimo recuadro del feed." },
            { id: 12, img: "photo-1503264116251-35a269479413", title: "Título del Feed 12", desc: "Contenido de ejemplo del duodécimo recuadro del feed." },
            { id: 13, img: "photo-1506084868230-bb9d95c24759", title: "Título del Feed 13", desc: "Contenido del decimotercer recuadro del feed." },
            { id: 14, img: "photo-1517511620798-cec17d428bc0", title: "Título del Feed 14", desc: "Contenido del decimocuarto recuadro del feed." },
            { id: 15, img: "photo-1500534314209-a25ddb2bd429", title: "Título del Feed 15", desc: "Contenido del decimoquinto recuadro del feed." },
            { id: 16, img: "photo-1496307042754-b4aa456c4a2d", title: "Título del Feed 16", desc: "Contenido del decimosexto recuadro del feed." },
            { id: 17, img: "photo-1529626455594-4ff0802cfb7e", title: "Título del Feed 17", desc: "Contenido del decimoséptimo recuadro del feed." },
            { id: 18, img: "photo-1441974231531-c6227db76b6e", title: "Título del Feed 18", desc: "Contenido del decimoctavo recuadro del feed." },
            { id: 19, img: "photo-1500534623283-312aade485b7", title: "Título del Feed 19", desc: "Contenido del decimonoveno recuadro del feed." },
            { id: 20, img: "photo-1437622368342-7a3d73a34c8f", title: "Título del Feed 20", desc: "Contenido del vigésimo recuadro del feed." },
            { id: 21, img: "photo-1432888498266-38ffec3eaf0a", title: "Título del Feed 21", desc: "Contenido del vigésimo primer recuadro del feed." },
          ].map(({ id, img, title, desc }) => (
            <div key={id} className="flex flex-col items-center w-80 h-80 bg-white rounded-lg shadow p-4">
              <img
                src={`https://images.unsplash.com/${img}?auto=format&fit=facearea&w=400&q=80`}
                alt={`Imagen Feed ${id}`}
                className="w-full h-32 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-lg font-bold mb-2 text-purple-700 text-center">{title}</h2>
              <p className="text-gray-700 text-center">{desc}</p>
            </div>
          ))}
        </div>

        {children}
      </div>
    </main>
  );
}
