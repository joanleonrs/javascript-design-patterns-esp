import LibroFactory from './LibroFactory';

class RegistroLibroManager{
    constructor(){
        this.libroFactory = new LibroFactory();
        var registroLibrosDatabase = {};
    }

    agregarRegistroLibro(id, titulo, autor , genero , nroPaginas, ISBN, 
                        nuevoEstado, checkoutFecha,checkoutMiembro, fechaRetorno){

        let libro = libroFactory.crearLibro(titulo, autor , genero , nroPaginas, ISBN);
        registroLibrosDatabase[id] = {        
            checkoutMiembro: checkoutMiembro,            
            checkoutFecha: checkoutFecha,            
            fechaRetorno: fechaRetorno,            
            disponibilidad: disponibilidad,            
            libro: libro
        };
    }

    actualizarEstadoCheckout(id, nuevoEstado, checkoutFecha,
        checkoutMiembro, fechaRetorno){

        let registro  = registroLibrosDatabase[id];
        registro.disponibilidad = nuevoEstado;
        registro.checkoutFecha = checkoutFecha;
        registro.checkoutMiembro = checkoutMiembro;
        registro.fechaRetorno = fechaRetorno;
    }

    extenderPeriodoCheckout(id, nuevaFechaRetorno){
        registroLibrosDatabase[id].fechaRetorno = nuevaFechaRetorno;
    }


}