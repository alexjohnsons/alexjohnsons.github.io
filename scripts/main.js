let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'IMG_1673.JPG') {
      myImage.setAttribute('src','IMG_1674.JPG');
    } else {
      myImage.setAttribute('src','IMG_1673.JPG');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('POTATOAAAAA.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Banana, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Banana, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
