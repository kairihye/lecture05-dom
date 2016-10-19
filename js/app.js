'use strict';

/** exercise 1 **/
function countdown(){

	//Define a variable to keep track of the count (start at 5)
	var count = 5;
	//Call the setInterval() and pass it an _anonymous_ callback function 
	//and an interval of 1000 ms
	//Be sure to assign the result of the `setInterval` function (not the callback) to 
	//a variable (e.g., `timerId`) 
	var timerId = window.setInterval(function() {
	//In the callback function, do the following:
			//Log out and decrement the count
			console.log(count);
			count--;
			//If the count is 0, log out "Blast off!" and then call clearInterval() on the timerId
			if(count == 0){
				console.log('Blast off!!!');
				window.clearInterval(timerId);
			}
	}, 1000);

}
//countdown();


/** exercise 2 **/
//add your name
var nameElem = document.querySelector('#text .lead');
nameElem.innerHTML = nameElem.innerHTML+" <em>Professor Ross!</em>";

//print hidden content
var hiddenElem = document.querySelectorAll('.hidden');
hiddenElem.forEach(function(elem){
	console.log(elem.textContent);
});


/** exercise 3 **/
//move ball to top of the slide
var ball = document.querySelector('circle');
ball.setAttribute('cx','225');
ball.setAttribute('cy','95');

//make links open in separate windows
var links = document.querySelectorAll('a');
links.forEach(function(link){
	link.setAttribute('target','_blank');
});


/** exercise 4 **/
//move to bottom of slide
ball.classList.add('down-slide');

//flashing elements
function blink() {
		var elem = document.querySelector('.important');
		elem.classList.toggle('white');
}
//window.setInterval(blink, 500);


/** exercise 5 **/
//add a new link to the list
var linkList = document.querySelector('#links');
var newLink = document.createElement('li'); //make an element
newLink.innerHTML = '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">A cool video</a>'; //set content. Could make inner elements as well
linkList.appendChild(newLink); //add at end
//linkList.insertBefore(newLink, document.querySelector('#links li')); //insert before first link


/** exercise 6 and 7 **/
//have the ball move down the slide, counting number of occurrences
var slides = 0; //establish state
var msg = document.createElement('p');
msg.textContent = "You've gone down the slide "+slides+" times!"; //show on scren
var svg = document.querySelector('svg');
svg.parentElement.insertBefore(msg, svg.nextSibling); //add after SVG
ball.addEventListener('click', function() {
	var atTop = !ball.classList.contains('down-slide') //check state;

	if(atTop) { //decide what to do
		slides++; //update state

		//show the count on the screen
		msg.textContent = "You've gone down the slide "+slides+" times!";
		console.log("You've gone down the slide", slides, "times!");
	}

	ball.classList.toggle('down-slide');
});


//bye bye clouds!!
var cloud = document.querySelector('#cloud');
cloud.addEventListener('mouseenter', function() {
	cloud.style.opacity = 0.0;
});
cloud.addEventListener('mouseleave', function() {
	cloud.style.opacity = 1.0;
});
