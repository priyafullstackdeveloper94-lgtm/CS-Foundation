const chaptersEleven = [{
        id: "introduction-to-computers",
        title: "Introduction to Computers"
    },
    {
        id: "number-systems",
        title: "Number Systems"
    },
    {
        id: "computer-organization",
        title: "Computer Organization"
    },
    {
        id: "operating-system",
        title: "Theoretical Concepts of Operating System"
    },
    {
        id: "windows-operating-system",
        title: "Working with Windows Operating System"
    },
    {
        id: "specification-and-abstraction",
        title: "Specification and Abstraction"
    },
    {
        id: "composition-and-decomposition",
        title: "Composition and Decomposition"
    },
    {
        id: "iteration-and-recursion",
        title: "Iteration and Recursion"
    },
    {
        id: "introduction-to-cpp",
        title: "Introduction to C++"
    },
    {
        id: "flow-of-control",
        title: "Flow of Control"
    },
    {
        id: "functions",
        title: "Functions"
    },
    {
        id: "oops-techniques",
        title: "Introduction to Object Oriented Programming Techniques"
    },
    {
        id: "arrays-and-structures",
        title: "Arrays and Structures"
    },
    {
        id: "classes-and-objects",
        title: "Classes and Objects"
    },
    {
        id: "polymorphism",
        title: "Polymorphism"
    },
    {
        id: "inheritance",
        title: "Inheritance"
    },
    {
        id: "computer-ethics-and-cyber-security",
        title: "Computer Ethics and Cyber Security"
    },
    {
        id: "tamil-computing",
        title: "Tamil Computing"
    }
];


const link = [{
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

for (let chapter of chaptersEleven) {

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
    for (let item of link) {

        let listsubElement = document.createElement("li");
        listsubElement.classList.add("sublistview");

        let linksubElement = document.createElement("a");
        linksubElement.classList.add("sublistlink");

        linksubElement.href = `chapter.html?class=11&chapter=${chapter.id}&type=${item.key}`; // replace later
        linksubElement.textContent = item.text;

        listsubElement.appendChild(linksubElement);
        ulElement.appendChild(listsubElement);
    }

    subcontainer.appendChild(ulElement);
    chapterView.appendChild(subcontainer);

    // Toggle Sub List


    const arrow = listElement.querySelector("i");

    listElement.addEventListener("click", function() {
        subcontainer.classList.toggle("active");
        arrow.classList.toggle("rotate");
    });
}
