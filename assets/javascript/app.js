$(document).ready(function () {

  //Create Variables
  var timer = 30;
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;
  var intervalId;

  //Create Reset
  function resetGame() {
    var timer = 30;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
  }

  //Set timer
  function runTimer() {
    // clearInterval(intervalId);
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

  runTimer();

  //Create Questions/Answers

  var questionOne = {
    question: "What breakfast cereal was Sonny the Cuckoo Bird 'cuckoo for'?",
    answers: ["Fruit Loops", "Captain Crunch", "Cocoa Puffs", "Cinnamon Toast Crunch"],
    correctAnswer: "Cocoa Puffs"
  };

  $('#question').text(questionOne.question);
  $('#answerA').text(questionOne.answers[0]);
  $('#answerB').text(questionOne.answers[1]);
  $('#answerC').text(questionOne.answers[2]);
  $('#answerD').text(questionOne.answers[3]);

  var questionTwo = {
    question: "What is the most popular Super Bowl food?",
    answers: ["Nachos", "Pizza", "Mozzerella Sticks", "Chicken Wings"],
    correctAnswer: "Chicken Wings"
  }

  var questionThree = {
    question: "What food is Philadephia Known For?",
    answers: ["Pizza", "Cheesesteak", "Lasagna", "Bell Peppers"],
    correctAnswer: "Cheesesteak"

  }

  var questionFour = {
    question: "What is the San Francisco Treat?",
    answers: ["Rice-a-roni", "Mac-n-cheese", "Brownies", "Donuts"],
    correctAnswer: "Rice-a-roni"
  }

  var questionFive = {
    question: "What beverage is like brunch in a cup?",
    answers: ["Milkshake", "Smoothie", "Bloody Mary", "Mimosa"],
    correctAnswer: "Bloody Mary"
  }

  //Create event listener for hover
  $("button").mouseenter(function(){
    $(this).css("background-color", "red");
  });

  $("button").mouseleave(function(){
      $(this).css("backgound-color", "white");
  });

  //Create event listener for when an answer is clicked
$("button").on("click", function(){
    if (questionOne.answers === questionOne.correctAnswer) {
    correctAnswers++;
    alert("You are right!");
  } else {
    alert("You are wrong!"); 
  }
});

  //Show final results
});
