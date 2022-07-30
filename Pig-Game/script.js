
const Dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
let gamePlaying = true;
let sessionScore = 0;
let activePlayer = 0;
let scores = [0,0];
function init() {
     scores = [0,0];
 sessionScore = 0;
 activePlayer = 0;
Dice.style.display = 'none';
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;
gamePlaying = true;
} init();
    btnRoll.onclick = ()=> {
if(gamePlaying) {
        let dice = Math.floor(Math.random()*6) + 1 ;
            Dice.style.display = 'block';
            Dice.src = 'dice-' + dice + '.png';
            if (dice !== 1) {
                sessionScore += dice;
                document.getElementById('current--' + activePlayer).innerHTML = sessionScore        
            }else {
                nextPlayer();
            }
        }
    }

function nextPlayer(){
    document.getElementById('current--' + activePlayer).innerHTML = 0;        
    sessionScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

btnHold.onclick = () => {
    if (gamePlaying) {
        scores[activePlayer] += sessionScore; 
        Dice.style.display = 'none'
        document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];
    if(document.getElementById('score--' + activePlayer).textContent < 20) {
       nextPlayer();
    }else {
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        Dice.style.display = 'none';
    document.getElementById('current--' + activePlayer).innerHTML = 0;        
        gamePlaying = false;
    }
    }
}

btnNew.onclick = ()=> {
    init()
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}