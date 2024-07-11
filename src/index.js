//variables
//sets variable called score to zero
var score = 0;
var cursorCost = 2;
var cursors = 0;
//load the save on the website loading
window.onload = function() {
    Load()
}

function BuyCursors() {
    if(score >= cursorCost) {
        score = score - cursorCost;
        cursors = cursors + 1;
        cursorCost = Math.round(cursorCost * 5);
        document.getElementById("cursors").innerHTML = cursors;
        document.getElementById("score").innerHTML = score;
        document.getElementById("cursorCost").innerHTML = cursorCost;
    }
}


function getmoney() {
    score = score + 5;
    document.getElementById("score").innerHTML = score;
}


setInterval(function() {
    score = score + cursors *5;
    document.getElementById("score").innerHTML = score;
}, 1000)



//the save function
function Save(){
    var gamesave = {
        score: score,
        cursorCost: cursorCost,
        cursors: cursors
    }
    localStorage.setItem("gamesave", JSON.stringify(gamesave))
}
function Load() {
    var SavedGame = JSON.parse(localStorage.getItem("gamesave"))

    if (typeof SavedGame.score !== "undefined") score = SavedGame.score
    if (typeof SavedGame.cursorCost !== "undefined") cursorCost = SavedGame.cursorCost
    if (typeof SavedGame.cursors !== "undefined") cursors = SavedGame.cursors
}
setInterval(function() {
    Save()
},30000)
