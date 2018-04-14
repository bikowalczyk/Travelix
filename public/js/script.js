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

