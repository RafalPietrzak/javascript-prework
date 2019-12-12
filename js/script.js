/*function playGame(playerInput) {
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

let o = {};
o.a = 10;
let p = Object.create(o);
console.log('1 :: a:' + p.a + ', b:' + p.b); // 1 :: a:10, b:undefined
console.log(toString(p)); //{} b: 12 __proto__: a: 10 b: 13
o.b = 11;
console.log('2 :: a:' + p.a + ', b:' + p.b); // 2 :: a:10, b:11
console.log(p); //{} b: 12 __proto__: a: 10 b: 13
p.b = 12;
console.log('3 :: a:' + p.a + ', b:' + p.b); // 3 :: a:10, b:12
console.log(p); //{} b: 12 __proto__: a: 10 b: 13
o.b = 13;
console.log('4 :: a:' + p.a + ', b:' + p.b); // 4 :: a:10, b:12
console.log(p); //{} b: 12 __proto__: a: 10 b: 13

o.c = 10;
o.d = function (value) {
    o.c = value;
} 

q = Object.create(o);
console.log('q.c: ' + q.c + ', o.c:' + o.c);

q.d(20);
console.log('q.c: ' + q.c + ', o.c:' + o.c);

o.d(30);
console.log('q.c: ' + q.c + ', o.c:' + o.c);

q.c = 10;
console.log('q.c: ' + q.c + ', o.c:' + o.c);
*/
const game = function (){
     
    //id = css id, click = function run on click
    const buttons = {
        'playerRock'  : {
            'id' : 'player-rock',
            'click' : function () { incrementFild.roundNumber.add()}
        },
        'playerPaper' : {
            'id' : 'player-paper',
            'click' : function () { incrementFild.roundNumber.add()}
        },
        'playeScissors' : {
            'id' : 'player-scissors',
            'click' : function () { incrementFild.roundNumber.add()}
        },
        'nextRound' : {
            'id' : 'next-round',
            'click' : function () { incrementFild.roundNumber.add()}
        }
    }
    
    //Key - css id filds, value element and increment function
    const incrementFild = {
        'roundNumber' : {
            id: 'round-number', 
            element: null, 
            add: null, 
            state: 1}, 
        'palyerScore' : {
            id: 'palyer-score', 
            element: null, 
            add: null, 
            state: 0},
        'computerScore' : {
            id: 'computer-score', 
            element: null, 
            add: null, 
            state: 0},
    }

    //Key - css id filds, value element and increment function
    const updateFild = {
        'round-result' : {element: null, updata: null},
        'player-move'  : {element: null, updata: null},
        'computer-move' :  {element: null, updata: null},
        }
    
    
    //Get element and add increment function '.add()'
    const addIncrementFunction = function () {
        for(let key of Object.keys(incrementFild)){
            let fild = incrementFild[key];
            fild.element = document.getElementById(fild.id);
            fild.add = function () {
                this.state = this.state + 1;
                this.element.innerHTML = '' + this.state;
            } 
        }
    } 
    
    //Add listeners to all button
    const addListeners = function () {
        for(let key of Object.keys(buttons)){
            let button = buttons[key];
            document.getElementById(button.id).addEventListener('click', button.click);  
        }     
    }

    //Colect all nesesery function for innit game
    initGame = function () {
        addListeners();
        addIncrementFunction();
    }
    initGame();
}

//Start game
game();
    

