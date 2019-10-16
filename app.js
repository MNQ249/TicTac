let plyerTurn;
let computerTurn;
const player_user = document.querySelector('#player_user');
const player_computer = document.querySelector('#player_computer');
// const player_user2 = document.querySelector('#player_user2');
const both_tie = document.querySelector('#both_tie');
let counter = 0;
let radios = document.querySelectorAll('input');
const toWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

if (isNaN(parseInt(localStorage.getItem('player-score')))) {
    localStorage.setItem('player-score', 0);
    // localStorage.setItem('player2-score', 0);
    localStorage.setItem('Tie-score', 0);
}

const geetScore = function () {
    let scorePlayer = localStorage.getItem("player-score");
    // let scprePlayer2 = localStorage.getItem("player2-score");
    let scoreTie = localStorage.getItem("Tie-score");
    player_user.innerText = scorePlayer;
    // player_user2.innerText = scprePlayer2;
    both_tie.innerText = scoreTie;

}
geetScore();

//function do refrech page 
document.querySelector('button').addEventListener('click', function () { location.reload(); })

//function pick one of them x or o ex: if x start the next will be o and so on.
const getTurn = function () {
    let pick;
    // if(radios[2].checked){
        playerTurn = true;
        // computerTurn = false;
    // }
    //    else{ 
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                console.log("it is working");
                console.log(radios[i].value);
    
                pick = radios[i].value
                if (pick === "O") {
                    plyerTurn = false
                } else {
                    plyerTurn = true;
                }
            }
    
        }
    //    }
    
    
    
}
getTurn();
//inint new img with set some attribute and append to img

const myFunction = function () {
    let img = document.createElement("img");
    let num = this.id.split('cell')[1]
    console.log(this);
    
    // if(radios[2].checked){
        // cm();
    // }
    // else{
    if (plyerTurn === true) {
        img.setAttribute('id', 'x');
        img.setAttribute("src", "image/xx.png");
        img.setAttribute("width", "100px");
        img.setAttribute("height", "100px");
        img.setAttribute("alt", "x");
        this.appendChild(img);

        //this for loop seach whole array inside array to find location of each them           
        for (let i = 0; i < toWin.length; i++) {
            for (let j = 0; j < toWin[i].length; j++) {
                if (num == toWin[i][j]) {
                    toWin[i][j] = 'X';
                }
            }
        }
        console.log(toWin);
        plyerTurn = false;

    } else {

        img.setAttribute('id', 'o');
        img.setAttribute("src", "image/ooo.png");
        img.setAttribute("width", "100px");
        img.setAttribute("height", "100px");
        img.setAttribute("alt", "o");
        this.appendChild(img);
        plyerTurn = true;

        for (let i = 0; i < toWin.length; i++) {
            for (let j = 0; j < toWin[i].length; j++) {
                if (num == toWin[i][j]) {
                    toWin[i][j] = 'O'
                }
            }
        }
    }
    counter++;
    this.removeEventListener('click', myFunction);
    checkHowWin()
    // }
}
//to call all box then add new listenerevent 
const cellX_O = document.querySelectorAll(".cell");
for (let i = 0; i < cellX_O.length; i++) {
    cellX_O[i].addEventListener('click', myFunction);

}
//function the way to win
const checkHowWin = function () {
    if (toWin[0][0] == toWin[0][1] && toWin[0][0] == toWin[0][2]) {
        alert(toWin[0][0] + " - WIN");
        endGame();
    }

    else if (toWin[1][0] == toWin[1][1] && toWin[1][0] == toWin[1][2]) {
        alert(toWin[1][1] + " - WIN");
        endGame();
    }


    else if (toWin[2][0] == toWin[2][1] && toWin[2][0] == toWin[2][2]) {
        alert(toWin[2][0] + " - WIN");
        endGame();
    }

    else if (toWin[3][0] == toWin[3][1] && toWin[3][0] == toWin[3][2]) {
        alert(toWin[3][0] + " - WIN");
        endGame();
    }


    else if (toWin[4][0] == toWin[4][1] && toWin[4][0] == toWin[4][2]) {
        alert(toWin[4][0] + " - WIN");
        endGame();
    }

    else if (toWin[5][0] == toWin[5][1] && toWin[5][0] == toWin[5][2]) {
        alert(toWin[5][0] + " - WIN");
        endGame();
    }
    else if (toWin[6][0] == toWin[6][1] && toWin[6][0] == toWin[6][2]) {
        alert(toWin[6][0] + " - WIN");
        endGame();
    }
    else if (toWin[7][0] == toWin[7][1] && toWin[7][0] == toWin[7][2]) {
        alert(toWin[7][0] + " - WIN");
        endGame();
    }
    else if (counter == 9) {
        alert("Tie");
        both_tie.innerText = parseInt(both_tie.innerText) + 1;
        console.log(both_tie.innerText);
        localStorage.setItem('Tie-score', both_tie.innerText);
    }
}
//
const endGame = function () {
    for (let i = 0; i < cellX_O.length; i++) {
        cellX_O[i].removeEventListener('click', myFunction);
    }
    player_user.innerText = parseInt(player_user.innerText) + 1;
    localStorage.setItem('player-score', player_user.innerText);
    // player_user2.innerText = parseInt(player_user2.innerText) + 1;
    // localStorage.setItem('player2-score', player_user2.innerText);
}

//dont forget work here
// const cm = function () {
//     let img = document.createElement("img");
//     let num = Math.floor(Math.random() * 9);
//     let plaa = 'cell' + num;
    
//     if(!document.querySelector(`#${plaa}>img`)){
//         if(document.querySelector(`#${plaa}>img`).getAttribute('alt') != 'x'){

//             console.log(plaa);
            
//             img.setAttribute('id', 'o');
//             img.setAttribute("src", "image/ooo.png");
//             img.setAttribute("width", "100px");
//             img.setAttribute("height", "100px");
//             img.setAttribute("alt", "o");
//             document.querySelector(`#${plaa}`).appendChild(img);
//             console.log(document.querySelector(`#${plaa}>img`).getAttribute('alt'));
//             plyerTurn = true;
            
//             for (let i = 0; i < toWin.length; i++) {
//                 for (let j = 0; j < toWin[i].length; j++) {
//                     if (num == toWin[i][j]) {
//                         toWin[i][j] = 'O'
//                     }
//                 }
//             }
//         }
//         else{
//        cm()
//     }
// }

// }

//this for try play agin
const tryAgain = document.querySelector('#try-again');
const restarGame = function () {
    if (geetScore == NaN) {
    }
    localStorage.setItem('player-score', 0);
    location.reload();
    // localStorage.setItem('player2-score', 0);
    // location.reload();
    localStorage.setItem('Tie-score', 0);
    location.reload();
    // const removeImageElement = document.querySelectorAll('img');
    // console.log(removeImageElement);   
    //     for(let j =0 ; j< removeImageElement.length; j++){
    //         removeImageElement[j].remove();
    // removeImageElement[j].removeAttribute('id');
    // removeImageElement[j].removeAttribute("width" );
    // removeImageElement[j].removeAttribute("src");
    // removeImageElement[j].removeAttribute("height");
    // removeImageElement[j].removeAttribute("alt");
    // this.appendChild();
    // removeImageElement[j].addEventListener('click', myFunction);
    // }

    //     for (let i = 0; i < cellX_O.length; i++) {
    //         cellX_O[i].addEventListener('click', myFunction);

    //     }
    //     toWin = [
    //         [0, 1, 2],
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [6, 4, 2]
    //     ]
}
tryAgain.addEventListener('click', restarGame);