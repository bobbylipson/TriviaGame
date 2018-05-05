var triviaQuestions = [{
    question: "Which is the only NFL team to go a whole season undefeated, including the Super Bowl?",
    answerList: ["New England Patriots", "Green Bay Packers", "Miami Dolphins", "Oakland Raiders"],
    answer: 2
},{
    question: "Which is the only country to have played in each and every World Cup?",
    answerList: ["Englad", "USA", "Germany", "Brazil"],
    answer: 3
},{
    question: "Who was the first US president to throw out the ceremonial first pitch at an MLB game?",
    answerList: ["William Taft", "Richard Nixon", "George W. Bush", "Dwight D. Eisenhower"],
    answer: 0
},{
    question: "What golfer led the PGA Tour in driving distance for eight years during the 90's?",
    answerList: ["Phil Mickelson", "Tiger Woods", "John Daly", "Payne Stewart"],
    answer: 2
},{
    question: "Who holds the career record for most runs scored in MLB history?",
    answerList: ["Barry Bonds", "Rickey Henderson", "Babe Ruth", "Ty Cobb"],
    answer: 1
},{
    question: "Which boxer was a 42-1 underdog when he KO'd Mike Tyson in 1990?",
    answerList: ["Evander Holyfield", "Buster Douglas", "Rocky Balboa", "George Foreman"],
    answer: 2
},{
    question: "Who is the only athlete to play in The World Series and The Super Bowl?",
    answerList: ["Tim Tebow", "Bo Jackson", "Deion Sanders", "Michael Jordan"],
    answer: 2
},{
    question: "Which NFL team appeared in 4 consecutive Super Bowls and lost them all?",
    answerList: ["Buffalo Bills", "Detroit Lions", "Cleveland Browns", "Dallas Cowboys"],
    answer: 0
},{
    question: "Which golfer has a nickname of the Golden Bear?",
    answerList: ["Arnold Palmer", "Jack Nicklaus", "Tiger Woods", "Fred Couples"],
    answer: 1
},{
    question: "Who was the first MLB players to throw over 100 mph?",
    answerList: ["Randy Johnson", "Rodger Clemons", "Nolan Ryan", "Justin Verlander"],
    answer: 2
}];

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10'];
var currentQuestion; 
var correctAnswer; 
var incorrectAnswer;
var unanswered; 
var seconds;
var time;
var answered;
var userSelect; 
var messages = {
    correct: "Got it!",
    incorrect: "WRONG!",
    endTime: "Couldn't beat the clock!",
    finished: "Game over! Let's see how we did",
}

$('#startBtn').on('click', function(){
    $(this).hide();
    newGame();
});

$('#startOverBtn').on('click', function(){
    $(this).hide();
    newGame();
});

function newGame() {
    $('#finalMessage').empty();
    $('#correctAnswers').empty();
    $('#incorrectAnswers').empty();
    $('#unanswered'),empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();
}

function newQuestion() {
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#image').empty();
    answered = true;

    // sets up new questions and answerList
    $('#currentQuestion').html('Question #' + (currentQuestion+1) + '/' + triviaQuestions.length);
    $('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
    for(var i = 0; i < 4; i++) {
        var choices = $('<div>');
        choices.text(triviaQuestions[currentQuestion].answerList[i]);
        choices.attr({'data-index': i });
        choices.addClass('thisChoice');
        $('.answerList').append(choices);
    }

    countdown();
    //pause time and go to answerPage
    $('.thisChoice').on('click',function() {
        userSelect = $(this).data('index');
        clearInterval(time);
        answerPage();
    });
}

function countdown() {
    seconds = 15;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    answered = true;
    //sets timer to go down
    time = setInterval(showCountdown, 1000);
}

function showCountdown() {
    seconds--;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    if(seconds < 1) {
        clearInterval(time);
        answered = false;
        answerPage();
    }
}

function answerPage() {
    $('#currentQuestion').empty();
    $('.thisChoice').empty();
    $('.question').empty();

    var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    $('#image').html('<img src = "assets/images/'+ imageArray[currentQuestion] + 'image" width = "400px>');

    //check to see if correct
    if((userSelect == rightAnswerIndex) && (answered == true)) {
        correctAnswer++;
        $('#message').html(messages.correct);
    } else if((userSelect != rightAnswerIndex) && (answered == true)) {
        incorrectAnswer++;
        $('#message').html(messages.incorrect);
        $('#correctedAnswer').html('The correct answer was: ' + rightAnswerIndex);
    } else {
        unanswered++;
        $('#message').html(messages.endTime);
        $('#correctedAnswer').html('The correct answer was: ' + rightAnswerIndex);
        answered = true;
    }

    if(currentQuestion == (triviaQuestions.length-1)) {
        setTimeout(scoreboard, 5000)
    } else {
        currentQuestion++;
        setTimeout(newQuestion, 5000);
    }
}

function scoreboard() {
    $('#timeLeft').empty();
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#image').empty();

    $('#finalMessage').html(messages.finished);
    $('#correctedAnswers').html("Correct Answers: " + correctAnswer);
    $('#incorrectedAnswers').html("Incorrect Answers: " + incorrectAnswer);
    $('#unanswered').html("Unanswered: " + unanswered);
    $('#startOverBtn').addClass('reset');
    $('#startOverBtn').show();
    $('#startOverBtn').html('Start Over?');
}
