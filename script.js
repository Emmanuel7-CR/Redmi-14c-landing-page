//Sidebar toggle functionality
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
};

//Navbar fixation functionality
// Get the navbar element
const navbar = document.querySelector('.navbar');

// Get the initial offset top of the navbar
const navbarOffsetTop = navbar.offsetTop;

window.addEventListener('scroll', function() {
    // Check if the page has been scrolled past the navbar's initial position
    if (window.scrollY >= navbarOffsetTop) {
        // Add the 'fixed' class to the navbar
        navbar.classList.add('fixed');
    } else {
        // Remove the 'fixed' class from the navbar
        navbar.classList.remove('fixed');
    }
});



//Key Features change functionality
const camera = document.querySelector('.camera-feature-content');
const performance = document.querySelector('.performance-feature-content');
const display = document.querySelector('.display-feature-content');
const briefContent = document.querySelector('.brief-content-feature');

function toCamera() {
    performance.style.display = 'none';
     display.style.display = 'none';
    camera.style.display = 'block'
    briefContent.style.display.font = '60px'
}
function toPerformance() {
    display.style.display = 'none';
    camera.style.display = 'none';
    performance.style.display = 'block';
}
function toDisplay() {
     performance.style.display = 'none';
      camera.style.display = 'none';
       display.style.display = 'block';
}



//Benefit Change Functionality
const convenience = document.querySelector('.convenience-benefit-content');
const creativity = document.querySelector('.creativity-benefit-content');
const entertainment = document.querySelector('.entertainment-benefit-content');

function toConvenience() {
    creativity.style.display = 'none';
    entertainment.style.display = 'none';
    convenience.style.display = 'block';
}
function toCreativity() {
    entertainment.style.display = 'none';
    convenience.style.display = 'none';
     creativity.style.display = 'block';
}
function toEntertainment() {
    creativity.style.display = 'none';
    convenience.style.display = 'none';
     entertainment.style.display = 'block';
}
