// costanti globali
const grid = document.getElementById("grid")
const buttonPlay = document.getElementById("button")

//L'utente clicca il bottone per generare una griglia
buttonPlay.addEventListener("click",
    function () {
        for (let i = 0; i < 100; i++) {
            const newSquare = createGridSquare("div","square");
            console.log(newSquare);
            
            grid.append(newSquare);
        }
}
   
)



//FUNZIONE
function createGridSquare(tagType,nameClass) {
    const newElement = document.createElement(tagType);
    newElement.classList.add(nameClass);
    return newElement;
}