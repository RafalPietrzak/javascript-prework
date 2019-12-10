function playGame(playerInput) {
    clearMessages();

    function getMoveName(moveID) {
        if (moveID == '1'){
             return 'kamień';
        } else if (moveID == '2') {
            return 'papier';
        } else if (moveID == '3') {
            return 'nożyce'; 
        } else {
            return 'error';
        } 
    }

    function checkResult(playerMove, computerMove) {
        const result = {
            'draw': 'Remis!',
            'playerWin': 'Wygrałeś !!!',
            'computerWin': 'Przegrałeś :[',
            'printResult': function (playerMove, computerMove, result) {
                    printMessage('Twój ruch to ' + playerMove + 
                    '. Komputer wylosował ' + computerMove + 
                    '. ' + result); 
                }
            };
        
        if (playerMove == computerMove) {
            result.printResult(playerMove, computerMove, result.draw);
        } else if (playerMove == 'kamień' && computerMove == 'papier'){
            result.printResult(playerMove, computerMove, result.computerWin);
        } else if (playerMove == 'kamień' && computerMove == 'nożyce'){
            result.printResult(playerMove, computerMove, result.playerWin);
        } else if (playerMove == 'nożyce' && computerMove == 'papier'){
            result.printResult(playerMove, computerMove, result.playerWin);
        } else if (playerMove == 'nożyce' && computerMove == 'kamień'){
            result.printResult(playerMove, computerMove, result.computerWin);
        } else if (playerMove == 'papier' && computerMove == 'nożyce'){
            result.printResult(playerMove, computerMove, result.computerWin);
        } else if (playerMove == 'papier' && computerMove == 'kamień'){
            result.printResult(playerMove, computerMove, result.playerWin);
        } else {
            console.log('ERROR')    
        }         
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let playerMove = getMoveName(playerInput);
    let computerMove = getMoveName(randomNumber);
    checkResult(playerMove, computerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame('1');
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame('2');
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame('3');
});