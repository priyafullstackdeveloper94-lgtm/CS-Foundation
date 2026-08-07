const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const resultElement =
    document.getElementById("result");

const scoreElement =
    document.getElementById("score");

const questionCounter =
    document.getElementById("questionCounter");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;
let answeredQuestions = [];

const params =
    new URLSearchParams(window.location.search);

const studentClass =
    params.get("class");

const chapter =
    params.get("chapter");

const jsonFile =
    studentClass === "11" ?
    "eleventh.json" :
    "twelfth.json";

let mcqs = [];

fetch(jsonFile)
    .then(response => response.json())
    .then(data => {

        mcqs = data[chapter].mcq;

        displayQuestion();

    });

function displayQuestion() {

    const mcq = mcqs[currentQuestion];

    questionElement.textContent =
        mcq.question;

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${mcqs.length}`;

    optionsElement.innerHTML = "";
    resultElement.textContent = "";

    mcq.options.forEach(option => {

        const button =
            document.createElement("button");

        button.classList.add("option-btn");

        button.textContent = option;

        button.addEventListener(
            "click",
            () => checkAnswer(button, option)
        );

        optionsElement.appendChild(button);

    });

    prevBtn.disabled =
        currentQuestion === 0;

    nextBtn.disabled =
        currentQuestion === mcqs.length - 1;

}

function checkAnswer(button, selectedOption) {

    const mcq = mcqs[currentQuestion];

    if (answeredQuestions[currentQuestion]) {
        return;
    }

    const allButtons =
        document.querySelectorAll(".option-btn");

    allButtons.forEach(btn => {

        btn.disabled = true;

        if (btn.textContent === mcq.answer) {
            btn.classList.add("correct");
        }

    });

    if (selectedOption === mcq.answer) {

        button.classList.add("correct");

        resultElement.textContent =
            "✓ Correct Answer";

        score++;

        scoreElement.textContent =
            `Score : ${score}`;

    } else {

        button.classList.add("wrong");

        resultElement.textContent =
            `✗ Wrong Answer. Correct Answer: ${mcq.answer}`;

    }

    answeredQuestions[currentQuestion] = true;

}

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    displayQuestion();

});

prevBtn.addEventListener("click", () => {

    currentQuestion--;

    displayQuestion();

});
