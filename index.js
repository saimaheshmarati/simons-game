let gameseq = [];
let userseq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2")

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}



function levelup() {
    userseq =[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIndx = Math.floor(Math.random() * 4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`)
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);

}

function checkAnswer(idx) {
    // console.log("current level : ", level);
    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
          setTimeout(levelup,1000);
        }
    } else {
        h2.innerHTML = `Game over your score was <b>${level}</b> <br>press any key to start.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    } 


}
function Btnpress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);
    // console.log(usersq);
    checkAnswer(userseq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (Btn of allBtns) {
    Btn.addEventListener("click", Btnpress);
}
function reset(){
    level = 0;
    started =false;
    userseq = [];
    gameseq =[];
}