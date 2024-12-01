import Logo from "../assets/Logo.png";

export default function Novedades() {
    return (
        <>      
            <div className="mb-20 mt-8">
                <h1 className="text-center">Seccion De Novedades</h1>
                <div className="w-full h-auto mb-6">
                    <div className="grid place-items-center">
                        <a href="#" className="flex justify-center flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-contain w-full rounded-t-lg lg:h-auto md:h-70 md:w-48 lg:w-48 md:rounded-none md:rounded-s-lg" src={Logo} alt={"Logo"}/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Novedad 2021</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores saepe vitae nam cupiditate alias est nulla, quasi, quidem, nostrum corporis laborum atque?.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full h-auto mb-6">
                    <div className="grid place-items-center">
                        <a href="#" className="flex justify-center flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-contain w-full rounded-t-lg lg:h-auto md:h-70 md:w-48 lg:w-48 md:rounded-none md:rounded-s-lg" src={Logo} alt={"Logo"}/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Novedad 2022</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam recusandae ut eum rem facilis, possimus saepe fugiat quibusdam, ipsam quas exercitationem magni eos?</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full h-auto mb-6">
                    <div className="grid place-items-center">
                        <a href="#" className="flex justify-center flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-contain w-full rounded-t-lg lg:h-auto md:h-70 md:w-48 lg:w-48 md:rounded-none md:rounded-s-lg" src={Logo} alt={"Logo"}/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Novedad 2023</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque incidunt dolores. Consequatur sit neque dolores tempora suscipit aliquid deserunt culpa aliquam dignissimos.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}