const chapterHeading =
    document.getElementById("chapterHeading");

const chapterKey =
    document.getElementById("chapterKey");

const codingQuestions =
    document.getElementById("codingQuestions");


// URL Parameters

const params =
    new URLSearchParams(window.location.search);

const chapterId =
    params.get("chapter");

const studentClass =
    params.get("class");


// Check Chapter

if (!chapterId) {

    codingQuestions.innerHTML =
        "<h2>Chapter not selected</h2>";

    throw new Error("Chapter missing");
}


// Convert Slug to Title

const formattedTitle =
    chapterId
        .split("-")
        .map(word =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join(" ");

chapterHeading.textContent =
    formattedTitle;

chapterKey.textContent =
    "Coding Practice";


// Fetch JSON

fetch("json/coding.json")

    .then(response => response.json())

    .then(data => {

        if (
            data[studentClass] &&
            data[studentClass][chapterId] &&
            data[studentClass][chapterId].codingPractice.length > 0
        ) {

            displayCodingQuestions(
                data[studentClass][chapterId]
                .codingPractice
            );

        } else {

            codingQuestions.innerHTML = `
                <div class="no-content">
                    <h3>No Coding Questions Available</h3>
                    <p>This chapter does not have coding practice yet.</p>
                </div>
            `;
        }

    })

    .catch(error => {

        console.log(
            "Coding JSON Loading Error:",
            error
        );

    });


// Display Questions

function displayCodingQuestions(questions) {

    codingQuestions.innerHTML = "";

    questions.forEach((problem, index) => {

        const codingCard =
            document.createElement("div");

        codingCard.classList.add(
            "coding-card"
        );

        codingCard.innerHTML = `

            <h2>
                Problem ${index + 1} :
                ${problem.title}
            </h2>

            <p class="problem-description">
                ${problem.description}
            </p>

            <div class="sample-box">

                <h4>Sample Input</h4>

                <pre>${problem.sampleInput}</pre>

            </div>

            <div class="sample-box">

                <h4>Expected Output</h4>

                <pre>${problem.sampleOutput}</pre>

            </div>

            <h3>Write Your Code</h3>

            <textarea
                class="code-editor"
                placeholder="Write your code here...">
            </textarea>

            <button
                class="run-button">
                Run Code
            </button>

            <div class="output-box">

                <h4>Output</h4>

                <pre class="output"></pre>

            </div>

        `;

        codingQuestions.appendChild(
            codingCard
        );
    });
}
