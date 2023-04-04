import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import Resumen from "./components/Resumen"

function App() {

  const [precio, setPrecio] = useState(0)
    const [categoria, setCategoria] = useState(0)

  return (
    <div>
      <Header />
      <div className="md:flex mx-auto container justify-between md:px-10">
        <Formulario 
        precio={precio}
        setPrecio={setPrecio}
        categoria={categoria}
        setCategoria={setCategoria}
        />
        <Resumen 
        categoria={categoria}
        precio={precio}
        />
      </div>

    </div>
  )
}

export default App
