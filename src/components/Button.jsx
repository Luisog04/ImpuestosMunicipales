import React from 'react'

function Button({operacion, fn}) {
    return (
        <button className="h-10 w-10 flex items-center justify-center font-bold text-white text-4xl bg-teal-600 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-teal-600"
            onClick={fn}
        >
            {operacion}
        </button>
    )
}

export default Button