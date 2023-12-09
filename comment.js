// let renderCharacters = (characters) => {
//     // Clear existing content in the card
//     card.innerHTML = "";

//     // Loop through the characters and create HTML elements
//     characters.forEach((character) => {
//         let characterCards = document.createElement("div");
//         characterCards.classList.add("character-card");

//         let characterName = document.createElement("h2");
//         characterName.textContent = character.name;

//         let characterDetails = document.createElement("p");
//         characterDetails.textContent = `House: ${character.house}, Role: ${character.role}`;

//         // You can add more details or customize the structure as needed

//         // Append elements to the character card
//         characterCards.appendChild(characterName);
//         characterCards.appendChild(characterDetails);

//         // Append character card to the main card container
//         card.appendChild(characterCards);
//     });
// }

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


let fetchAllCharcters = async () => {
     try{
        let response = await fetch("http://hp-api.herokuapp.com/api/characters");
        let characters = await response.json();
        return characters;
     }
}