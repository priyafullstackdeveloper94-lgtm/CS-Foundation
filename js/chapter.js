const chapterHeading = document.getElementById('chapterHeading');
const chapterKey = document.getElementById('chapterKey');

const params = new URLSearchParams(window.location.search);

const studentClass = params.get("class");

const jsonFile =
    studentClass === "11" ?
    "eleventh.json" :
    "twelth.json";

const chapterId = params.get("chapter");
const type = params.get("type");


const formattedTitle = chapterId
    .split("-")
    .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

chapterHeading.textContent = formattedTitle;

const typeNames = {
    summary: "Summary Notes",
    twoMark: "Two Mark Questions",
    threeMark: "Three Mark Questions",
    fiveMark: "Five Mark Questions"
};

chapterKey.textContent = typeNames[type];



fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
        const chapter = data[chapterId];

        let containerElement = document.getElementById('containerElement');


        if (!chapter) {
            containerElement.innerHTML = "<p>Chapter not found.</p>";
            return;
        }

        let html = "";

        if (type === "summary") {

            chapter.summary.forEach(item => {
                html += `
        <h3 class="summary-heading">${item.heading}</h3>
        <p class="summary-para">${item.content}</p>
        `;
            });

        } else {

            const currentData = chapter[type];

            if (!currentData) {
                containerElement.innerHTML = "<p>Content not found.</p>";
                return;
            }

            currentData.forEach(item => {
                html += `
        <h3 class="summary-heading">${item.question}</h3>
        <p class="summary-para">${item.answer}</p>
        `;
            });

        }

        containerElement.innerHTML = html;

    });
