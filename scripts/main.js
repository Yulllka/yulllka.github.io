let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/wild-cat.jpg') {
    myImage.setAttribute('src','images/serval0.jpg');
  } else {
    myImage.setAttribute('src','images/wild-cat.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Введите кличку сервала');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Сервал ' + myName;
  }   
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Сервал ' + storedName;
}


myButton.onclick = function() {
  setUserName();
}
/*const myHeading = document.querySelector('h1'); 
myHeading.textContent = 'Hello world!';


let screen = document.querySelector('img');

screen.onclick = function() {
  alert('Ouch! Stop poking me!');
}


let iceCream = 'banana';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}
function multiply(n1, n2) {
  let result = n1 * n2;
  return result;
} 


function cat(name) { 
  let result;
  if(name === 'Пусик') {
    result = (name + ' ' + 'говорит:"бррр"');
  } else {
    result = (name + ' ' + 'говорит:"мяу"');
  }
  return result;
}*/

null
