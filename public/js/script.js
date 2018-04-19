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

function imgHandling() {
    if(window.innerWidth >900){
    cards.forEach((element, index) => {
        element.addEventListener("mouseover", () => {
            divs.forEach((v) => { //hides all divs
                v.classList.add("d-none");
            });
            divs[index].classList.remove("d-none"); //shows div
        });
    })}

}

imgHandling();
window.onresize = ()=> {
    if(window.innerWidth >900){
        imgHandling();
    }
};


//EXITING MODAL

const modal = document.querySelector("#popup");
const modalContent = document.querySelector(".popup__content")

modal.addEventListener("click", () => {
    if (location.hash == "#popup") {
        location.hash = "#close";
    }
}, false);

modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
})



//FORM SUBMITING

const btn = document.querySelectorAll(".btn--submit");
const form = document.querySelectorAll(".card-trip__form");

btn.forEach((e, i) => {
    e.addEventListener("click", (event) => {
        event.preventDefault();
        if (form[i].checkValidity()) {
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
const validVisa = {
    number: "4133 8103 6989 3635",
    name: "Anthony Turner",
    expiry: "02/2019",
    cvc: " 999"
};

const evt = document.createEvent("HTMLEvents");
evt.initEvent("keyup", false, true);

const popup__form = document.querySelector(".popup__form");

function dEvent() {
    document.querySelector("#number").dispatchEvent(evt);
    document.querySelector("#name").dispatchEvent(evt);
    document.querySelector("#expiry").dispatchEvent(evt);
    document.querySelector("#cvc").dispatchEvent(evt);
}

document.querySelector("#pay").addEventListener("click", (e) => {
    e.preventDefault();

    if (!popup__form.checkValidity() || document.querySelectorAll(".jp-card-invalid").length > 0) {
        document.querySelector("#number").value = validVisa.number;
        document.querySelector("#name").value = validVisa.name;
        document.querySelector("#expiry").value = validVisa.expiry;
        document.querySelector("#cvc").value = validVisa.cvc;
        dEvent();

    } else {
        document.querySelector("#confirm").classList.remove("d-none");
        setTimeout(() => {
            document.querySelector("#confirm").classList.add("d-none");
            location.hash = "#close";
        }, 1200);
        popup__form.reset();
        dEvent();

    }
})


//MOBILE OVERLAY
document.querySelector(".overlay__exit").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#overlay").style.width = "0%";
    setTimeout(() => {
        location.hash = "#close";
        document.querySelector("#overlay").style.width = "100%";
    }, 700);
})

