import PDFDownload from '../components/PDFDownload/PDFDownload';
import PDFCamaraComercio from "../pdf/Rentas 2023 Aso_electricos.pdf"

export default function CamaraComercio() {
    return (
        <>
            <div className="mb-20 mt-8">
                <h1 className="text-center">Cámara de comercio</h1>
                <div className="w-full h-auto mb-6">
                    <div className="grid place-items-center">
                        <a href="#" className="flex justify-center flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Descargar cámara de comercio</h1>
                                <PDFDownload file={PDFCamaraComercio} />
                                <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400" style={{ whiteSpace: 'pre-line' }}>El presente documento fue aprobado y emitido por la cámara de comercio DIAN realizada el día veinte (20) de Mayo de 2024 en Sincelejo</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}