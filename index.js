var question = [
    "Question 1.",
    "Question 2.",
    "Question 3.",
    "Question 4.",
    "Question 5.",
    "Question 6.",    
]

var countdownElement = document.getElementById("countdown");
var textElement = document.getElementById("text");

function prepareQuiz() {
    var timer = 10;
    var  prepareInterval = setInterval(function () {
        timer--;
        countdownElement.textContent = timer + " seconds until we start.";
        if(timer === 0) {
            clearInterval(prepareInterval);
            countdownElement.textContent = "";
            thisIsAQuiz();
        }
    }, 1000);
}

function thisIsAQuiz() {
    var currentQuestionIndex = 0;
        var startQuiz = setInterval(function() {
            textElement.textContent = questionArray[currentQuestionIndex];
            currentQuestionIndex++;
    },100);
}

prepareQuiz();