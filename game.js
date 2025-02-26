// List of questions with multiple choice options
const questions = [
    {
        questionText: "What is the primary factor in an SN1 reaction?",
        options: ["Nucleophile concentration", "Leaving group ability", "Solvent polarity", "Carbon chain length"],
        correctAnswer: "Solvent polarity"
    },
    {
        questionText: "Which nucleophile is most reactive in an SN2 reaction?",
        options: ["OH-", "CN-", "CH3O-", "Cl-"],
        correctAnswer: "CN-"
    },
    {
        questionText: "Which reaction mechanism requires a good leaving group?",
        options: ["SN1", "SN2", "Both", "None"],
        correctAnswer: "Both"
    },
    {
        questionText: "What is a characteristic of SN2 reactions?",
        options: ["They have a slow rate-determining step", "They involve a transition state", "They occur with inversion of configuration", "They are unaffected by the solvent"],
        correctAnswer: "They occur with inversion of configuration"
    },
    // Add more questions (total of 15)
];

// Game state variables
let currentQuestion = 0;
let score = 0;
let timer = 10; // 10 seconds per question
let interval;
let selectedAnswer = "";

// Timer logic
function startTimer() {
    interval = setInterval(function () {
        timer--;
        document.getElementById('timer').innerText = `Time left: ${timer}s`;
        if (timer <= 0) {
            clearInterval(interval);
            nextQuestion(); // Automatically go to next question if time is up
        }
    }, 1000);
}

// Show the next question
function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').innerText = question.questionText;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = ''; // Clear previous options
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsDiv.appendChild(button);
    });

    document.getElementById('next-btn').style.display = "none";
    startTimer();
}

// Check the selected answer and give feedback
function checkAnswer(answer) {
    clearInterval(interval);
    selectedAnswer = answer;
    
    const question = questions[currentQuestion];
    const feedbackDiv = document.getElementById('feedback');
    
    if (answer === question.correctAnswer) {
        score++;
        feedbackDiv.innerText = "Correct! Well done.";
    } else {
        feedbackDiv.innerText = `Wrong! The correct answer was ${question.correctAnswer}.`;
    }

    document.getElementById('score').innerText = `Score: ${score}`;
    feedbackDiv.style.display = "block";
    document.getElementById('next-btn').style.display = "block";
}

// Move to the next question
document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestion++;
    timer = 10;
    if (currentQuestion < questions.length) {
        showQuestion();
        document.getElementById('feedback').style.display = "none";
    } else {
        showFinalScore();
    }
});

// Show final score after all questions
function showFinalScore() {
    alert(`Game Over! Your final score is: ${score}`);
}

// Start the game
showQuestion();
