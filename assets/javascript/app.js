$(document).ready(function () {

  //Create Variables
  var timer = 10;
  // var userGuess = [];
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;
  // var intervalId;



  //Add on click for a start button so timer doesn't start on load
  $('#start-game').on("click", function () {
    $(this).hide();
    displayQuestion();
  });


  //Set timer
  function runTimer() {
    // clearInterval(intervalId);
    timer--;
    $("#timer").text("Time Remaining:" + " " + timer);

    if (timer === 0) {
      stop();
      unansweredQuestion();
    }
  }

  function stop() {

    clearInterval(intervalId);
  }

  //Create Questions/Answers/Results
  var questionOne = {
    question: "What breakfast cereal was Sonny the Cuckoo Bird 'cuckoo for'?",
    answers: ["Fruit Loops", "Captain Crunch", "Cocoa Puffs", "Cinnamon Toast Crunch"],
    correctAnswer: "Cocoa Puffs",
    image: "./assets/images/cocoa_puffs.jpg"
  };

  var questionTwo = {
    question: "What is the most popular Super Bowl food?",
    answers: ["Nachos", "Pizza", "Mozzerella Sticks", "Chicken Wings"],
    correctAnswer: "Chicken Wings",
    image: "./assets/images/chicken_wings.jpg"

  }

  var questionThree = {
    question: "What food is Philadephia Known For?",
    answers: ["Pizza", "Cheesesteak", "Lasagna", "Bell Peppers"],
    correctAnswer: "Cheesesteak",
    image: "./assets/images/cheesesteak.jpeg"
  }

  var questionFour = {
    question: "What is the San Francisco Treat?",
    answers: ["Rice-a-roni", "Mac-n-cheese", "Brownies", "Donuts"],
    correctAnswer: "Rice-a-roni",
    image: "./assets/images/rice_a_roni.jpg"
  }

  var questionFive = {
    question: "What beverage is like brunch in a cup?",
    answers: ["Milkshake", "Smoothie", "Bloody Mary", "Mimosa"],
    correctAnswer: "Bloody Mary",
    image: "./assets/images/bloody_mary.jpg"
  }

  var trivia = [questionOne, questionTwo, questionThree, questionFour, questionFive];

  var counter = 0

  function displayQuestion() {
    // debugger;
    console.log(trivia[counter])
    currentQuestion = trivia[counter];
    intervalId = setInterval(runTimer, 1000);
    $('#question').show();
    $('.answer-button').show();
    $('#timer').show();
    $('#question').text(currentQuestion.question);
    $('#answerA').text(currentQuestion.answers[0]).attr("data-value", currentQuestion.answers[0]).removeClass("buttons-hidden");
    $('#answerB').text(currentQuestion.answers[1]).attr("data-value", currentQuestion.answers[1]).removeClass("buttons-hidden");
    $('#answerC').text(currentQuestion.answers[2]).attr("data-value", currentQuestion.answers[2]).removeClass("buttons-hidden");
    $('#answerD').text(currentQuestion.answers[3]).attr("data-value", currentQuestion.answers[3]).removeClass("buttons-hidden");
    // counter++;
   
    // runTimer();
  }

  function nextQuestion() {
    if (counter === trivia.length - 1) {
      results();
    } else {
      stop();
      timer = 10;
      $('#correct-answer').empty();
      $('#question').show();
      $('#img-holder').empty();
      $('.answer-button').show();
      $('#timer').show();
      displayQuestion();
      counter++;
      
    }
  };

  function unansweredQuestion() {
    stop();
    $('.answer-button').hide();
    $('#timer').text("Times Up!");
    $('#img-holder').html('<img src="' + currentQuestion.image + '">');
    $("#correct-answer").html("The Correct Answer is " + currentQuestion.correctAnswer);
    unanswered++;
    setTimeout(nextQuestion, 1500);
  }

  //What occurs when the right answer is clicked
  function correct() {
    stop();
    $('button').hide();
    $("#correct-answer").show();
    $('#img-holder').show();
    $("#correct-answer").html("Good Job! The Answer is " + currentQuestion.correctAnswer);
    $('#img-holder').html('<img src="' + currentQuestion.image + '">');
    $('#question').hide(); 
    setTimeout(nextQuestion, 1500);
  }

  //What occurs when the wrong answer is clicked
  function incorrect() {
    stop();
    $('.answer-button').hide();
    $('#timer').hide();
    $('#question').hide();
    $("#correct-answer").show();
    $('#img-holder').show();
    $('#img-holder').html('<img src="' + currentQuestion.image + '">');
    $("#correct-answer").html("Guess Again! The Correct Answer is " + currentQuestion.correctAnswer);
    setTimeout(nextQuestion, 1500);
  }

  function results() {
    $('#timer').hide();
    $('#question').hide();
    $('.answer-button').hide();
    $("#correct-answer").hide();
    $('#img-holder').hide();
    $('#correct-answers').show()
    $('#incorrect-answers').show();
    $('#unanswered').show();
    $('#correct-answers').text("You got " + correctAnswers + " right!");
    $('#incorrect-answers').text("You got " + incorrectAnswers + " wrong!");
    $('#unanswered').text(unanswered + " were unanswered!");
    // setTimeout(nextQuestion, 3000);
    $('#end-game').show();
    console.log(timer);
  }

  function restartGame() {
    // timer = 10;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    counter = 0;
    $('#correct-answers').hide();
    $('#incorrect-answers').hide();
    $('#unanswered').hide();
    clearInterval(intervalId);
    displayQuestion();
  }


  //Create event listener for when an answer is clicked
  //If correct answer guessed, hide incorrect answers and show results image
  //If incorrect answer guessed keep time running until 0 or correct answer is picked
  $(".answer-button").on("click", function () {

    var userGuess = ($(this).attr("data-value"));
    console.log(userGuess);
    // stop();
    if (userGuess === currentQuestion.correctAnswer) {
      correctAnswers++;
      correct();
      console.log("You got " + correctAnswers + " answers correct!");
    } else {
      incorrectAnswers++;
      incorrect();
      console.log("You got " + incorrectAnswers + " answers wrong!");
    }

    $('#end-game').on("click", function () {
      $(this).hide();
      restartGame();
    });


  });



  //NEED HELP

  // timer has a Delay
  // witing the final results at end of Game



});