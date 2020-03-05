
let questions = [{
    question: "Who is the only player to have scored in a Champions League final, FA Cup final, UEFA Cup final and League Cup final?",
    choices: ["Frank Lampard", "Thierry Henry", "Didier Drogba", "Steven Gerrard"],
    correctAnswer: 3
}, {
    question: "Who is the only player to have won the Champions League, Premier League, UEFA Cup and FA Cup and be relegated from the Premier League?",
    choices: ["Kevin Phillips", "Peter Crouch", "Nwankwo Kanu", "Robbie Savage"],
    correctAnswer: 2
}, {
    question: "Who won the first ever World Cup?",
    choices: ["Uruguay", "Brazil", "Argentina","France"],
    correctAnswer: 0
}, {
    question: "Who is the only player to have represented three different countries at the World Cup?",
    choices: ["Mirko Vucinic", "Dmitri Kharine", "Dejan Stankovic", "Oleh Luzhny"],
    correctAnswer: 2
}, {
    question: "Who is the only player to score for six clubs in the Champions League?",
    choices: ["Nicolas Anelka", "Zlatan Ibrahimovic", "Ronaldo de Lima", "Clarence Seedorf"],
    correctAnswer: 1
}, {
    question: "Who's the only player to score a hat trick in the Premier League, FA Cup and Champions League?",
    choices: ["Yossi Benayoun", "Sergio Aguero", "Daniel Sturridge", "Ole Gunnar Solskjær"],
    correctAnswer: 0	
	
}, {
    question: "Who once said: Football is a simple game. Twenty-two men chase a ball for 90 minutes and at the end, the Germans always win.?",
    choices: ["Petar Borota", "Johan Cruyff", "Michel Platini", "Gary Lineker"],
    correctAnswer: 3	
}, {
    question: "England first entered the Football World Cup in 1950, how many tournaments have they failed to qualify for since then?",
    choices: ["Two", "Three", "None", "One"],
    correctAnswer: 1
}, {
    question: "Who was appointed team captain of Aston Villa for the 2017–18 season?",
    choices: ["Christopher Samba", "John Terry", "Mile Jedinak", "Alan Hutton"],
    correctAnswer: 1

}, {
    question: "Which Chelsea footballer played every minute of the season for the club when they won the domestic league in 2017?",
    choices: ["Thibaut Courtois", "Cesar Azpilicueta", "N'Golo Kante", "Eden Hazard"],
    correctAnswer: 1

}, {
    question: "Which South American Nation have never won the Copa America?",
    choices: ["Ecuador", "Paraguay", "Bolivia", "Peru"],
    correctAnswer: 0

	}, {
    question: "Which Club has the worst All-Time Premier League Goal Difference?",
    choices: ["Reading", "Middlesbrough ", "Sunderland", "West Brom"],
    correctAnswer: 2
}];

let currentQuestion = 0;
let correctAnswers = 0;
let quizOver = false;

$(document).ready(function () {

    
    displayCurrentQuestion();
    $(this).find("#quizMessage").hide();

    
    $(this).find("#nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find("#quizMessage").text("Please select an answer");
                $(document).find("#quizMessage").show();
            } else {
                
                $(document).find("#quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find("#nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find("#nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});


function displayCurrentQuestion() {

    let question = questions[currentQuestion].question;
    let questionClass = $(document).find("#quizContainer > #question");
    let choiceList = $(document).find("#quizContainer > #choiceList");
    let numChoices = questions[currentQuestion].choices.length;
    
    $(questionClass).text(question);

    
    $(choiceList).find("li").remove();

    let choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        
        $('<li id="lista"><input id="ime" type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find("#quizContainer > #result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find("#quizContainer > #result").show();
}

function hideScore() {
    $(document).find("#result").hide();
}