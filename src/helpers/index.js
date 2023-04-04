const formatearDinero = (valor ) => {
    const formatter = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'CRC'
    })

    return formatter.format(valor)
}
function calcularRecBasura(cantidad) {
    let montoBasura;

    if(cantidad <= 2 ) {
        montoBasura = 14815
    }
    if(cantidad === 3) {
        montoBasura = 56295
    }
    if(cantidad === 4) {
        montoBasura = 93330
    }
    if(cantidad === 5) {
        montoBasura = 148145
    }
    if(cantidad === 6) {
        montoBasura = 185180
    }
    if(cantidad === 7) {
        montoBasura = 278510
    }
    if(cantidad === 8) {
        montoBasura = 648870
    }
    return montoBasura
}
    

export {formatearDinero, calcularRecBasura}