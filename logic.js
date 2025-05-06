let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;
function runGame(x) {
    let choiceResult = x;
    let randNum = Math.floor(Math.random() * 2) + 1;
    let flipResult;
    if (randNum === 1) {
        flipResult = 'tails';
    } else {
        flipResult = 'heads';
    };
    let gameResult;
    if (flipResult === choiceResult) {
        gameResult = "win";
        gamesWon++;
    } else {
        gameResult = "loss"
        gamesLost++;
    };
    gamesPlayed++;
    let prediction = document.getElementById ('prediction')
    prediction.innerText = choiceResult;

    let flip = document.getElementbyId('flip');
    flip.innerText = flipResult;

    let result = document.getElementbyId('result');
    result.innerText = gameResult;

    let gameCount = document.getElementById('count');
    gameCount.innterText = gamesPlayed;

    let winCount = document.getElementbyId('wins');
    winCount.innerText = gamesWon;

    let lossCount = document.getElementbyId('losses');
    lossCount.innerText = gamesLost;

function resetScore() {
    gamesPlayed = 0;
    gamesWon = 0;
    gamesLost = 0;

    let gameCount = document.getElementById('count');
    let winCount = document.getElementById('wins');
    let lossCount = document.getElementById('losses');
    gameCount.innerText = gamesPlayed;
    winCount.innerText = gamesWon;
    lossCount.innerText = gamesLost;
}