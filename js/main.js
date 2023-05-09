// costanti globali
const grid = document.getElementById("grid")
const buttonPlay = document.getElementById("button")
const numArray = 100;
const array = Array.from({length:numArray},(_,i) => i + 1);


//L'utente clicca il bottone per generare una griglia
buttonPlay.addEventListener("click",
    function () {
        for (let i = 0; i < 100; i++) {
            const newSquare = createGridSquare("div","square");
            console.log(newSquare);
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
   
)

//click per cambiare colore al quadrato




//FUNZIONE
function createGridSquare(tagType,nameClass) {
    const newElement = document.createElement(tagType);
    newElement.classList.add(nameClass);
    return newElement;
}