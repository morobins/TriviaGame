$(document).ready(function () {

  //Create Variables
  var timer = 10;
  // var userGuess = [];
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;
  var intervalId;

  //Create Reset
  function resetGame() {
    var timer = 20;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
  }

  //Add on click for a start button so timer doesn't start on load
  $('#start-game').on("click", function () {
    $(this).hide();
    displayQuestion();
  });

  function unansweredQuestion() {
    $('.answer-button').hide();
    $('#timer').text("Times Up!");
    $('#img-holder').html('<img src="' + currentQuestion.image + '">');
    $("#correct-answer").html("The Correct Answer is " + currentQuestion.correctAnswer);
    unanswered++;
    stop();
    setTimeout(nextQuestion, 3000);
  }
  //Set timer
  function runTimer() {
    // clearInterval(intervalId);
    timer--;
    $("#timer").text("Time Remaining:" + " " + timer);

    if (timer === 0) {
      // stop();
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
    $('#question').text(currentQuestion.question);
    $('#answerA').text(currentQuestion.answers[0]).attr("data-value", currentQuestion.answers[0]).removeClass("buttons-hidden");
    $('#answerB').text(currentQuestion.answers[1]).attr("data-value", currentQuestion.answers[1]).removeClass("buttons-hidden");
    $('#answerC').text(currentQuestion.answers[2]).attr("data-value", currentQuestion.answers[2]).removeClass("buttons-hidden");
    $('#answerD').text(currentQuestion.answers[3]).attr("data-value", currentQuestion.answers[3]).removeClass("buttons-hidden");
    // counter++;
    intervalId = setInterval(runTimer, 1000);
    // runTimer();
  }

  function nextQuestion() {
    $('#correct-answer').empty();
    $('#question').show();
    $('#img-holder').empty();
    $('.answer-button').show();
    $('#timer').show();
    timer = 10;
    counter++;
    displayQuestion();
  };

  //What occurs when the right answer is clicked
  function correct() {
    $('button').hide();
    $("#correct-answer").html("Good Job! The Answer is " + currentQuestion.correctAnswer);
    $('#img-holder').html('<img src="' + currentQuestion.image + '">');
    $('#question').hide();
    stop();
    setTimeout(nextQuestion, 3000);
  }

  //What occurs when the wrong answer is clicked
  function incorrect() {
    $('.answer-button').hide();
    $('#timer').hide();
    $('#question').hide();
    $('#img-holder').html('<img src="' + currentQuestion.image + '">');
    $("#correct-answer").html("Guess Again! The Correct Answer is " + currentQuestion.correctAnswer);
    stop();
    setTimeout(nextQuestion, 3000);
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
      console.log("You got " + correctAnswers + "answers correct!");
    } else {
      incorrectAnswers++;
      incorrect();
      console.log("You got " + incorrectAnswers + " answers wrong!");
    }

    // } else if (unanswered++) { 
    //   $("#answerButtons").hide();
    //   $("#correct-answer").html("The Correct Answer is " + currentQuestion.correctAnswer);
    //   $('#img-holder').html('<img src="' + currentQuestion.image + '">');
    //   nextQuestion();
    //   }


  });

  //Show final results
  // $('#timer').hide();
  // $('#question').hide();
  // $('.answer-button').hide();
  // $("#correct-answer").hide();
  // $('#img-holder').html('<img src="' + currentQuestion.image + '">');
  // $('#correct-answers').text(correctAnswers);
  // $('#incorrect-answers').text(incorrectAnswers);
  // $('#unanswered').text(unanswered);

  //NEED HELP

  // timer has a Delay
  // witing the final results at end of Game



});