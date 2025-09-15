import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-gray-600 rounded-lg shadow p-6 flex flex-col items-center text-center text-white">
      {icon && <div className="mb-4 text-4xl text-blue-200">{icon}</div>}
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
}
