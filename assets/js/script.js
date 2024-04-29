const obtenerDigimonPromesa = () => {

    return new Promise (function(resolve , reject){
        fetch('http://digimon-api.vercel.app/api/digimon')
        .then (function(digimones){
            if(!digimones.ok){
                throw new Error("Error");
            }
            return digimones.json();
        })
        .then (function(data){
            resolve(data);
        })
        .catch(function(error){
            reject(error);
        })
    });
}

obtenerDigimonPromesa()
    .then((digimones) => {
        digimones.map((digimon) => {
            console.log(digimon);
        })
    }) .catch((error) => {
        console.log('el error es: ${error}');
    })

generarSaludo();