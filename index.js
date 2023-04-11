//variables
//sets variable called score to zero
var score = 0;
var cursorCost = 2;
var cursors = 0;

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
function Save(){}