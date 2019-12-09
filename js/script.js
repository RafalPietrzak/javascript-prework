function playGame(playerInput){
    clearMessages();

    function getMoveName (moveID) {
        return (
            moveID == '1' ? 'kamień' : 
            moveID == '2' ? 'papier' :  
            moveID == '3' ? 'nożyce' : 
            'Błąd'
        );
    }

    function printResult (result){
        printMessage('Twój ruch to ' + result[0] + '. Komputer wylosował ' + result[1] + '. ' + result[2]); //(1*)
    }

    function checkResult (playerMove, computerMove) {
        return(
        playerMove == computerMove ? [playerMove, computerMove, 'Remis!']  : //(1*)
        playerMove == 'kamień' && computerMove == 'papier' ? [playerMove, computerMove, 'Przegrałeś :['] :
        playerMove == 'kamień' && computerMove == 'nożyce' ? [playerMove, computerMove, 'Wygrałeś !!!'] :
        playerMove == 'nożyce' && computerMove == 'papier' ? [playerMove, computerMove, 'Wygrałeś !!!'] :
        playerMove == 'nożyce' && computerMove == 'kamień' ? [playerMove, computerMove, 'Przegrałeś :['] :
        playerMove == 'papier' && computerMove == 'nożyce' ? [playerMove, computerMove, 'Przegrałeś :['] :
        playerMove == 'papier' && computerMove == 'kamień' ? [playerMove, computerMove, 'Wygrałeś !!!'] :
        ['Błąd #^*^@!', '' ,'']
     )
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
   // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    let playerMove = getMoveName(playerInput);
    let computerMove = getMoveName(randomNumber);
    printResult(checkResult (playerMove, computerMove)); 
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
});