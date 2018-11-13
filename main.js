let buttonOne = document.querySelector("#one");
let buttonTwo = document.querySelector("#two");
let buttonThree = document.querySelector("#three");
let buttonFour = document.querySelector("#four");
let buttonFive = document.querySelector("#five");
let buttonSix = document.querySelector("#six");
let buttonSeven = document.querySelector("#seven");
let buttonEight = document.querySelector("#eight");
let buttonNine = document.querySelector("#nine");
let buttonRestart = document.querySelector("#restart");

buttonOne.addEventListener("click", onceOne);
buttonTwo.addEventListener("click", onceTwo);
buttonThree.addEventListener("click", onceThree);
buttonFour.addEventListener("click", onceFour);
buttonFive.addEventListener("click", onceFive);
buttonSix.addEventListener("click", onceSix);
buttonSeven.addEventListener("click", onceSeven);
buttonEight.addEventListener("click", onceEight);
buttonNine.addEventListener("click", onceNine);
buttonRestart.addEventListener("click", restart);

let turn = Math.floor(Math.random() * 10);

function restart() {
  buttonOne.addEventListener("click", onceOne);
  buttonTwo.addEventListener("click", onceTwo);
  buttonThree.addEventListener("click", onceThree);
  buttonFour.addEventListener("click", onceFour);
  buttonFive.addEventListener("click", onceFive);
  buttonSix.addEventListener("click", onceSix);
  buttonSeven.addEventListener("click", onceSeven);
  buttonEight.addEventListener("click", onceEight);
  buttonNine.addEventListener("click", onceNine);

  buttonOne.innerHTML = buttonOne.innerHTML.replace('[X]', '[ ]');
  buttonOne.innerHTML = buttonOne.innerHTML.replace('[O]', '[ ]');
  buttonTwo.innerHTML = buttonTwo.innerHTML.replace('[X]', '[ ]');
  buttonTwo.innerHTML = buttonTwo.innerHTML.replace('[O]', '[ ]');
  buttonThree.innerHTML = buttonThree.innerHTML.replace('[X]', '[ ]');
  buttonThree.innerHTML = buttonThree.innerHTML.replace('[O]', '[ ]');
  buttonFour.innerHTML = buttonFour.innerHTML.replace('[X]', '[ ]');
  buttonFour.innerHTML = buttonFour.innerHTML.replace('[O]', '[ ]');
  buttonFive.innerHTML = buttonFive.innerHTML.replace('[X]', '[ ]');
  buttonFive.innerHTML = buttonFive.innerHTML.replace('[O]', '[ ]');
  buttonSix.innerHTML = buttonSix.innerHTML.replace('[X]', '[ ]');
  buttonSix.innerHTML = buttonSix.innerHTML.replace('[O]', '[ ]');
  buttonSeven.innerHTML = buttonSeven.innerHTML.replace('[X]', '[ ]');
  buttonSeven.innerHTML = buttonSeven.innerHTML.replace('[O]', '[ ]');
  buttonEight.innerHTML = buttonEight.innerHTML.replace('[X]', '[ ]');
  buttonEight.innerHTML = buttonEight.innerHTML.replace('[O]', '[ ]');
  buttonNine.innerHTML = buttonNine.innerHTML.replace('[X]', '[ ]');
  buttonNine.innerHTML = buttonNine.innerHTML.replace('[O]', '[ ]');
};

  function onceOne() {
    if ( turn % 2 == 0){
      buttonOne.innerHTML = buttonOne.innerHTML.replace('[ ]', '[O]');
    } else {
      buttonOne.innerHTML = buttonOne.innerHTML.replace('[ ]', '[X]');
    }
    buttonOne.removeEventListener("click", onceOne);
    turn++;

    winner();

    return  turn;
  };

  if (buttonOne.innerHTML !== ('[ ]')){
    console.log("poop");
  }

  function onceTwo() {
    if ( turn % 2 == 0){
      buttonTwo.innerHTML = buttonTwo.innerHTML.replace('[ ]', '[O]');
    } else {
      buttonTwo.innerHTML = buttonTwo.innerHTML.replace('[ ]', '[X]');
    }
    buttonTwo.removeEventListener("click", onceTwo);
    turn++;

    winner();

    return  turn;
  };

  function onceThree() {
    if ( turn % 2 == 0){
      buttonThree.innerHTML = buttonThree.innerHTML.replace('[ ]', '[O]');
    } else {
      buttonThree.innerHTML = buttonThree.innerHTML.replace('[ ]', '[X]');
    }
    buttonThree.removeEventListener("click", onceThree );
    turn++;

    winner();

    return  turn;
  };

  function onceFour() {
    if ( turn % 2 == 0){
      buttonFour.innerHTML = buttonFour.innerHTML.replace('[ ]', '[O]');
    } else {
      buttonFour.innerHTML = buttonFour.innerHTML.replace('[ ]', '[X]');
    }
    buttonFour.removeEventListener("click", onceFour);
    turn++;

    winner();

    return  turn;
  };

  function onceFive() {
    if ( turn % 2 == 0){
      buttonFive.innerHTML = buttonFive.innerHTML.replace('[ ]', '[O]');
    } else {
      buttonFive.innerHTML = buttonFive.innerHTML.replace('[ ]', '[X]');
    }
    buttonFive.removeEventListener("click", onceFive);
    turn++;

    winner();

    return  turn;
  };

  function onceSix() {
    if ( turn % 2 == 0){
      buttonSix.innerHTML = buttonSix.innerHTML.replace('[ ]', '[O]');
    } else {
      buttonSix.innerHTML = buttonSix.innerHTML.replace('[ ]', '[X]');
    }
    buttonSix.removeEventListener("click", onceSix);
    turn++;

    winner();

    return  turn;
  };

  function onceSeven() {
    if ( turn % 2 == 0){
      buttonSeven.innerHTML = buttonSeven.innerHTML.replace('[ ]', '[O]');
    } else {
      buttonSeven.innerHTML = buttonSeven.innerHTML.replace('[ ]', '[X]');
    }
    buttonSeven.removeEventListener("click", onceSeven);
    turn++;

    winner();

    return  turn;
  };

  function onceEight() {
    if ( turn % 2 == 0){
      buttonEight.innerHTML = buttonEight.innerHTML.replace('[ ]', '[O]');
    } else {
      buttonEight.innerHTML = buttonEight.innerHTML.replace('[ ]', '[X]');
    }
    buttonEight.removeEventListener("click", onceEight);
    turn++;

    winner();

    return  turn;
  };

  function onceNine() {
    if ( turn % 2 == 0){
      buttonNine.innerHTML = buttonNine.innerHTML.replace('[ ]', '[O]');
    } else {
      buttonNine.innerHTML = buttonNine.innerHTML.replace('[ ]', '[X]');
    }
    buttonNine.removeEventListener("click", onceNine);
    turn++;

    winner();

    return  turn;
  };

function winner(){
if (one.innerHTML == "[X]") {
  if (two.innerHTML == "[X]"){
    if (three.innerHTML == "[X]"){
      window.alert("player X won");
      restart();
    }
  }
};
if (one.innerHTML == "[O]") {
  if (two.innerHTML == "[O]"){
    if (three.innerHTML == "[O]"){
      window.alert("player O won");
      restart();
    }
  }
};
if (four.innerHTML == "[X]") {
  if (five.innerHTML == "[X]"){
    if (six.innerHTML == "[X]"){
      window.alert("player X won");
      restart();
    }
  }
};
if (four.innerHTML == "[O]") {
  if (five.innerHTML == "[O]"){
    if (six.innerHTML == "[O]"){
      window.alert("player O won");
      restart();
    }
  }
};
if (seven.innerHTML == "[X]") {
  if (eight.innerHTML == "[X]"){
    if (nine.innerHTML == "[X]"){
      window.alert("player X won");
      restart();
    }
  }
};
if (seven.innerHTML == "[O]") {
  if (eight.innerHTML == "[O]"){
    if (nine.innerHTML == "[O]"){
      window.alert("player O won");
      restart();
    }
  }
};
if (one.innerHTML == "[X]") {
  if (four.innerHTML == "[X]"){
    if (seven.innerHTML == "[X]"){
      window.alert("player X won");
      restart();
    }
  }
};
if (one.innerHTML == "[O]") {
  if (four.innerHTML == "[O]"){
    if (seven.innerHTML == "[O]"){
      window.alert("player O won");
      restart();
    }
  }
};
if (one.innerHTML == "[X]") {
  if (five.innerHTML == "[X]"){
    if (nine.innerHTML == "[X]"){
      window.alert("player X won");
      restart();
    }
  }
};
if (one.innerHTML == "[O]") {
  if (five.innerHTML == "[O]"){
    if (nine.innerHTML == "[O]"){
      window.alert("player O won");
      restart();
    }
  }
};
if (two.innerHTML == "[X]") {
  if (five.innerHTML == "[X]"){
    if (eight.innerHTML == "[X]"){
      window.alert("player X won");
      restart();
    }
  }
};
if (two.innerHTML == "[O]") {
  if (five.innerHTML == "[O]"){
    if (eight.innerHTML == "[O]"){
      window.alert("player O won");
      restart();
    }
  }
};
if (three.innerHTML == "[X]") {
  if (six.innerHTML == "[X]"){
    if (nine.innerHTML == "[X]"){
      window.alert("player X won");
      restart();
    }
  }
};
if (three.innerHTML == "[O]") {
  if (six.innerHTML == "[O]"){
    if (nine.innerHTML == "[O]"){
      window.alert("player O won");
      restart();
    }
  }
};
if (three.innerHTML == "[X]") {
  if (five.innerHTML == "[X]"){
    if (seven.innerHTML == "[X]"){
      window.alert("player X won");
      restart();
    }
  }
};
if (three.innerHTML == "[O]") {
  if (five.innerHTML == "[O]"){
    if (seven.innerHTML == "[O]"){
      window.alert("player O won");
      restart();
    }
  }
};
}
