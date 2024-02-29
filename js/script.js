
const prevBut = document.getElementById("prev-page");
const nextBut = document.getElementById("next-page");

const charList = document.getElementById("character-list");

const citadel = "https://rickandmortyapi.com/api/character/?page=";

let pages = 1; 
const maxpages = 42;
//no he sabido sacar del fetch una variable de paginas, asi que la declaro


RickCallback(pages);


nextBut.addEventListener('click', () => {
    pages++;
    if (pages === maxpages){pages = 1;}
    RickCallback(pages);
});
prevBut.addEventListener('click', () => {
    pages--;
    RickCallback(pages);
});



function RickCallback (page){
    fetch (citadel+page)
    .then ((response) => {
        if(!response.ok){
            throw new Error("Error connection !");
        }
        return response.json();
    })
    .then((response) => {
        charList.innerHTML='';

        response.results.forEach((alien) => {
        let addAlien = document.createElement("li");
        addAlien.innerHTML=(
            '<div class="alien">'
            + '<img src="'+alien.image+' "/>'
            + '<strong> Name : '+alien.name+'</strong>'
            + '<strong> Species : '+alien.species+'</strong>'
            + '</div>'
        );
        charList.appendChild(addAlien);
        });
    });
}