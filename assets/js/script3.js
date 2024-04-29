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

const MostrarDigimon = async () => {
    const digimonRow = document.getElementById('digimonRow');
    try{
        const digimones = await obtenerDigimonAsyncAwait();
        digimones.map(digimon =>{
            const cardCol = document.createElement('div');
            cardCol.classList.add('col-sm-4');

            const card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('mt-2');
            card.classList.add('md-2');

            const cardImg = document.createElement('img');
            cardImg.classList.add('card-img-top');
            cardImg.src = digimon.img;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = digimon.name;

            const cardText = document.createElement('p');
            cardText.classList.add('card-title');
            cardText.textContent = 'nivel: ${digimon.level}';
        });
    } catch (error) {
    console.error('error al obtener datos de digimon:', error);
    }
}

MostrarDigimon();

console.log("holaaaaaaaaaaaa");