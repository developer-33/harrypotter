const baseURL =  "https://api.potterdb.com";
movies = "v1/movies";
spells = "v1/spells";
// characters = "v1/characters";
potions = "v1/potions";
let actualCharacters  = []
let characters1 = []
let characterCard = []
const card = document.getElementById("card");





let fetchAllCharcters =  async() => {
    try{
        let response = await fetch(`${baseURL}/v1/characters`);
       let harry = await response.json();
       let actualCharacters = harry.data;
         console.log( "The Cast is: ", actualCharacters);
            return actualCharacters;
}catch(error) {
    console.log("There was a error",error); 
}
}


function renderCharacters(characters) {
    return characters.map(character => `
        <div class="card">
            <h2>${character.attributes.name}</h2>
            <img src="${character.attributes.image}" alt="${character.attributes.name}">
            <p>Species: ${character.attributes.species}</p>
            <p>Gender: ${character.attributes.gender}</p>
            <p>Born: ${character.attributes.born}</p>
            <p>Jobs: ${character.attributes.jobs.join(', ')}</p>
            <a href="${character.attributes.wiki}">More Info</a>
        </div>
    `).join('');
}

// Assuming your container element has the id "container"
let container = document.getElementById("card");

fetchAllCharcters().then(characters => {
    container.innerHTML = renderCharacters(characters);
});

// function renderCharacters(character) {
//     return `
//         <div class="card">
//             <h2>${character.attributes.name}</h2>
//             <img src="${character.attributes.image}" alt="${character.attributes.name}">
//             <p>Species: ${character.attributes.species}</p>
//             <p>Gender: ${character.attributes.gender}</p>
//             <p>Born: ${character.attributes.born}</p>
//             <p>Jobs: ${character.attributes.jobs.join(', ')}</p>
//             <a href="${character.attributes.wiki}">More Info</a>
//         </div>
//     `;
// }

// let character = {
//     attributes: {
//         alias_names: [],
//         animagus: null,
//         blood_status: null,
//         boggart: null,
//         born: "Before 1927",
//         died: null,
//         eye_color: null,
//         family_members: [],
//         gender: "Male (most likely)",
//         hair_color: null,
//         height: null,
//         house: null,
//         image: "https://static.wikia.nocookie.net/harrypotter/images/a/a6/2HeadedBaby.jpg",
//         jobs: ["Circus performers"],
//         marital_status: null,
//         name: "2-Headed Baby",
//         nationality: null,
//         patronus: null,
//         romances: [],
//         skin_color: null,
//         slug: "2-headed-baby",
//         species: "Human",
//         titles: [],
//         wands: [],
//         weight: null,
//         wiki: "https://harrypotter.fandom.com/wiki/2-Headed_Baby"
//     },
//     id: "e9f3d579-dfac-491c-bf72-9b2ad1d2ba2f",
//     links: { self: '/v1/characters/e9f3d579-dfac-491c-bf72-9b2ad1d2ba2f' },
//     type: "character"
// };/* your character object */
// card.innerHTML = renderCharacters(character);






// function renderCharacters(character){
//     let characters1 = fetchAllCharcters();
//     console.log(characters1);
//     let characterCard = characters1.map(character=> {
//         return `<div class="card">
//         <h2>${character.name}</h2>
//         <p>${character.species}</p>
//         <p>${character.house}</p>
//         <p>${character.patronus}</p>
//         <p>${character.bloodStatus}</p>
//         <p>${character.role}</p>
//         <p>${character.school}</p>
//         <p>${character.deathEater}</p>
//         <p>${character.dumbledoresArmy}</p>
//         <p>${character.orderOfThePhoenix}</p>
//         <p>${character.ministryOfMagic}</p>
//         <p>${character.alias}</p>
//         <p>${character.wand}</p>
//         <p>${character.boggart}</p>
//         <p>${character.animagus}</p>
//         <p>${character.birthday}</p>
//         <p>${character.deathday}</p>
//         <p>${character.actor}</p>
//         <p>${character.image}</p>
//         </div>`
//     })
//     card.innerHTML = characterCard.join("");
// }

// function renderCharacters(character){
//     card.innerHTML = "";
//     character.forEach((character) => {
//         let characterCard = document.createElement("div");
//         characterCard.className = "character-card";

//         let characterName = document.createElement("h2");
//         characterName.textContent = character.name;
//         let image = document.createElement("img");
//         image.src = character.image;
//         let characterDetails = document.createElement("p");
//         characterDetails.textContent = `House: ${character.house}, Role: ${character.role}`;

//         // You can add more details or customize the structure as needed

//         // Append elements to the character card
//         characterCard.appendChild(characterName);
//         characterCard.appendChild(characterDetails);

//         // Append character card to the main card container
//         card.appendChild(characterCard);
// //     });

// }




//            let character = characters1[i];
//            let characterCards = `
//            <div class="card">
//            <h2>${character.name}</h2>
//            <p>${character.species}</p>
//            <p>${character.house}</p>
//            <p>${character.patronus}</p>
//            <p>${character.bloodStatus}</p>
//            <p>${character.role}</p>
//            <p>${character.school}</p>
//            <p>${character.deathEater}</p>
//            <p>${character.dumbledoresArmy}</p>
//            <p>${character.orderOfThePhoenix}</p>
//            <p>${character.ministryOfMagic}</p>
//            <p>${character.alias}</p>
//            <p>${character.wand}</p>
//            <p>${character.boggart}</p>
//            <p>${character.animagus}</p>
//            <p>${character.birthday}</p>
//            <p>${character.deathday}</p>
//            <p>${character.actor}</p>
//            <p>${character.image}</p>
//            </div>`
//            card.innerHTML += characterCards;
//        }
//     }catch(error){
//         console.log("There was a error",error); 
//     }
// }

// async function renderCharacters(){
//     let characters1 = await fetchAllCharcters();
//     console.log(characters1);
//     let characterCards = characters1.map(character=> {
//         return `<div class="card">
//         <h2>${character.name}</h2>
//         <p>${character.species}</p>
//         <p>${character.house}</p>
//         <p>${character.patronus}</p>
//         <p>${character.bloodStatus}</p>
//         <p>${character.role}</p>
//         <p>${character.school}</p>
//         <p>${character.deathEater}</p>
//         <p>${character.dumbledoresArmy}</p>
//         <p>${character.orderOfThePhoenix}</p>
//         <p>${character.ministryOfMagic}</p>
//         <p>${character.alias}</p>
//         <p>${character.wand}</p>
//         <p>${character.boggart}</p>
//         <p>${character.animagus}</p>
//         <p>${character.birthday}</p>
//         <p>${character.deathday}</p>
//         <p>${character.actor}</p>
//         <p>${character.image}</p>
//         </div>`
//     })
//     cards.innerHTML = characterCards.join("");
// }

fetchAllCharcters()
