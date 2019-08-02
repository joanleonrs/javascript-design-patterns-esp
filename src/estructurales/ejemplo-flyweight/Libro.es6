class Libro {
    constructor(id, titulo, autor , genero , nroPaginas, ISBN ,checkoutFecha,
                    checkoutMiembro, fechaRetorno, disponibilidad){
        
        this.id = id;
        this.autor = autor;
        this.genero = genero;
        this.nroPaginas = nroPaginas;
        this.ISBN = ISBN;
        this.checkoutFecha = checkoutFecha;
        this.checkoutMiembro = checkoutMiembro;
        this.fechaRetorno = fechaRetorno;
        this.disponibilidad = disponibilidad;

    }

    actualizarEstadoCheckout(id, nuevoEstado, checkoutFecha,
                                     checkoutMiembro, fechaRetorno){
        this.id = id;
        this.disponibilidad = nuevoEstado;
        this.checkoutFecha = checkoutFecha;
        this.checkoutMiembro = checkoutMiembro;
        this.fechaRetorno = fechaRetorno;
    }

    extenderPeriodoCheckout(id, nuevaFechaRetorno){
        this.id = id;
        this.fechaRetorno = nuevaFechaRetorno;
    }
}

export default Libro;