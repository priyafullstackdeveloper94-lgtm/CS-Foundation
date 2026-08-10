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


let chapterView = document.getElementById("chapterView");


for (let chapter of chaptersEleven) {


    let listElement = document.createElement("a");

    listElement.classList.add("mainlistview");


    listElement.innerHTML = `
        <span>${chapter.title}</span>
        <i class="fa-solid fa-eye"></i>
    `;


    listElement.href =
        `coding.html?class=11&chapter=${chapter.id}`;


    chapterView.appendChild(listElement);


    let arrow =
        listElement.querySelector("i");


    listElement.addEventListener("click", function() {

        arrow.classList.toggle("rotate");

    });

}
