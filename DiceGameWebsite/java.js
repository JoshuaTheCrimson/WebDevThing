var rn1 = Math.floor(Math.random()*6)
console.log(rn1);

var rn2 = Math.floor(Math.random()*6)
console.log(rn2);

var arr =[1,2,3,4,5,6]


// // left 
var leftdice = document.firstElementChild.querySelector(".leftdice img")
leftdice.setAttribute("src","./images/dice"+arr[rn1]+".png")

// // right
var rightdice = document.firstElementChild.querySelector(".rightdice img")
rightdice.setAttribute("src","./images/dice"+arr[rn2]+".png")

var winner = document.lastElementChild.querySelector(".winner h2")


if(rn1>rn2){
winner.innerHTML = "Player 1 won";
}
else if(rn1 == rn2){
    winner.innerHTML="Draw!"
}
else{
    winner.innerHTML="Player 2 won"
}

