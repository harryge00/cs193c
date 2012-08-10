//global constants
var quoteIndex = 0;
var quoteArray = [{quote: "Discipline is doing what you hate to do, but nonetheless doing it like you love it", author: "Mike Tyson"}, {quote: "A boy comes to me with a spark of interest, I feed that spark and it becomes a flame, I feed the flame and it becomes a fire, I feed the fire and it becomes a roaring blaze", author: "Cus D'Amato"},{quote: "To give anything less than your best is to sacrifice the gift", author:"Steve Prefontaine"}, {quote: "Do or do not. There is no try", author: "Yoda"}, {quote: "Life's sun is going to set. During these brief days that you have strength, be quick and spare no effort of your wings", author: "Rumi"}, {quote: "My willingness to fail gives me the ability to succeed", author: "Vinod Khosla"}, {quote: "Only those who dare to fail greatly can ever achieve greatly", author: "JFK"}, {quote: "Life is what happens while you are busy making other plans", author: "John Lennon"}, {quote: "There is nothing so stable as change", author: "Bob Dylan"}, {quote: "Art is the elimination of the unnecessary", author: "Picasso"}, {quote: "In the beginner's mind there are many possibilities; in the expert's mind there are few", author: "Shunryu Suzuki"}, {quote: "Learn the rules so you know how to break them properly", author: "Dalai Lama"}];

window.onload = init;
function init() {
	document.getElementById("quote").style.color = "rgb(255,255,255)"; //Initially set text to white.
	document.getElementById("author").style.color = "rgb(255,255,255)"; //Initially set text to white.
	shuffleArray(quoteArray);
	displayNextQuote(quoteArray);
	loopQuotes();
}

function shuffleArray(quote_array) {
	for (var i = 0; i < quote_array.length; i++) {
		 var random_index_1 = Math.floor((Math.random()*quoteArray.length));
		 var random_index_2 = Math.floor((Math.random()*quoteArray.length));
		 var temp = quote_array[random_index_1];
		 quote_array[random_index_1] = quote_array[random_index_2];
		 quote_array[random_index_2] = temp;
	}
}

function displayNextQuote(quote_array) {
	if (quoteIndex == (quote_array.length - 1)) {
		quoteIndex = 0;
	} else {
		quoteIndex++;
	}
	document.getElementById("quote").innerHTML = quote_array[quoteIndex].quote;
	document.getElementById("author").innerHTML = quote_array[quoteIndex].author;
}

function loopQuotes() {
	fadeInText();
}

function fadeInText() {
	var hex = rgbToHex(document.getElementById("quote").style.color);
	if(hex > 0) {
		hex -= 1;
		document.getElementById("quote").style.color="rgb("+hex+","+hex+","+hex+")";
		//Set upper limit on author darkness. 200 corresponds to #CCCCCC.
		if (hex >= 200) {
			document.getElementById("author").style.color="rgb("+hex+","+hex+","+hex+")";
		}
		setTimeout("fadeInText()",10);
	} else {
		setTimeout("fadeOutText()", 5000);
	}
}

function fadeOutText() {
	var hex = rgbToHex(document.getElementById("quote").style.color);
	if(hex < 255) {
		hex += 1;
		document.getElementById("quote").style.color="rgb("+hex+","+hex+","+hex+")";
		//Set upper limit on author darkness. 200 corresponds to #CCCCCC.
		if (hex >= 200) {
			document.getElementById("author").style.color="rgb("+hex+","+hex+","+hex+")";
		}
		setTimeout("fadeOutText()",10);
	} else {
		displayNextQuote(quoteArray);
		setTimeout("fadeInText()", 3000);
	}
}

function Timer(callback, delay) {
	var timerId, start, remaining = delay;

	this.pause = function() {
		window.clearTimeout(timerId);
		remaining -= new Date() - start;
	};

	this.resume = function() {
		start = new Date();
		timerId = window.setTimeout(callback, remaining);
	};

	this.resume();
}

/* Takes in rgb string of the form rgb(255, 100, 32) and returns the first hex value (e.g. 255) */
function rgbToHex(rgb) {
	return parseInt(rgb.substring(rgb.indexOf('(') + 1, rgb.indexOf(')') - 1));
}
