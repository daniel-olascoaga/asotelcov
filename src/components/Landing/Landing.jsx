import React from 'react';
import { Card } from 'flowbite-react';
import { Link } from "react-router-dom";
import Electricistas from "../../assets/Electricistas.jpg";
import Cov from "../../assets/Cov.jpg";

export default function Landing() {
  const services = [
    { title: "Instalaciones Eléctricas", description: "Desde instalaciones residenciales hasta comerciales e industriales, ofrecemos un servicio completo que incluye cableado, distribución, sistemas de protección y más. Todo realizado conforme a las normativas vigentes." },
    { title: "Mantenimiento", description: "Evita fallos en tus sistemas eléctricos con nuestro servicio de mantenimiento regular. Realizamos inspecciones exhaustivas, reemplazo de componentes y reparaciones para asegurar que tu sistema funcione correctamente." },
    { title: "Automatización", description: "Moderniza tu hogar o empresa con sistemas inteligentes que optimizan el consumo energético. Integramos soluciones como control de iluminación, termostatos inteligentes, y más, para mejorar la eficiencia energética y reducir costos." },
  ];

  return (
    <>
        <div className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Bienvenidos a la Asociación de Técnicos Electricistas De Coveñas
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
            Somos un grupo de profesionales altamente capacitados que brindan soluciones eléctricas integrales para hogares, comercios e industrias. Nuestro compromiso es garantizar la seguridad, eficiencia y calidad en cada proyecto.
            </p>
            <Link
              to="/asotelcov/nosotros"
            >
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                  Conoce más
              </button>
            </Link>
        </div>
        </div>
        <div className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {service.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {service.description}
                </p>
                </Card>
            ))}
            </div>
        </div>
        </div>
        <div className="relative my-0 mx-auto w-screen mb-10">
          <img src={Electricistas} alt={"Electricistas"} className="w-screen max-[600px]:h-2/4"/>
          <div className='absolute bg-black opacity-60 text-white bottom-0 right-0 pl-6 pr-6 w-full p-5 h-2/5'>
            <h4 className='text-white opacity-none text-left text-5xl lg:pb-4 max-[600px]:text-3xl md:pb-3'>Técnicos Coveñeros</h4>
            <p className='text-white opacity-none text-left text-xl max-[600px]:text-sm'>Mano De Obra Calificada Del Territorio</p>
          </div>
        </div>
        <div className="relative my-0 mx-auto w-screen">
          <img src={Cov} alt={"Cov"} className="w-screen max-[600px]:h-2/4"/>
          <div className='absolute bg-black opacity-60 text-white bottom-0 right-0 pl-6 pr-6 w-full p-5 h-2/5'>
            <h4 className='text-white opacity-none text-left text-5xl lg:pb-4 max-[600px]:text-3xl md:pb-3'>Coveñas</h4>
            <p className='text-white opacity-none text-left text-xl max-[600px]:text-sm'>Amor por nuestra tierra</p>
          </div>
        </div>
    </>
  );
}