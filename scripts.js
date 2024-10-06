// container for number value
let number = 0;

// change color
function changecolor(){
if( number > 0){
    document.getElementById("value").style.color = "green";
} else if( number < 0){
    document.getElementById("value").style.color = "red";
} else{
    document.getElementById("value").style.color = "black";
}
}

// creating click event
function add() {
    document.querySelector(".add").addEventListener("click", function() {
        number += 1;
        document.getElementById("value").textContent = number;
        changecolor();
    });
}

function subtract() {
    document.querySelector(".sub").addEventListener("click", function() {
        number -= 1;
        document.getElementById("value").textContent = number;
        changecolor();
    });
}

function reset(){
    document.querySelector(".reset").addEventListener("click", function(){
        number = 0;
        document.getElementById("value").textContent = number;
        changecolor();
    });
}

add();
subtract();
reset();
