



// let x = document.getElementById("tapleChange'");
// x.addEventListener("click", myFunction);

// const myFunctionO= function(eO) {

   
//   }

// const cellO = document.querySelectorAll(".cell");
// for( let i=0; i<cellO.length; i++){
//     cellO[i].addEventListener('click', myFunctionO);
// }

let radios = document.querySelectorAll('input');

let plyerTurn;

const getTurn = function(){
    let pick;
    for (let i = 0; i < radios.length; i++) {

    
        
       if(radios[i].checked ){
           console.log("it is working");
           console.log(radios[i].value);
           
           pick =  radios[i].value
          if (pick === "O"){
            plyerTurn = false
        }else{
            plyerTurn = true;
        }
       }
        
    }
   
   
    
} 
getTurn();

const myFunction = function() {

    let img = document.createElement("img");
if (plyerTurn === true){
    img.setAttribute('id','x');
    img.setAttribute("src", "image/xx.png");
    img.setAttribute("width", "100px");
    img.setAttribute("height", "100px");
    img.setAttribute("alt", "x");
    this.appendChild(img);
    plyerTurn = false;
    this.removeEventListener('click',myFunction);
    
    
}else{
    
    img.setAttribute('id','o');
    img.setAttribute("src", "image/ooo.png");
    img.setAttribute("width", "100px");
    img.setAttribute("height", "100px");
    img.setAttribute("alt", "o");
    
    this.appendChild(img);
    plyerTurn= true;
    this.removeEventListener('click',myFunction);
   

}
    
  }

const cellX_O = document.querySelectorAll(".cell");
for( let i=0; i<cellX_O .length; i++){
    cellX_O [i].addEventListener('click', myFunction);
   
}









  
