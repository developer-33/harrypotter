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
async function renderCharacters(){
    let characters1 = await fetchAllCharcters();
    try{
       for(let i = 0; i < characters1.length; i++){
       let currentCharacterObject = characters1[i];
       card.appendChild(generateCharacterCard(currentCharacterObject));
       }
    }catch(error){
        console.log("There was a error",error); 
    }
}

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
