const chaptersTwelve = [{
        id: "function",
        title: "Function"
    },
    {
        id: "data-abstraction",
        title: "Data Abstraction"
    },
    {
        id: "scoping",
        title: "Scoping"
    },
    {
        id: "algorithmic-strategies",
        title: "Algorithmic Strategies"
    },
    {
        id: "python-variables-operators",
        title: "Python Variables and Operators"
    },
    {
        id: "control-structures",
        title: "Control Structures"
    },
    {
        id: "python-functions",
        title: "Python Functions"
    },
    {
        id: "strings-manipulation",
        title: "Strings and String Manipulation"
    },
    {
        id: "lists-sets-tuples-dictionary",
        title: "Lists, Sets, Tuples and Dictionary"
    },
    {
        id: "python-classes-objects",
        title: "Python Classes and Objects"
    },
    {
        id: "database-concepts",
        title: "Database Concepts"
    },
    {
        id: "sql",
        title: "Structured Query Language (SQL)"
    },
    {
        id: "python-csv-files",
        title: "Python and CSV Files"
    },
    {
        id: "importing-cpp-python",
        title: "Importing C++ Programs in Python"
    },
    {
        id: "data-manipulation-sql",
        title: "Data Manipulation through SQL"
    },
    {
        id: "data-visualization-pyplot",
        title: "Data Visualization using Pyplot"
    }
];
const links = [{
        text: "Summary Notes",
        key: "summary"
    },
    {
        text: "Two Mark Questions",
        key: "twoMark"
    },
    {
        text: "Three Mark Questions",
        key: "threeMark"
    },
    {
        text: "Five Mark Questions",
        key: "fiveMark"
    }
];


let chapterView = document.getElementById("chapterView");

for (let chapter of chaptersTwelve) {

    // Main Chapter Item
    let listElement = document.createElement("li");
    listElement.classList.add("mainlistview");

    listElement.innerHTML = `
        <span>${chapter.title}</span>
        <i class="fa-solid fa-circle-arrow-down"></i>
    `;

    chapterView.appendChild(listElement);

    // Sub Container
    let subcontainer = document.createElement("div");
    subcontainer.classList.add("sublist");

    let ulElement = document.createElement("ul");
    ulElement.classList.add("chapterssub");

    // Create Summary / 2 Mark / 3 Mark / 5 Mark
    for (let item of links) {

        let listsubElement = document.createElement("li");
        listsubElement.classList.add("sublistview");

        let linksubElement = document.createElement("a");
        linksubElement.classList.add("sublistlink");

        linksubElement.href = `chapter.html?class=12&chapter=${chapter.id}&type=${item.key}`; // replace later
        linksubElement.textContent = item.text;

        listsubElement.appendChild(linksubElement);
        ulElement.appendChild(listsubElement);
    }

    subcontainer.appendChild(ulElement);
    chapterView.appendChild(subcontainer);

    let arrow = listElement.querySelector('i');

    // Toggle Sub List
    listElement.addEventListener("click", function() {
        subcontainer.classList.toggle("active");
        arrow.classList.toggle("rotate");
    });
}
