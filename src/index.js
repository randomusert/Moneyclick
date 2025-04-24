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
    game.clicks++;
    game.totalMoney += clickPower;
    
    document.getElementById("score").innerHTML = score;
}



setInterval(function() {
    score = score + cursors *5;
    document.getElementById("score").innerHTML = score;
}, 1000)


setInterval(function() {
    checkAchievements();
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
        SuperCursorCost: SuperCursorCost,
        clicks: game.clicks,
        totalMoney: game.totalMoney,
        unlockedAchievements: achievements.filter(achievement => achievement.unlocked).map(achievement => achievement.id) 
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
    if(typeof SavedGame.clicks !== "undefined") game.clicks = SavedGame.clicks
    if(typeof SavedGame.totalMoney !== "undefined") game.totalMoney = SavedGame.totalMoney
    if(typeof SavedGame.unlockedAchievements !== "undefined") {
        SavedGame.unlockedAchievements.forEach(id => {
            const achievement = achievements.find(achievement => achievement.id === id);
            if (achievement) {
                achievement.unlocked = true;
            }
        });
    }
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

//game object
const game = {
    clicks: 0,
    totalMoney: 0,
    clickers: 0,
    // Other game properties
};


//avancements array
const achievements = [
    {
        id: "first_click",
        name: "First Click!",
        description: "Click the money once.",
        condition: (game) => game.clicks >= 1,
        unlocked: false
    },
    {
        id: "hundred_clicks",
        name: "Click Centurion",
        description: "Click the money 100 times.",
        condition: (game) => game.clicks >= 100,
        unlocked: false
    },
    {
        id: "thousand_dollars",
        name: "Thousandaire",
        description: "Accumulate $1,000.",
        condition: (game) => game.totalMoney >= 1000,
        unlocked: false
    },
    {
        id: "million_dollars",
        name: "Millionaire",
        description: "get 1 million $",
        condition: (game) => game.totalMoney >= 1000000,
        unlocked: false
    },
    {
        id: "thousand_clicks",
        name: "Ultra efficient clicker",
        description: "click one million times. grazy to get without an auto clicker",
        condition: (game) => game.clicks >= 1000,
        unlocked: false
    }
];



// advancements




function displayAchievement(achievement) {
    const notification = document.createElement("div");
    notification.className = "fixed top-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg text-lg";
    notification.innerText = `🎉 Achievement Unlocked: ${achievement.name} - ${achievement.description}`;
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}



function checkAchievements() {
    achievements.forEach(achievement => {
        if (!achievement.unlocked && achievement.condition(game)) {
            achievement.unlocked = true;
            displayAchievement(achievement);
            saveAchievements();
        }
    });
}
