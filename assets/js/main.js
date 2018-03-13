"use strict";

document.addEventListener('DOMContentLoaded', init);
let pokemonlijst = [] /*api Fetch*/;
function init() {
    console.log('This loads, hurray!');
    generatedatalist();

}

function generatedatalist() {
    let datalist = document.querySelector("#names").innerHTML;
    for(let i = 0;i<pokemonlijst.length;i++){
        let pokemonnaam = pokemonlijst[i];
        datalist += `<option value=${pokemonnaam}`;
    }
}
