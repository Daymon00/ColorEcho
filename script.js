const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
// global variables
var pattern = [];
var progress = 0; 
var gamePlaying = true;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

function startGame(){
  pattern.length=0;
    for (var i=0;i<8;i++){
      pattern.push(getRandomNum(1,6));
}
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}
function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}
//sound 
const freqMap = {
  1: 150.1,
  2: 200.2,
  3: 300.3,
  4: 400.4,
  5: 500.5,
  6: 600.6
}
function getRandomNum(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(pattern)
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) 
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You Won.");
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    loseGame();
  }
}    

var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)