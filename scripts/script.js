function clickHEMAlogo(){
	var sound = document.getElementById('audio');
	sound.play();
}


document.getElementById("hamburger").addEventListener("click", function() {
    var menu = document.getElementById("navMenu");
    menu.classList.toggle("active"); // Voeg de 'active' class toe of verwijder deze
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Check for saved mode on page load
window.onload = function() {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
};

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Save preference to local storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}