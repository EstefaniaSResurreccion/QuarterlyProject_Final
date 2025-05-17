const data = [
    {
        question: "What is our target SDG goal?",
        answers: [
            { text: "Quality Education", correct: false },
            { text: "Life on land", correct: false },
            { text: "Economic growth and Development", correct: true },
            { text: "No Poverty", correct: false },
        ]
    },

    {
        question: "In what sector of the growing economy do we prioritize?",
        answers: [
            { text: "Industrial", correct: false },
            { text: "Agricultural", correct: true },
            { text: "Manufacturing", correct: false },
            { text: "Finances", correct: false },
        ]
    },
    {
        question: "What (month-year) did the number of exports recorded peak?",
        answers: [
            { text: "April 2022", correct: false },
            { text: "December 2022", correct: false },
            { text: "April 2021", correct: true },
            { text: "December 2021", correct: false },
        ]
    },
    {
        question: "In what sector does the Philippines rely on the most? (based on recent cases)",
        answers: [
            { text: "Export", correct: true },
            { text: "Trade", correct: false },
            { text: "Import", correct: false },
            { text: "All of the above", correct: false },
        ]
    },
    {
        question: "How many percent did the export value shift currently?",
        answers: [
            { text: "5.7% Decrease", correct: false },
            { text: "7.8% Increase", correct: false },
            { text: "10.7% Decrease", correct: false },
            { text: "10.7% Increase", correct: true },
        ]
    },
];

const questElement = document.getElementById("question");
const answerBtns = document.getElementById("ansBtn");
const nextBtn = document.getElementById("btnNext");

let indexQ = 0;
let score = 0;

function start() {
    indexQ = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let cQuestion = data[indexQ];
    let questionNum = indexQ + 1;
    questElement.innerHTML = questionNum + ". " + cQuestion.question;

    cQuestion.answers.forEach(answer => {
        const btn = document.createElement("button"); // Corrected from 'btn' to 'button'
        btn.innerHTML = answer.text;
        btn.classList.add("button");
        answerBtns.appendChild(btn);
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }

        btn.addEventListener("click", sAnswer); // Corrected to pass function reference, not call
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function sAnswer(e) {
    const choiceBtn = e.target;
    const isCorrect = choiceBtn.dataset.correct === "true";

    if (isCorrect) {
        choiceBtn.classList.add("correct");
        score++;
    } else {
        choiceBtn.classList.add("incorrect");
    }

    Array.from(answerBtns.children).forEach(btn => {
        if (btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });
    nextBtn.style.display = "block";
}

function handleNextButton() {
    indexQ++;
    if (indexQ < data.length) { // Fixed comparison here
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questElement.innerHTML = "You scored " + score + " out of " + data.length;
    nextBtn.innerHTML = "Play again";
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    if (indexQ < data.length) {
        handleNextButton();
    } else {
        start();
    }
});

start();


