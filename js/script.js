let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = '';
let computerMove = '';

playerMove = playerInput == '1' ? 'kamień' : 
             playerInput == '2' ? 'papier' :  
             playerInput == '3' ? 'nożyce' : 
             'Podaj poprawną wartość 1, 2, 3.';

computerMove = randomNumber == '1' ? 'kamień' : 
               randomNumber == '2' ? 'papier' :  
               randomNumber == '3' ? 'nożyce' : 
               'Błąd #^*^@!';

printMessage(
    playerMove == computerMove ? 'Remis!' :
    playerMove == 'kamień' && computerMove == 'papier' ? 'Twój ruch to ' + playerMove + '. Komputer wylosował ' + computerMove + '. Przegrałeś :(' :
    playerMove == 'kamień' && computerMove == 'nożyce' ? 'Twój ruch to ' + playerMove + '. Komputer wylosował ' + computerMove + '. Wygrałeś !!!' :
    playerMove == 'nożyce' && computerMove == 'papier' ? 'Twój ruch to ' + playerMove + '. Komputer wylosował ' + computerMove + '. Wygrałeś !!!' :
    playerMove == 'nożyce' && computerMove == 'kamień' ? 'Twój ruch to ' + playerMove + '. Komputer wylosował ' + computerMove + '. Przegrałeś :(' :
    playerMove == 'papier' && computerMove == 'nożyce' ? 'Twój ruch to ' + playerMove + '. Komputer wylosował ' + computerMove + '. Przegrałeś :(' :
    playerMove == 'papier' && computerMove == 'kamień' ? 'Twój ruch to ' + playerMove + '. Komputer wylosował ' + computerMove + '. Wygrałeś !!!' :
    'Błąd #^*^@!'
);