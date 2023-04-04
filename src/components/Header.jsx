import React from 'react'

function Header() {
  return (
    <div className='text-center m-50 p-5'>
        <h1 className='text-4xl  font-extrabold mb-5 text-teal-600'>
          Calculadora de Impuestos Municipales
        </h1>
        <p className='texl-lg md:text-xl font-semibold '>Obtén un resumen {''} <span className=' text-teal-900'>aproximado </span> del importe de su <span className=' text-teal-900'> propiedad</span> </p>
    </div>
  )
}

export default Header