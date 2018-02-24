//Create Variables
var timer = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var intervalId;

//Create Questions/Answers

var questions = ["What breakfast cereal was Sonny the Cuckoo Bird 'cuckoo for'?", "What is the most popular Super Bowl food?", "What food is Philadephia Known For?", "What is the San Francisco Treat?", "What beverage is like brunch in a cup?"];

var answers = ["Fruit Loops", "Captain Crunch", "Cocoa Puffs", "Cinnamon Toast Crunch"], ["Nachos", "Pizza", "Mozzerella Sticks", "Chicken Wings"], ["Pizza", "Cheesesteak", "Lasagna", "Bell Peppers"], ["Rice-a-roni", "Mac-n-cheese", "Brownies", "Donuts"], ["Milkshake", "Smoothie", "Bloody Mary", "Mimosa"];

var correctAnswers = ["Cocoa Puffs", "Chicken Wings", "Cheesesteak", "Rice-a-roni", "Bloddy Mary"];



//Set timer
// function decrement() {

  function run() {
    //Clear the intervalId first to allow multiple instances
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {

    timer--;

    $("#timer").text("Time Remaining:" + " " + timer);

    if (timer === 0) {

      stop();

      alert("Time Up!");
    }
  }

  function stop() {

    clearInterval(intervalId);
  }

  run();



  

  // if (timer === 0) {

  //   stop();
  // }


//  = setInterval(decrement, 1000);

//Create event listener for hover

//Create event listener for when an answer is clicked



