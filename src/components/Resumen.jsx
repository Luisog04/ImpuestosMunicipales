import { useEffect, useState } from "react"
import { calcularRecBasura, formatearDinero } from "../helpers"


function Resumen({ categoria, precio }) {
    const [bienes, setBienes] = useState(0)
    const [parques, setParques] = useState(0)
    const [basura, setBasura] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        // Calcula el monto por concepto de vienes inmuebles
        const montoBienes = precio * 0.0025
        setBienes(montoBienes)
        // Calcula el monto por concepto de mantenimiento Parques
        const montoParques = (precio * 21.75) / 1000000
        setParques(montoParques)
        // Calcula el monto a pagar por recolección de basura
        const montoBasura = calcularRecBasura(categoria)
        setBasura(montoBasura)

        const totalPagar = montoBienes + montoParques + montoBasura
        setTotal(totalPagar)
    }, [categoria, precio])

    return (
        <>
            {categoria > 0
                ?
                <div className="md:w-1/2 lg:w-3/5 p-3 mx-5 text-center shadow-xl bg-cyan-50">
                    <h4 className="text-xl lg:text-2xl font-semibold mt-10">Resumen de <span className="text-teal-900">Impuestos Municipales</span>  trimestrales</h4>

                    <div>
                        <p className="text-2xl text-gray-800 m-3 mt-10 border p-2 bg-white">Bienes Inmuebles: <span className="text-teal-700 text-3xl font-extrabold">{formatearDinero(bienes)}</span> </p>
                        <p className="text-2xl text-gray-800 m-3 border p-2 bg-white">Mant. Parques y Ornato: <span className="text-teal-700 text-3xl font-extrabold">{formatearDinero(parques)}</span> </p>
                        <p className="text-2xl text-gray-800 m-3 border p-2 bg-white">Recolección de Basura: <span className="text-teal-700 text-3xl font-extrabold">{formatearDinero(basura)}</span> </p>
                        <p className="text-2xl  text-gray-800 m-3 border p-2 bg-white">Total Trimestral: <span className="text-teal-700 text-3xl font-extrabold">{formatearDinero(total)}</span> </p>

                    </div>

                    <p className="text-gray-600 text-sm mt-5">**El resumen anterior corresponde un valor aproximado del monto a pagar, en caso de comercios no está contemplado el importe por concepto de patentes**</p>

                </div>
                :
                <div className="md:w-1/2 lg:w-3/5 p-3 mx-5 text-center flex items-center justify-center shadow-xl bg-cyan-50">
                    <h2 className="text-xl lg:text-2xl font-semibold ">Aquí verás el resumen de tus <span >Impuestos</span>
                    </h2>

                </div>}


        </>

    )
}

export default Resumen