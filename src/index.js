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
var superclicker = 0
var superclickerCost = 1000
var Ultraclicker = 2000
var UltraclickerCost = 0
var prestigePoints = 0 //prestige points
var requiredMoney = 1000000 //money required to prestige
var prestigeMultiplier = 1.2 //multiplier for prestige points

function constructor(initialValue = 0n)
{
    this.value = BigInt(initialValue);
}
function increment(amount = 1n)
{
    this.value += BigInt(amount);
}
function set(value) 
{
    this.value = BigInt(value);
}
function get() 
{
    console.log(this.value)
}
// Format as words (e.g., "1.2 million", "3.4 billion", etc.)
function format(value)
{
    this.value = BigInt(value);
    const units = [
        { suffix: "decillion", value: 10n ** 33n },
        { suffix: "nonillion", value: 10n ** 30n },
        { suffix: "octillion", value: 10n ** 27n },
        { suffix: "septillion", value: 10n ** 24n },
        { suffix: "sextillion", value: 10n ** 21n },
        { suffix: "quintillion", value: 10n ** 18n },
        { suffix: "quadrillion", value: 10n ** 15n },
        { suffix: "trillion",    value: 10n ** 12n },
        { suffix: "billion",     value: 10n ** 9n },
        { suffix: "million",     value: 10n ** 6n },
        { suffix: "thousand",    value: 10n ** 3n }
    ];

    for (const unit of units) {
        if (this.value >= unit.value) {
            const whole = this.value / unit.value;
            const decimal = (this.value % unit.value) / (unit.value / 10n);
            return `${whole}.${decimal} ${unit.suffix}`;
        }
    }
    return this.value.toString(); // just show number for small values
}
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
    var formatedScorse = format(score)
    document.getElementById("score").innerHTML = formatedScorse;
    score = score + clickPower;
    game.clicks++;
    game.totalMoney += clickPower;
    
    //document.getElementById("score").innerHTML = formatedScorse;
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
        unlockedAchievements: achievements.filter(achievement => achievement.unlocked).map(achievement => achievement.id),
        clicker: clicker,
        clickerCost: clickerCost,
        Ultraclicker: Ultraclicker,
        UltraclickerCost: UltraclickerCost 
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
    prestigePoints: 0,
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
    },
    {
        id: "first_prestige",
        name: "Prestige!",
        description: "Prestige for the first time.",
        condition: (game) => game.prestigePoints >= 1,
        unlocked: false
    }
];


// advancements
function displayAchievement(achievement) {
    let container = document.getElementById("achievement-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "achievement-container";

        // Mobile: bottom-left
        // Desktop (sm+): top-left
        container.className = `
            fixed 
            bottom-5 left-5 
            sm:top-5 sm:bottom-auto
            flex flex-col gap-2 items-start z-50
        `.replace(/\s+/g, ' ').trim();

        document.body.appendChild(container);
    }

    const notification = document.createElement("div");
    notification.className = `
        bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg
        text-sm sm:text-base max-w-[90%] w-fit
    `.replace(/\s+/g, ' ').trim();

    notification.innerText = `🎉 Achievement Unlocked: ${achievement.name} - ${achievement.description}`;

    container.appendChild(notification);

    setTimeout(() => {
        notification.remove();
        if (container.childElementCount === 0) {
            container.remove();
        }
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


var clickerbuy = document.getElementById("clickerbuy")

function disableclickerbuy() {
    clickerbuy.addEventListener("click", () => {
        clickerbuy.disabled = true
    })
}

// building upgrades
function buyclicker() {
    if (score == clickerCost) {
        clicker++
        clickPower += 5

        score = score - clickerCost
        disableclickerbuy()
    }
}

var ultraclickerbuy = document.getElementById("buyultraclickers")

function disableUltraclicker() {
    ultraclickerbuy.addEventListener("click", () => {
        ultraclickerbuy.disabled = true
    })
}

function Ultraclickerbuys() {
    if (score == UltraclickerCost) {
       Ultraclicker++;
       clickPower += 20
       score = score - UltraclickerCost
       disableUltraclicker()
    } 
}

// prestige system
function givePrestigePoints() {
    if (game.totalMoney >= requiredMoney) {
        prestigePoints++;
        game.totalMoney = 0; // Reset total money after prestiging
        game.clicks = 0;
        game.clickers = 0;
        game.prestigePoints += 1;
        game.clickPower = Math.round(game.clickPower * prestigeMultiplier);
        clickPower = game.clickPower;
    }
}
 
