const classDialog = document.getElementById("classDialog");

const exploreTopicsBtn = document.getElementById("exploreTopicsBtn");
const okBtn = document.getElementById("okBtn");

// Open Dialog

exploreTopicsBtn.addEventListener("click", function() {
    classDialog.showModal();
});

// Handle Selection
okBtn.addEventListener("click", function() {

    const selectedClass = document.querySelector(
        'input[name="studentClass"]:checked'
    );

    if (!selectedClass) {
        alert("Please select a class");
        return;
    }

    if (selectedClass.value === "11") {
        window.location.href = "chapter11.html";
    } else if (selectedClass.value === "12") {
        window.location.href = "chapter12.html";
    }

});
