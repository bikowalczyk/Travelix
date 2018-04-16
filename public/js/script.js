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

//LEARN MORE SECTION - IMAGE HANDLING

const cards = document.querySelectorAll(".card-people-container"); //nodelist element
const divs = document.querySelectorAll(".learn-more__content--pictures");

cards.forEach((element, index) => {
    element.addEventListener("mouseover", () => {
        divs.forEach((v) => { //hides all divs
            v.classList.add("d-none");
        });

        divs[index].classList.remove("d-none"); //shows div



    });

})

//EXITING MODAL

const modal = document.querySelector("#popup");

modal.addEventListener("click", () => {
    if (location.hash == "#popup") {
        location.hash = "#close";
    }
}, false);


//FORM SUBMITING

const btn = document.querySelector(".btn--submit");
const form = document.querySelectorAll(".card-trip__form");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (form[0].checkValidity()) {

        location.hash = "#popup";
    }

})


//CONTACT US
const popupForm = document.querySelector("#popup--form");
const btnContact = document.querySelector(".btn--contact");
const formContact = document.querySelector(".contact__content-form")

btnContact.addEventListener("click", (e) => {

    if (formContact.checkValidity()) {
        e.preventDefault();
        location.hash = "#popup--form";

        setTimeout(() => {
            location.hash = "#close";
        }, 2000);
    }
})