console.log("Welcome to Tac Toe");

let music_long = new Audio("music_long.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let isgameover = false;

let turn = "X"; // intial turn

// Function to change the turn 

const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}

// Function to check the win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxText")
    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]

    win.forEach(e => {
        if( (boxText[e[0]].innerText === (boxText[e[1]].innerText)) && (boxText[e[1]].innerText === (boxText[e[2]].innerText)) && (boxText[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width="200px"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            gameover.play()

            // Stop the music and replay it after a win
            music_long.pause(); // Pause the current music
            music_long.currentTime = 0; // Reset music to start
            music_long.play(); // Play it again
        }
    })
}

// // game logic
music_long.play()
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn()
            audioTurn.play()
            checkWin()
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})


// Add onclick listener to reset button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', ()=>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element => {
        element.innerText = "" // sarre gayab ho jaye
    });
    turn = "X"; 
    isgameover = false

    // Stop the background music and reset it
    music_long.pause(); // Stop the music
    music_long.currentTime = 0; // Reset the music to the beginning


    document.querySelector(".line").style.width = "0vw";

    document.querySelector(".line").style.transform = "none"; // Reset transform (position and rotation)

    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

    // Reset the image and hide it
    const imgBox = document.querySelector('.imgbox').getElementsByTagName('img')[0];
    imgBox.style.width = "none"; // Hide the image


    
})



