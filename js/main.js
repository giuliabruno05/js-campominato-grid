//dichiaro una variabile
let numArray = 100;


// costanti globali
const grid = document.getElementById("grid")
const buttonPlay = document.getElementById("button")
const array = Array.from({length:numArray},(_,i) => i + 1);



//L'utente clicca il bottone per generare una griglia
buttonPlay.addEventListener("click",
    function () {
        
        // salvo la difficoltà del livello

        const levelPlay = document.getElementById("level").value;
        if (levelPlay === "easy") {

            nameClass="easy";

            generaGridSquare();

        } else if (levelPlay === "medium") {// SE il livello scelto è medium la griglia diventa da 9
            numArray = 81;

            nameClass="medium";

            generaGridSquare();
            
        } else {//SE il livello scelto è hard la griglia diventa da 7
            numArray = 49;
            
            nameClass="hard";

            generaGridSquare();
        }
        
}
   
)






//FUNZIONE
function createGridSquare(tagType,nameClass) {
    const newElement = document.createElement(tagType);
    newElement.classList.add(nameClass);
    return newElement;
}
// funzione per generare la grigli per tutti livelli
function generaGridSquare() {
    for (let i = 0; i < numArray; i++) {
        const newSquare = createGridSquare("div",nameClass);

        newSquare.addEventListener("click",
        
        function () {
            newSquare.classList.add("squareBlue");
            console.log(array[i]);
        }
        )
        
        grid.append(newSquare);

        newSquare.append(array[i]);
    }
}