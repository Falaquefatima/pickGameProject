'Use Strict'
// ..SELECTING ELEMENTS...........
const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')
const score0El=document.querySelector('#score--0')
const currunt0El=document.getElementById('current--0')
const score1El=document.getElementById('score--1')
const currunt1El=document.getElementById('current--1')

const diceEl=document.querySelector('.dice')
const btnRoll=document.querySelector('.btn--roll')
const btnNew=document.querySelector('.btn--new')
const btnHold=document.querySelector('.btn--hold')
let switchPlayer=()=>{
  document.getElementById(`current--${activePlayer}`).textContent=0
   activePlayer=activePlayer===0? 1:0
   player0El.classList.toggle('player--active')
   player1El.classList.toggle('player--active')
}
// .........STARTING CONDITION..........
 let curruntScore, scores, activePlayer, playing;

const init=()=>{
   curruntScore=0
   scores=[0,0]
   activePlayer=0
   playing=true

   score0El.textContent=0
   score1El.textContent=0
   currunt0El.textContent=0
   currunt1El.textContent=0
   diceEl.classList.add('hidden')
   player0El.classList.remove('player--winner')
   player1El.classList.remove('player--winner')
   player0El.classList.remove('player--active')
   player1El.classList.remove('player--active')
}




// .....rolling functionallity.........
btnRoll.addEventListener('click',function(){
  if(playing){
    // 1.generate rendom dice...
const dice=Math.trunc(Math.random()*6)+1
console.log(dice)
   // 2. display dice........
 diceEl.classList.remove('hidden')
 diceEl.src=`dice-${dice}.png`
 // 3.check if rolled is not 1 then add score to currunt score
 if(dice!==1){
curruntScore=curruntScore+dice
// currunt0El.textContent=curruntScore( we can also write)
document.getElementById(`current--${activePlayer}`).textContent=curruntScore
}
// ....if rolled 1 then switch the player..
 else{
   switchPlayer()
 }
}})
btnHold.addEventListener('click',function(){
  if(playing){
  // Add currunt score to active player score....
  scores[activePlayer]+=curruntScore
  document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]
  
//  ..if score>100...than win the game
if(scores[activePlayer]>=20){
  playing=false
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
}
else {switchPlayer()}
}})
// .........restart game .....handle with new game button.......
btnNew.addEventListener('click',function(){
init()

})