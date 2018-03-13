"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('This loads, hurray!');
    generatedatalist();

}

function generatedatalist() {
    let datalist = document.querySelector("#names").innerHTML;
    let pokemonlijst = [] /*api Fetch*/;
    for(let i = 0;i<pokemonlijst.length;i++){
        let pokemonnaam = pokemonlijst[i];
        datalist += `<option value=${pokemonnaam}`;
    }
}