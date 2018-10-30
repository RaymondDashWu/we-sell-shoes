// gets three dots
const nextNext = document.getElementById('next-next');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

// individual testimonials
const testi1 = document.querySelector('testimonial testi-1');
const testi2 = document.querySelector('testimonial testi-2');
const testi3 = document.querySelector('testimonial testi-3');

// testimonial parent container
const tests = document.querySelector('.tests');

let nextNextInt = window.setInterval(function () {
    // checks for/removes second class
    if (tests.classList.contains('second')) {
        tests.classList.remove('first');
        // adds class which shows third testimonial
        tests.classList.add('second');
    }
}, 4000)

let nextInt = window.setInterval(function () {
    // checks for/removes first class
    if (tests.classList.contains('first')) {
        tests.classList.remove('first');

        // adds class that shows second testimonial
        tests.classList.add('second');
    }
}, 8000)

let prevint = window.setInterval(function () {
    // checks for and removes third class
    if (tests.classList.contains('third')) {
        tests.classList.remove('third');
        // adds class that has first testimonial
        tests.classList.add('first');
    }
}, 16000)

function dotClick(oldClassOne, oldClassTwo, newClass) {
    if (tests.classList.contains(oldClassOne)) {
        tests.classList.remove(oldClassOne);
    }

    if (tests.classList.contains(oldClassTwo)) {
        tests.classList.remove(oldClassTwo)
    }

    window.clearInterval(nextNextInt);
    window.clearInterval(nextInt);
    window.clearInterval(prevint);
    tests.classList.add(newClass);
}

nextNext.addEventListener("click", function () {
    dotClick('second', 'first', 'third');
})

next.addEventListener("click", function () {
    dotClick('first', 'third', 'second');
})

prev.addEventListener("click", function () {
    dotClick('second', 'third', 'first');
})

//delcare default vars
const acc = document.getElementsByClassName("accordion");

//loop through all accordion buttons
for (let i = 0; i < acc.length; i++) {

    //trigger an event after click
    acc[i].addEventListener("click", function () {
        //add in the active class
        this.classList.toggle("active");

        //select sibling element
        let panel = this.nextElementSibling;

        //if sibling is open, close it, if closed, open it
        if (panel.style.maxHeight) {
            // panel is open
            panel.style.maxHeight = null;
        } else {
            // panel is closed
            panel.style.maxHeight = panel.scrollHeight + "px";

        }
    });
}

// POPUP
const popUp = document.getElementById('pop-up');
const popUpLayer = document.getElementById('pop-up-layer');
const closeModal = document.getElementById('close-pop-up');
const subBtn = document.getElementById('sub-btn');

subBtn.addEventListener("click", () => {
    popUpLayer.style.display = 'flex';
})

closeModal.addEventListener("click", function() {
    popUpLayer.style.display = 'none';
})

let popUpSeconds = 40;

let popUpFun = window.setInterval(function() {
    popUpLayer.style.display = 'flex';
    window.clearInterval(popUpFun);
}, popUpSeconds * 1000)