var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number 1 to 6

var randomDiceImage = 'dice' + randomNumber1 + '.png'; //dice1.png to dice6.png

var randomImageSource = 'images/' + randomDiceImage; //images/dice1.png to /images/dice6.png

var iamge1 = document.querySelectorAll('img')[0];

iamge1.setAttribute('src', randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = 'images/dice' + randomNumber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

if (randomNumber1 > randomNumber2) {
	document.querySelector('h1').innerHTML = 'Player Nr.1 Wins!';
} else if (randomNumber2 > randomNumber1) {
	document.querySelector('h1').innerHTML = 'Player Nr.2 Wins!';
} else {
	document.querySelector('h1').innerHTML = 'Draw!';
}
