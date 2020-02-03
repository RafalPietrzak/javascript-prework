const game = function (){
     
    //id = css id, click = function run on click
    const buttons = {
        'playerRock'  : {
            'id' : 'player-rock',
            'element' : {},
            'click' : function () { 
                gameLogic(moves.rock);
            },
            'disabled' : true 
        },
        'playerPaper' : {
            'id' : 'player-paper',
            'element' : {},
            'click' : function () {
                gameLogic(moves.paper);
            },
            'disabled' : true
        },
        'playeScissors' : {
            'id' : 'player-scissors',
            'element' : {},
            'click' : function () {
                gameLogic(moves.scissors);
            },
            'disabled' : true
        },
        'nextRound' : {
            'id' : 'next-round',
            'element' : {},
            'click' : function () { 
                this.innerHTML = 'Następna runda';
                updateFilds.playerMove.update(moves.noMove.icon);
                updateFilds.computerMove.update(moves.noMove.icon);
                updateFilds.roundResult.update("");
                switchButton();
                incrementFilds.roundNumber.add()
            },
            'disabled' : false
        }
    }
    
    const gameLogic = function(playerMove){
        const getMoveByValue = function (value) {
            if (value == '1'){
                 return moves.rock;
            } else if (value == '2') {
                return moves.paper;
            } else if (value == '3') {
                return moves.scissors; 
            }
            return moves.noMove;     
        }

        const computerMove =  getMoveByValue(Math.floor(Math.random() * 3 + 1));
        updateFilds.computerMove.update(computerMove.icon);
        updateFilds.playerMove.update(playerMove.icon);
        switchButton();
        
        if (playerMove.value == computerMove.value) {
            updateFilds.roundResult.update(resultLabel.draw);
        } else if (playerMove.value == moves.rock.value //p:rock c:paper 
            && computerMove.value == moves.paper.value){
               updateFilds.roundResult.update(resultLabel.playerFail);
                incrementFilds.computerScore.add();
        } else if (playerMove.value == moves.rock.value  //p:rock c:scissors
            && computerMove.value == moves.scissors.value){
                updateFilds.roundResult.update(resultLabel.playerWin);
                incrementFilds.playerScore.add();
        } else if (playerMove.value == moves.paper.value //p: paper c:rock 
            && computerMove.value == moves.rock.value){
                updateFilds.roundResult.update(resultLabel.playerWin);
                incrementFilds.playerScore.add();
        } else if (playerMove.value == moves.paper.value //p: paper c:scissors
            && computerMove.value == moves.scissors.value){
                updateFilds.roundResult.update(resultLabel.playerFail);
                incrementFilds.computerScore.add();
        } else if (playerMove.value == moves.scissors.value //p: scissors c:rock 
            && computerMove.value == moves.rock.value){
                updateFilds.roundResult.update(resultLabel.playerFail);
                incrementFilds.computerScore.add();
        } else if (playerMove.value == moves.scissors.value //p:scissors c:paper
            && computerMove.value == moves.paper.value){
                updateFilds.roundResult.update(resultLabel.playerWin);
                incrementFilds.playerScore.add();
        } else {
            console.log('ERROR')    
        }         
    }

    // Disabled and abled buttons
    const switchButton = function () {
        for(key of Object.keys(buttons)){
            buttons[key].disabled = !buttons[key].disabled; 
            buttons[key].element.disabled = buttons[key].disabled; 
        }
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
        'playerWin' : 'Wygrałeś!',
        'playerFail': 'Przegrałeś!',
        'draw' : 'Remis!'
    }

    const moves = {
        'noMove' : {
            'value' : null,
            'icon' : '<i class="fas fa-spinner player__move-icon player__move-icon--animation"></i>'
        },
        'rock' : {
            'value' : '1',
            'icon' : '<i class="fas fa-hand-rock player__move-icon"></i>'
        },
        'paper' : {
            'value' : '2',
            'icon' : '<i class="fas fa-hand-paper player__move-icon"></i>'
        },
        'scissors' : {
            'value' : '3',
            'icon' : '<i class="fas fa-hand-scissors player__move-icon"></i>'
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
    

