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
const modalContent = document.querySelector(".popup__content")

modal.addEventListener("click", () => {
    if (location.hash == "#popup") {
        location.hash = "#close";
    }
}, false);

modalContent.addEventListener("click",(e)=>{
    e.stopPropagation();
})



//FORM SUBMITING

const btn = document.querySelectorAll(".btn--submit");
const form = document.querySelectorAll(".card-trip__form");

btn.forEach((e,i)=>{
    e.addEventListener("click",(event)=>{
        event.preventDefault();
        if (form[i].checkValidity()){
            location.hash = "#popup";
        }
    })
})

//CONTACT US
const popupForm = document.querySelector("#popup--form");
const btnContact = document.querySelector(".btn--contact");
const formContact = document.querySelector(".contact__content-form")

btnContact.addEventListener("click", (e) => {

    if (formContact.checkValidity()) {

        location.hash = "#popup--form";


        setTimeout(() => {
            location.hash = "#close";
            formContact.reset();
        }, 3000);
    }
})

popupForm.addEventListener("click", () => {
    if (location.hash == "#popup--form") {
        location.hash = "#close";
    }
}, false);


//CREDIT CARD
var card = new Card({
    // a selector or DOM element for the form where users will
    // be entering their information
    form: '.popup__form', // *required*
    // a selector or DOM element for the container
    // where you want the card to appear
    container: '.card-container', // *required*
});

//CREDIT CARD FORM VALIDATION



