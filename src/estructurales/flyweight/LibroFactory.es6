import Libro from './Libro';

class LibroFactory{
    constructor(){
        var librosExistentes = [];
    }

    crearLibro(titulo, autor , genero , nroPaginas, ISBN){
        let libroExistente = librosExistentes[ISBN];

        if(libroExistente){
            return libroExistente;
        }
        else{
            let libro = new Libro(titulo, autor, genero , nroPaginas, ISBN);
            librosExistentes[ISBN] =  libro;
            return libro;
            
        }
    }
}