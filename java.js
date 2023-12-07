const baseURL =  "https://api.potterdb.com";
movies = "v1/movies";
spells = "v1/spells";
// characters = "v1/characters";
potions = "v1/potions";
let actualCharacters  = []
let characters1 = []
let characterCards = []
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
fetchAllCharcters()

let renderCharacters = (characters) => {
    // Clear existing content in the card
    card.innerHTML = "";

    // Loop through the characters and create HTML elements
    characters.forEach((character) => {
        let characterCards = document.createElement("div");
        characterCards.classList.add("character-card");

        let characterName = document.createElement("h2");
        characterName.textContent = character.name;

        let characterDetails = document.createElement("p");
        characterDetails.textContent = `House: ${character.house}, Role: ${character.role}`;

        // You can add more details or customize the structure as needed

        // Append elements to the character card
        characterCards.appendChild(characterName);
        characterCards.appendChild(characterDetails);

        // Append character card to the main card container
        card.appendChild(characterCards);
    });
}

// // Fetch characters and render them when the page loads
// window.onload = async () => {
//     try {
//         const characters = await fetchAllCharacters();
//         renderCharacters(characters);
//     } catch (error) {
//         console.error("Error fetching and rendering characters:", error);
//     }
// };
// async function renderCharacters(){
//     let characters1 = await fetchAllCharcters();
//     try{
//        for(let i = 0; i < characters1.length; i++){
//        let currentCharacterObject = characters1[i];
//        card.appendChild(generateCharacterCard(currentCharacterObject));
//        let characterContainer = document.getElementById('charcter-list')
//        characterContainer.innerHTML=""
//        }
//     }catch(error){
//         console.log("There was a error",error); 
//     }
// }
// function generateCharacterCard(){
//     let characterCard = document.createElement("div");
//     characterCard.className = "charcter-Card"
// }

renderCharacters();    






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
