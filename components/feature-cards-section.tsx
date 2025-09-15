import { FeatureCard } from "../components/feature-card";
import { FaBook, FaUsers, FaCalendar } from "react-icons/fa";

export function FeatureCardsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 w-full max-w-5xl mx-auto">
      <FeatureCard
        title="Videollamadas Integradas"
        description="Conectate con tus compañeros en tiempo real para sesiones de estudio colaborativas sin salir de la plataforma."
        icon={<FaUsers />}
      />
      <FeatureCard
        title="Biblioteca de Materiales"
        description="Comparte y consunlta apuntes, ejercicios y recursos educativs, creando una biblioteca de conocimiento colectivo"
        icon={<FaBook />}
      />
      <FeatureCard
        title="Organizacion y Planificación"
        description="Planifica y organiza tus sesiones de estudio y proyectos en grupo de forma sencilla con nuestro calendario y herramientas de organización."
        icon={<FaCalendar />}
      />
    </div>
  );
}
