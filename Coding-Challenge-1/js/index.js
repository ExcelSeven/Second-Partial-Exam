fetchPKMN(pkmn) {
    let url = `https://pokeapi.co/api/v2/${pkmn}/`

    let settings = {
        method : 'GET'.
    };
    
    fetch(url, settings)
        .then(response => {
            if(response.ok) {
                return response.json();
            }

            throw new Error(response.statusText);
        } )
        .then(responseJSON => {
            display(responseJSON);
        } )
        .catch(err => {
            console.log(err.message);
            let results = document.querySelector('.js-search-results')
            results.innerHTML = "Pokemon not found.";
        } )
}

function display(data) {
    let results = document.querySelector('.js-search-results')
    results.innerHTML = "";

    result.innerHTML += `
        <div>
            <h2>
                ${data.pokemon.name} 
            </h2>            
            <img src="${data.pokemon.sprites[1]}" />
            <p>
                ${data.pokemon.moves} 
            </p>
            <p>
                ${data.pokemon.stats} 
            </p>
        </div>
    `;
}

function sbForm() {
    let sButton = document.querySelector('.sbt')

    sButton.addEventListener( 'click', ( event ) => {
        event.preventDefault();

    let pkmn = document.querySelector('#js-query');

    fetchPKMN(pkmn);
    } )
}

function init() {
    sbtForm();
}

init();
