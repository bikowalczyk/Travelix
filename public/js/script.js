//FIXED NAVBAR

const composition = document.querySelector(".composition");
const navbar = document.querySelector(".navbar");

window.onscroll = () => {

    if (composition.getBoundingClientRect().bottom <= 0) {
        navbar.classList.add("navbar--fixed");
    }

    if (composition.getBoundingClientRect().bottom >= 0) {
        navbar.classList.remove("navbar--fixed");
    }
}

//LEARN MORE SECTION IMAGE HANDLING

