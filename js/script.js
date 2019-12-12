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
            'element' : {},
            'click' : function () { 
                switchButton();
                updateFilds.playerMove.update(moveIcon.rock);
            },
            'disabled' : true 
        },
        'playerPaper' : {
            'id' : 'player-paper',
            'element' : {},
            'click' : function () {
                switchButton();
                updateFilds.playerMove.update(moveIcon.paper);
            },
            'disabled' : true
        },
        'playeScissors' : {
            'id' : 'player-scissors',
            'element' : {},
            'click' : function () {
                switchButton();
                updateFilds.playerMove.update(moveIcon.scissors);
            },
            'disabled' : true
        },
        'nextRound' : {
            'id' : 'next-round',
            'element' : {},
            'click' : function () { 
                this.innerHTML = 'Następna runda';
                updateFilds.playerMove.update(moveIcon.newRound);
                updateFilds.computerMove.update(moveIcon.newRound);
                switchButton();
                incrementFilds.roundNumber.add()
            },
            'disabled' : false
        }
    }
    
    const switchButton = function () {
        for(key of Object.keys(buttons)){
            buttons[key].disabled = !buttons[key].disabled; 
            buttons[key].element.disabled = buttons[key].disabled; 
        }
    }

    //Key - css id filds, value element and increment function
    const incrementFilds = {
        'roundNumber' : {
            id: 'round-number', 
            element: null, 
            add: null, 
            state: 0}, 
        'playerScore' : {
            id: 'player-score', 
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
    const updateFilds = {
        'roundResult' : {
            id: 'round-result',
            element: null, 
            update: null
        },
        'playerMove'  : {
            id: 'player-move',
            element: null, 
            update: null
        },
        'computerMove' :  {
            id: 'computer-move',
            element: null, 
            update: null
        }
    }

    const resultLabel = {
        'playerWin' : 'Gratuluje, wygrałeś!',
        'playerFail': 'Niestety, przegrałeś!',
        'draw' : 'Remis!'
    }

    const moveIcon = {
        'newRound' : '<i class="fas fa-spinner player__move-icon"></i>',
        'rock' : '<i class="fas fa-hand-rock player__move-icon"></i>',
        'paper' : '<i class="fas fa-hand-paper player__move-icon"></i>',
        'scissors' : '<i class="fas fa-hand-scissors player__move-icon"></i>',
    }
    
    //Get element and add increment function '.add()'
    const addIncrementFunction = function () {
        for(let key of Object.keys(incrementFilds)){
            let fild = incrementFilds[key];
            fild.element = document.getElementById(fild.id);
            fild.add = function () {
                this.state = this.state + 1;
                this.element.innerHTML = '' + this.state;
            } 
        }
    } 
    
    //Get element and add listeners to all button
    const addListeners = function () {
        for(let key of Object.keys(buttons)){
            let button = buttons[key];
            button.element = document.getElementById(button.id);
            button.element.addEventListener('click', button.click);
            console.log( button.element.disabled, )
            button.element.disabled = button.disabled;  
        }     
    }

    //Get element and add update function(content)
    const addUpdateFunction = function () {
        for(let key of Object.keys(updateFilds)){
            let fild = updateFilds[key];
            fild.element = document.getElementById(fild.id);
            fild.update = function (content) {
                this.state = this.state + 1;
                this.element.innerHTML = '' + content;
            } 
        }
    }

    //Colect all nesesery function for innit game
    initGame = function () {
        addListeners();
        addIncrementFunction();
        addUpdateFunction();
    }
    initGame();
}

//Start game
game();
    

