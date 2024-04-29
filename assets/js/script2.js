const obtenerDigimonAsyncAwait = async() => {
    try{
        const response = await fetch ('http://digimon-api.vercel.app/api/digimon');

        if(!response.ok){
            throw new Error('Hubo un problema al obtener los datos de digimon.');
        }

        const data = await response.json();
        return data;
    } catch (error){
        throw error;
    }
}

(async function(){
    try{
        const data = await obtenerDigimonAsyncAwait();
        console.log('datos de digimon obtenidos con exito', data);
    } catch (error){
        console.error ('Error al obtener datos de digimon', error);
    }
})();