
// function multiply(num1,num2) {
//     let result = num1 * num2;
//     return result;
//   }

//   multiply(4, 7);


// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Firefox_logo1.png') {
      myImage.setAttribute('src','images/Firefox_logo2.svg');
    } else {
      myImage.setAttribute('src','images/Firefox_logo1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }