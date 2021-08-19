(function () {

    const fullName = document.querySelector(".fullName");

    const firstName = "Lotanna";
    const middleName = "Kyrian";
    const lastName = "Agbaka";

    const myFullName = `${firstName} ${middleName}, ${lastName}`;

    fullName.textContent = myFullName;
})()


// Add Nav Bar Background Color on Scroll
const profileBar = document.querySelector("#profile");

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    if (scrolled > 0) {
        profileBar.style.backgroundColor = "#182B47";
    } else {
        profileBar.style.backgroundColor = "unset";
    }
});