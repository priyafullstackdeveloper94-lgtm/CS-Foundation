const chapterHeading = document.getElementById("chapterHeading");
const chapterKey = document.getElementById("chapterKey");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

const scoreElement = document.getElementById("score");
const questionCounter = document.getElementById("questionCounter");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


// Get URL Parameters

const params = new URLSearchParams(window.location.search);

const studentClass = params.get("class");
const chapterId = params.get("chapter");



// Select JSON File

const jsonFile =
    studentClass === "11" ?
    "eleventh.json" :
    "twelfth.json";




// Convert Chapter ID to Title

const formattedTitle = chapterId
    .split("-")
    .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");



chapterHeading.textContent = formattedTitle;

chapterKey.textContent = "MCQ Questions";




// Variables

let mcqs = [];

let currentQuestion = 0;

let answeredQuestions = [];





// Fetch JSON

fetch(jsonFile)

    .then(response => response.json())

    .then(data => {


        mcqs = data[chapterId].mcq;


        displayQuestion();


    })

    .catch(error => {


        console.log("Error Loading MCQ:", error);


    });







// Display Question

function displayQuestion() {


    const mcq = mcqs[currentQuestion];



    questionElement.textContent =
        mcq.question;



    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${mcqs.length}`;



    optionsElement.innerHTML = "";

    resultElement.textContent = "";





    mcq.options.forEach(option => {



        const button = document.createElement("button");


        button.classList.add("option-btn");


        button.textContent = option;






        // Previous Answer Display

        if (answeredQuestions[currentQuestion]) {


            button.disabled = true;



            if (option === mcq.answer) {

                button.classList.add("correct");

            }



            if (
                option === answeredQuestions[currentQuestion].selected &&
                option !== mcq.answer
            ) {

                button.classList.add("wrong");

            }


        }







        button.addEventListener("click", function() {


            checkAnswer(button, option);


        });



        optionsElement.appendChild(button);



    });






    // Previous Result Display

    if (answeredQuestions[currentQuestion]) {


        if (
            answeredQuestions[currentQuestion].selected ===
            answeredQuestions[currentQuestion].correct
        ) {


            resultElement.textContent =
                "✓ Correct Answer";


        } else {


            resultElement.textContent =
                `✗ Wrong Answer. Correct Answer: ${answeredQuestions[currentQuestion].correct}`;


        }


    }







    prevBtn.disabled =
        currentQuestion === 0;



    nextBtn.disabled =
        currentQuestion === mcqs.length - 1;



    updateScore();



}








// Check Answer

function checkAnswer(button, selectedOption) {


    const mcq = mcqs[currentQuestion];



    if (answeredQuestions[currentQuestion]) {

        return;

    }





    const buttons =
        document.querySelectorAll(".option-btn");



    buttons.forEach(btn => {


        btn.disabled = true;



        if (btn.textContent === mcq.answer) {


            btn.classList.add("correct");


        }


    });






    if (selectedOption === mcq.answer) {


        button.classList.add("correct");


        resultElement.textContent =
            "✓ Correct Answer";


    } else {


        button.classList.add("wrong");


        resultElement.textContent =
            `✗ Wrong Answer. Correct Answer: ${mcq.answer}`;


    }






    answeredQuestions[currentQuestion] = {


        selected: selectedOption,


        correct: mcq.answer


    };



    updateScore();



}








// Update Score

function updateScore() {


    let score = 0;



    answeredQuestions.forEach(answer => {


        if (answer.selected === answer.correct) {


            score++;


        }


    });



    scoreElement.textContent =
        `Score : ${score}`;



}








// Next Button

nextBtn.addEventListener("click", function() {


    if (currentQuestion < mcqs.length - 1) {


        currentQuestion++;


        displayQuestion();


    }


});








// Previous Button

prevBtn.addEventListener("click", function() {


    if (currentQuestion > 0) {


        currentQuestion--;


        displayQuestion();


    }


});
