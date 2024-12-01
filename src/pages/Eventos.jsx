import Logo from "../assets/Logo.png";

export default function Eventos() {
    return (
        <>      
            <div className="mb-20 mt-8">
                <h1 className="text-center">Seccion De Eventos</h1>
                <div className="w-full h-auto mb-6">
                    <div className="grid place-items-center">
                        <a href="#" className="flex justify-center flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-contain w-full rounded-t-lg lg:h-auto md:h-70 md:w-48 lg:w-48 md:rounded-none md:rounded-s-lg" src={Logo} alt={"Logo"}/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Evento 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi similique aperiam odio laborum itaque porro amet, accusamus iusto illo, laboriosam voluptatum aliquam dolor.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full h-auto mb-6">
                    <div className="grid place-items-center">
                        <a href="#" className="flex justify-center flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-contain w-full rounded-t-lg lg:h-auto md:h-70 md:w-48 lg:w-48 md:rounded-none md:rounded-s-lg" src={Logo} alt={"Logo"}/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Evento 2022</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor earum nemo velit. Ea quaerat quasi eaque velit voluptas iure veritatis recusandae tenetur tempora.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full h-auto mb-6">
                    <div className="grid place-items-center">
                        <a href="#" className="flex justify-center flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-contain w-full rounded-t-lg lg:h-auto md:h-70 md:w-48 lg:w-48 md:rounded-none md:rounded-s-lg" src={Logo} alt={"Logo"}/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Evento 2023</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, a ullam. Nemo et accusamus, aspernatur libero amet est error eligendi repellendus corrupti. Excepturi?.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}