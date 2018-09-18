// variables
var randomNumber = "";
var wins = 0;
var losses = 0;
var totalScore = 0;
var amethyst = "";
var ruby = "";
var sapphire = "";
var emerald = "";


// reset game function
function reset() {
totalScore = 0;
$("#score").text("");
amethystRandom();
rubyRandom();
sapphireRandom();
emeraldRandom();
random();
crystalClass();
}

//give crystal variables class
function crystalClass(){
$("#amethyst").addClass("crystal");
$("#ruby").addClass("crystal");
$("#sapphire").addClass("crystal");
$("#emerald").addClass("crystal");
}

//computer's randomNumber function
function random () {
  randomNumber = Math.floor(Math.random() * 101) + 19;
 console.log("Random number value: " + randomNumber);
 $("#random").text(randomNumber);
}



// amethyst random number
function amethystRandom () {
  
 amethyst = Math.floor(Math.random() * 12) + 1;
 console.log("Amethyst value: " + amethyst);
 $("#amethyst").attr("data-crystalvalue", amethyst);
}


// ruby random number

function rubyRandom () {
  
  ruby = Math.floor(Math.random() * 12) + 1;
  console.log("Ruby value: " + ruby);
  $("#ruby").attr("data-crystalvalue", ruby);
 }
//sapphire random number
 function sapphireRandom () {
  
  sapphire = Math.floor(Math.random() * 12) + 1;
  console.log("Sapphire value: " + sapphire);
  $("#sapphire").attr("data-crystalvalue", sapphire);
 }

//emerald random number
function emeraldRandom () {
  
  emerald = Math.floor(Math.random() * 12) + 1;
  console.log("Emerald value: " + emerald);
  $("#emerald").attr("data-crystalvalue", emerald);
 }

 //start game
 reset();

 //on click event
 $(".crystal").on("click", function() {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  totalScore += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  $("#score").text(totalScore);

  if (totalScore === randomNumber) {
    alert("You win!");
    wins ++;
    reset();
  }

  else if (totalScore >= randomNumber) {
    alert("You lose!!");
    losses ++;
    reset();
  }
  $("#wins").text("Wins: "+ wins);
  $("#loses").text("Loses: "+ losses);
 });

 


