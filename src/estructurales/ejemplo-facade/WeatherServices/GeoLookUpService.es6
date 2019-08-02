class GeoLookUpService{
    constructor(){

    }

    getCityForZipCode(zipCode){
        return 'Lima';
    }

    getCountryForZipCode(zipCode){
        return 'Perú';
    }

    getcCoordinatesForZipCode(zipCode){
        return {
            longitude:  "O77°1'41.66'",
            latitude:  "S12°2'35.45'",
        }
    }
}

export default GeoLookUpService;