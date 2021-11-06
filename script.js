
let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.bluePart');
const red = document.querySelector('.redPart');
const yellow = document.querySelector('.yellowPart');
const green = document.querySelector('.greenPart');



let sortedOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
  for(let i in order) {
    let elementColor = createElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

let lightColor = (element, time) => {
  time = time * 500;
  setTimeout(() =>{
    
    element.classList.add('selected');
  }, time - 250);

  setTimeout(() => {
    element.classList.remove('selected');
},time );
}

let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]){
      gameOver();
      break;
    }
  }

  if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score},\nVocê acertou! Iniciando proximo nivel`);
    nextLevel();
  }
}

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createElement(color).classList.add('selected');

  setTimeout(() => {
    createElement(color).classList.remove('selected');
    checkOrder();
  }, 250);

}

let createElement = (color) =>{
  if(color == 0){
    return green;
  }
  else if(color == 1){
    return red;
  }
  else if(color == 2){
    return yellow;
  }
  else if(color == 3){
    return blue;
  }
}

let nextLevel = () => {
  score++;
  sortedOrder();
}

let gameOver = () =>{
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\n Clique OK para iniciar um novo jogo`);
  order = [];
  clickedOrder = [];

  playGame();
}

let playGame = () => {
  alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
  score = 0;

  nextLevel();
}

green.onclick =() => click(0);
red.onclick =() => click(1);
yellow.onclick =() => click(2);
blue.onclick =() => click(3);


playGame();