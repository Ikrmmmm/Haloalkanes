// Array of 15 questions (with nucleophile options and correct answers)
const questions = [
    {
        questionText: "What is the primary factor in an SN1 reaction?",
        correctAnswer: "SN1",
        nucleophile: "OH-"
    },
    {
        questionText: "Which nucleophile is most reactive in an SN2 reaction?",
        correctAnswer: "SN2",
        nucleophile: "CN-"
    },
    {
        questionText: "What is the rate-determining step in an SN1 reaction?",
        correctAnswer: "SN1",
        nucleophile: "OH-"
    },
    // Add more questions...
];

// Game state variables
let currentQuestion = 0;
let score = 0;
let timer = 60; // 60 seconds timer
let interval;

// Timer logic
function startTimer() {
    interval = setInterval(function () {
        timer--;
        document.getElementById('timer').innerText = `Time left: ${timer}s`;
        if (timer <= 0) {
            clearInterval(interval);
            alert("Time's up! Game over.");
            showFinalScore();
        }
    }, 1000);
}

// Show the next question
function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').innerText = question.questionText;
    document.getElementById('reaction-type').value = "SN1"; // Default
    document.getElementById('nucleophile').value = question.nucleophile;
}

// Submit the answer
document.getElementById('submit-btn').addEventListener('click', function () {
    const selectedReaction = document.getElementById('reaction-type').value;
    const selectedNucleophile = document.getElementById('nucleophile').value;
    
    if (selectedReaction === questions[currentQuestion].correctAnswer) {
        score++;
        document.getElementById('feedback').innerText = "Correct! Well done.";
    } else {
        document.getElementById('feedback').innerText = `Wrong! The correct answer was ${questions[currentQuestion].correctAnswer}.`;
    }

    // Update score and move to the next question
    document.getElementById('score').innerText = `Score: ${score}`;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        clearInterval(interval);
        showFinalScore();
    }
});

// Show final score
function showFinalScore() {
    alert(`Game over! Your final score is: ${score}`);
}

// Start the game
startTimer();
showQuestion();
