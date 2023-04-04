import { useState } from "react"
import Button from "./Button"
import {formatearDinero} from "../helpers"

function Formulario({precio, setPrecio, categoria, setCategoria}) {

    const MIN = 0
    const MAX = 50000000
    const STEP = 500000


    

    function handleChange(e) {
        setPrecio(+e.target.value)
    }

    function handleClickMenos(e) {
        const valor = precio - STEP

        if(valor < MIN) {
            alert('Cantidad no Válida')
            return;
        }
        setPrecio(valor)
    }

    function handleClickMas(e) {
        const valor = precio + STEP
        if(valor > MAX) {
            alert('Cantidad no Válida')
            return;
        }
        setPrecio(valor)
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 p-3 mx-5 text-center shadow-xl bg-cyan-50">
        <h2 className="text-xl lg:text-2xl font-semibold mt-10">Completa los campos y tendrás el calculo de <span className="text-teal-900">tus Impuestos</span></h2>

        <div className="flex justify-between mt-5">

            <Button
                operacion = '-'
                fn= {handleClickMenos}
            />
            <Button
                operacion = '+'
                fn= {handleClickMas}
            />
        </div>

        <div className="mt-5 accent-teal-500 hover:accent-cyan-500">
            <label className="text-xl md:text-2xl font-normal text-teal-900 block mb-5">Valor Fiscal de la Propiedad</label>
            <input type="range"
            min={MIN}
            max={MAX} 
            step={STEP}
            value={precio}
            onChange={handleChange}
            className="w-full "/>

            <p className="text-2xl md:text-4xl font-bold text-teal-800 mb-10">{formatearDinero(precio)}</p>

            <h3 className="text-xl lg:text-2xl font-semibold p-3">
                Elige la categoría en la que se encuentra <span className="text-teal-900">tu propiedad</span> 
            </h3>

            <select
                className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-lg font-semibold text-gray-700"
                value={categoria}
                onChange={e => setCategoria(+e.target.value)}
            >
                <option value="0" disabled>--Seleccione--</option>
                <option value="1">Residencial</option>
                <option value="2">Barbería, Basar, local pequeño 0-8kg</option>
                <option value="3">Pulpería, floristería, Cantinas 8-30kg</option>
                <option value="4">Carnicerías, Bodegas Alimentos, Sodas 30-50kg </option>
                <option value="5">Gasolineras, Cines, Plaza Médica 50-80kg</option>
                <option value="6">Distribuidoras, Supermercados... 80-150kg </option>
                <option value="7">Beneficios, Centros Comerciales... {'>'}150kg</option>
            </select>
        </div>

    </div>
  )
}

export default Formulario