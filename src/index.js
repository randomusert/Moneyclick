//variables
//sets variable called score to zero

var score = 0;
var cursorCost = 2;
var cursors = 0;
var clickPower = 5
var SuperCursorCost = 20
var SuperCursor  = 0
var clicker = 0
var clickerCost = 100


//load the save on the website loading
window.onload = function() {
    Load()
}

//buy cursors funciton
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


//buy super cursors function 
function BuySuperCursors() {
    if (score >= SuperCursorCost) {
        score = score - SuperCursorCost
        SuperCursor = SuperCursor + 1
        SuperCursorCost = Math.round(SuperCursorCost * 10)
        document.getElementById("supercursorcost").innerHTML = SuperCursorCost
        document.getElementById("score").innerHTML = score
        document.getElementById("supercursor").innerHTML = SuperCursor
    }
}



function getmoney() {
    score = score + clickPower;
    document.getElementById("score").innerHTML = score;
}



setInterval(function() {
    score = score + cursors *5;
    document.getElementById("score").innerHTML = score;
}, 1000)


setInterval(function() {
    score = score + SuperCursor * 10
    document.getElementById("score").innerHTML = score;
},1000)


//the save function
function Save(){
    var gamesave = {
        score: score,
        cursorCost: cursorCost,
        cursors: cursors,
        clickPower:clickPower,
        SuperCursor: SuperCursor,
        SuperCursorCost: SuperCursorCost 
    }
    localStorage.setItem("gamesave", JSON.stringify(gamesave))
}


function Load() {
    var SavedGame = JSON.parse(localStorage.getItem("gamesave"))

    if (typeof SavedGame.score !== "undefined") score = SavedGame.score
    if (typeof SavedGame.cursorCost !== "undefined") cursorCost = SavedGame.cursorCost
    if (typeof SavedGame.cursors !== "undefined") cursors = SavedGame.cursors
    if (typeof SavedGame.clickPower !== "undefined") clickPower = SavedGame.clickPower
    if (typeof SavedGame.SuperCursorCost !== "undefined") SuperCursorCost = SavedGame.SuperCursorCost
    if(typeof SavedGame.SuperCursor !== "undefined") SuperCursor  = SavedGame.SuperCursor
}


setInterval(function() {
    Save()
},30000)


function BuyClickers() {
    if (score >= clickerCost) {
        score = score - clickerCost
        clicker = clicker + 1
        clickerCost = Math.round(clickerCost * 70)
        

    }
}