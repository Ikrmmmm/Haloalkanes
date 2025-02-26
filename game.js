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
    {
        questionText: "What type of solvent favors SN1 reactions?",
        options: ["Polar aprotic", "Polar protic", "Non-polar", "None"],
        correctAnswer: "Polar protic"
    },
    {
        questionText: "Which of these is a characteristic of SN2 reactions?",
        options: ["The reaction is bimolecular", "The rate is independent of the nucleophile", "The reaction is unimolecular", "Inversion of configuration is not observed"],
        correctAnswer: "The reaction is bimolecular"
    },
    {
        questionText: "Which type of carbocation is most stable in an SN1 reaction?",
        options: ["Primary", "Secondary", "Tertiary", "Methyl"],
        correctAnswer: "Tertiary"
    },
    {
        questionText: "Which of the following is a poor leaving group?",
        options: ["Cl-", "Br-", "I-", "OH-"],
        correctAnswer: "OH-"
    },
    {
        questionText: "In SN2 reactions, what happens to the configuration of the substrate?",
        options: ["Retention", "Inversion", "Racemization", "No change"],
        correctAnswer: "Inversion"
    },
    {
        questionText: "What does a polar aprotic solvent do in an SN2 reaction?",
        options: ["Stabilizes the nucleophile", "Decreases nucleophile reactivity", "Increases nucleophile reactivity", "Prevents the reaction from occurring"],
        correctAnswer: "Increases nucleophile reactivity"
    },
    {
        questionText: "What happens in the transition state of an SN2 reaction?",
        options: ["The nucleophile and leaving group are both partially bonded", "The nucleophile is completely bonded", "The leaving group is completely gone", "There is no transition state"],
        correctAnswer: "The nucleophile and leaving group are both partially bonded"
    },
    {
        questionText: "Which of the following is true for an SN1 reaction?",
        options: ["A carbocation intermediate is formed", "There is no intermediate", "The reaction occurs in a single step", "It is faster than SN2"],
        correctAnswer: "A carbocation intermediate is formed"
    },
    {
        questionText: "Which of the following does NOT affect the rate of an SN1 reaction?",
        options: ["Nucleophile concentration", "Solvent polarity", "Leaving group ability", "Carbocation stability"],
        correctAnswer: "Nucleophile concentration"
    },
    {
        questionText: "Which of the following best describes an SN2 reaction?",
        options: ["Bimolecular", "Unimolecular", "Involves a carbocation", "Does not require a leaving group"],
        correctAnswer: "Bimolecular"
    },
    {
        questionText: "What kind of substrate is most likely to undergo an SN1 reaction?",
        options: ["Methyl", "Primary", "Secondary", "Tertiary"],
        correctAnswer: "Tertiary"
    }
];

let currentQuestion = 0;
let score = 0;
let timer = 20;
let interval;
let playerName = '';

document.getElementById('start-btn').addEventListener('click', () => {
    playerName = document.getElementById('name').value.trim();
    if (playerName !== '') {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('quiz-screen').style.display = 'block';
        showQuestion();
    } else {
        alert('Please enter your name to start the quiz!');
    }
});

function startTimer() {
    interval = setInterval(function () {
        timer--;
        document.getElementById('timer').innerText = `Time left: ${timer}s`;
        if (timer <= 0) {
            clearInterval(interval);
            nextQuestion();
        }
    }, 1000);
}

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

function checkAnswer(answer) {
    clearInterval(interval);

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

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestion++;
    timer = 20;
    if (currentQuestion < questions.length) {
        showQuestion();
        document.getElementById('feedback').style.display = "none";
    } else {
        showFinalScore();
    }
});

function showFinalScore() {
    alert(`${playerName}, Game Over! Your final score is: ${score}`);
}

