function doMadLib() {

	alert("Here is your MadLib.  I'm going to ask you some questions now");

	var sport = prompt("Please give me the name of a sport");
	var car = prompt("Please give me the name of a car");
	var place = prompt("Please give me the name of a place where you play a sport");
	var food = prompt("Please give me the name of a food");
	var restaurant = prompt("Please give me the name of a restaurant");
	var equipment = prompt("Please give me the name of a piece of sports equipment");
	var person = prompt("Please give me the name of a person");
	var number1 = prompt("Please give me a number");
	var number2 = prompt("Please give me a second number");
	var mood = prompt("Please give me a word for a mood");

	alert("Ok, your mad lib is now below ... have fun!");

	var story = 

	"Today I have a <span class='c'>" + sport + " </span> game to play. <br> <br>" +

	" I got in my <span class='c'> " + car + " </span> to drive to the <span class='c'> " + place + " </span> ." +
	" On the way to the <span class='c'> " + place + " </span> I needed to stop and get some <span class='c'> " 
	+ food + " </span> at <span class='c'> " + restaurant + " </span> . <br> <br>" +

	" When I finally got to the <span class='c'> " + place + " </span> I realized I forgot my <span class='c'> " 
	+ equipment + " </span> ." +
	" But luckily <span class='c'> " + person + " </span> had an extra <span class='c'>" + equipment + 
	" </span> , and I had everything I needed for my game. <br> <br>" +

	" During the game I scored <span class='c'>" + number1 + " </span> goals and <span class='c'>" + 
	number2 + " </span> assists." +
	" Our team won the game and we were all <span class='c'>" + mood + " </span> after." 






	document.getElementById("finalMadLib").innerHTML = story;

}


