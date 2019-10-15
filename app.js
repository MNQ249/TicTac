


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
document.querySelector('button').addEventListener('click', function(){ location.reload();})

let counter = 0;

let radios = document.querySelectorAll('input');

let plyerTurn;
const player_user = document.querySelector('#player_user');
const player_computer = document.querySelector('#player_computer');
const player_user2 = document.querySelector('#player_user2');
const both_tie = document.querySelector('#both_tie');

const getTurn = function () {
    let pick;
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



}
getTurn();

const myFunction = function () {

    let img = document.createElement("img");

    let num = this.id.split('cell')[1]
    if (plyerTurn === true) {
        img.setAttribute('id', 'x');
        img.setAttribute("src", "image/xx.png");
        img.setAttribute("width", "100px");
        img.setAttribute("height", "100px");
        img.setAttribute("alt", "x");
        this.appendChild(img);

        for (let i = 0; i < toWin.length; i++) {
            for (let j = 0; j < toWin[i].length; j++) {
                if (num == toWin[i][j]) {
                    toWin[i][j] = 'X'
                }

            }


        }

        console.log(toWin)


        plyerTurn = false;



    } else {

        img.setAttribute('id', 'o');
        img.setAttribute("src", "image/ooo.png");
        img.setAttribute("width", "100px");
        img.setAttribute("height", "100px");
        img.setAttribute("alt", "o");

        this.appendChild(img);
        // recordPlay();
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

}

const cellX_O = document.querySelectorAll(".cell");
for (let i = 0; i < cellX_O.length; i++) {
    cellX_O[i].addEventListener('click', myFunction);

}


// const recordPlay = function () {
//     const hill = [];
//     for (let i = 0; i < myFunction.length; i++) {
//         // const result = array[i];
//         hill.push(i);
//         console.log(hill);
//     }
// }



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
    }
}



const endGame = function () {
    for (let i = 0; i < cellX_O.length; i++) {
        cellX_O[i].removeEventListener('click', myFunction);

    }
    player_user.innerText = player_user.innerText + 1
}


// const scorePlayUser = 0;
// const scorePlayComputer = 0;
// const Tieplay =0;

// if()

