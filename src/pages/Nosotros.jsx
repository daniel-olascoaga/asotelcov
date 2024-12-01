import React from 'react';
import { Card } from 'flowbite-react';

export default function Nosotros() {
  const caracteristicas = [
    { title: "Seguridad", description: "Cada proyecto es realizado bajo estrictos protocolos de seguridad eléctrica." },
    { title: "Experiencia", description: "Contamos con años de experiencia en el sector eléctrico." },
    { title: "Compromiso", description: "Nos comprometemos a ofrecer siempre un servicio de la más alta calidad." },
  ];
    return (
        <div id="home" className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">¿Quiénes Somos?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Somos una asociación de técnicos electricistas comprometidos con la seguridad, la innovación y la calidad en todos nuestros servicios.
        </p>
        <div className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {caracteristicas.map((caracteristica, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {caracteristica.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {caracteristica.description}
                </p>
                </Card>
            ))}
            </div>
        </div>
        </div>
      </div>
    </div>
    );
}