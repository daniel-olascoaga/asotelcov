import Logo2 from "../assets/Logo.png";

export default function Publicaciones() {
    return (
        <>      
            <div className="mb-20 mt-8"> 
                <h1 className="text-center">Seccion De Publicaciones</h1>
                <div className="w-full h-auto mb-6">
                    <div className="grid place-items-center">
                        <a href="#" className="flex justify-center flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-contain w-full rounded-t-lg lg:h-auto md:h-70 md:w-48 lg:w-48 md:rounded-none md:rounded-s-lg" src={Logo2} alt={"Logo2"}/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Publicacion 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quaerat quibusdam corrupti hic numquam velit architecto soluta sed, error molestiae, unde nam?.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full h-auto mb-6">
                    <div className="grid place-items-center">
                        <a href="#" className="flex justify-center flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-contain w-full rounded-t-lg lg:h-auto md:h-70 md:w-48 lg:w-48 md:rounded-none md:rounded-s-lg" src={Logo2} alt={"Logo2"}/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Publicacion 2022</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque, ipsa quaerat pariatur non voluptas eum consequuntur blanditiis esse nostrum maxime, ipsum explicabo.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full h-auto mb-6">
                    <div className="grid place-items-center">
                        <a href="#" className="flex justify-center flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-contain w-full rounded-t-lg lg:h-auto md:h-70 md:w-48 lg:w-48 md:rounded-none md:rounded-s-lg" src={Logo2} alt={"Logo2"}/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Publicacion 2023</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia voluptates placeat consequuntur totam aut iste facere deleniti reiciendis? Culpa rerum doloremque suscipit.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}