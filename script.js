// Select the element
var element = document.querySelector('.contact-container');

// Function to check if element is in view
function isInView(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Scroll event listener
window.addEventListener('scroll', function () {
    if (isInView(element)) {
        if (!element.classList.contains('visible')) {
            element.classList.add('visible');
        }
    } else {
        element.classList.remove('visible');
    }
});


document.querySelector('.myButton').addEventListener('click', function () {
    this.classList.add('clicked');
});

document.querySelector('.myButton').addEventListener('click', function () {
    this.classList.add('moving');
});

//For the navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-container');
    const scrollPosition = window.scrollY;

    if (scrollPosition > navbar.offsetHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//for button animation
document.getElementById('funny-button').addEventListener('mouseover', function () {
    this.textContent = 'Surprise!';
});

document.getElementById('funny-button').addEventListener('mouseout', function () {
    this.textContent = "You can't catch me!";
});