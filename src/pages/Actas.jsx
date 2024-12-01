import PDFDownload from '../components/PDFDownload/PDFDownload';
import PDFActas from "../pdf/2024=NUEVO ACTA DE JUNTA DIRECTIVA ASOTELCOV.pdf"

export default function Actas() {
    return (
        <>
            <div className="mb-20 mt-8">
                <h1 className="text-center">Actas</h1>
                <div className="w-full h-auto mb-6">
                    <div className="grid place-items-center">
                        <a href="#" className="flex justify-center flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Descargar actas</h1>
                                <PDFDownload file={PDFActas} />
                                <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400" style={{ whiteSpace: 'pre-line' }}>Las presentes actas fueron debatidos y aprobados por la Junta Directiva "ASOTELCOV" realizadas desde el cinco (5) de Marzo de 2024, en el municipio de Coveñas..</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}