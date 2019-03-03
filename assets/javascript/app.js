$(document).ready(function () {
  // Start with the count down timer.
  // We will set our number counter to 50
  var countDown = 20;
  // Var to track the question
  var questionNum = 0

  // Variable that will hold our interval ID when we execute
  var intervadId;
  var runningClock = false;
  var score = 0

  //  When the start button gets clicked, start the game

  // Create a questions object with an arrey of answers
  
  var myQuestions = [
    {
      question: " Which of these in NOT a name of one of the Spice Girls?",
      choices: ["Sporty", "Baby", "Scary", "Pineapple"],
      answer: ["Pineapple"]
    }

  ]
  for (var i = 0; i < myQuestions.length; i++) {
    //console.log(myQuestions[0])
    //$("#listQ").text(myQuestions[questionNum].question)
  }



  $("#start").on("click", function () {
    if (!runningClock) {
      //clearInterval(intervadId);
      intervadId = setInterval(decrement, 1000);
      runningClock = true;
    }
  });


  // function run() {
  //   if (!runningClock) {
  //     //clearInterval(intervadId);
  //     intervadId = setInterval(decrement, 1000);
  //     runningClock = true;
  //   }
  // }
  function stop() {
    clearInterval(intervadId);
    runningClock = false;
    //alert("Times Up!")
  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    countDown--;

    //  Show the number in the #time-remainng tag.
    $("#time-remaining").html("<h2>" + countDown + "<h2>")


    //  Once number hits zero...
    if (countDown == 0) {



      //  ...run the stop function.
      stop();
      alert("Times Up!")
    }

    //  Alert the user that time is up.
  }
  // function stop() {
  //   clearInterval(intervadId)
  //   //alert("Times Up!")
  // }
  //run()
  // Show results


});
// The game ends when the time runs out.

//The page will reveal the number of questions that players answer correctly and incorrectly.

// create trivia questions with a multiple choice or true/false choice

//Don't let the player pick more than one answer per question.