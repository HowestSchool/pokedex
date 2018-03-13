"use strict";

document.addEventListener('DOMContentLoaded', init);
let pokemonlijst = [];

function init() {
    console.log('This loads, hurray!');
    fetchPokemon();
    generatedatalist();

}

function fetchPokemon() {
    let aantalPokemon = 10;
    for (let i = 1; i < aantalPokemon; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/", {
            headers: new Headers({'Accept': 'application/json'})
        }).then(function (response) {
            if (response.ok === true) {
                return response.json();
            }
        }).then(function (data) {
            pokemonlijst.push(data.name);
            console.log(pokemonlijst);
        }).catch(errorHandling);
    }
}
function errorHandling(error){console.log(error);}
function generatedatalist() {
    let datalist = document.querySelector("#names").innerHTML;
    for(let i = 0;i<pokemonlijst.length;i++){
        let pokemonnaam = pokemonlijst[i];
        datalist += `<option value=${pokemonnaam}`;
    }
}
