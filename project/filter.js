document.addEventListener("DOMContentLoaded", function() {
    // Retrieve filter criteria from URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    var category = urlParams.get('category');
    var title = urlParams.get('title');

    // Highlight the corresponding button based on the selected category
    if (category) {
        var categoryButton = document.querySelector('[data-filter="' + category + '"]');
        if (categoryButton) {
            categoryButton.classList.add("active");
        }
    }

    
    applyFilter(category, title);
});

// Function to apply filter based on category and title
function applyFilter(category, title) {
    // Implement your filtering logic here
}

// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
     ? 'fa-solid fa-xmark'
     : 'fa-solid fa-list'
}


/*COLOR COLOR COLOR COLOR COLOR COLOR COLOR COLOR */
var coloredDivs = document.querySelectorAll('.top');
var colors = ['#ff00004a', '#00ff003b', '#0000ff57', '#ffff0049', '#ff00ff54', '#fff3c771', '#ffb48e65', '#e5e3836a', '#a4ce9574', '#c5ebaa81', '#ccd3ca78']
; // Add more colors as needed

coloredDivs.forEach(function(div, index) {
    var colorIndex = index % colors.length; // Calculate the color index based on the remainder of dividing by the number of colors
    div.style.backgroundColor = colors[colorIndex];
});



/**Dates dates doates dates dates */

 
var buttons = document.querySelectorAll('.date-btn');

buttons.forEach(function(button) {
    var randomDate = generateRandomDate();
    button.innerText = formatDate(randomDate);
});

function generateRandomDate() {
    var startDate = new Date('2022-01-01');
    var endDate = new Date('2023-12-31');
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
}

function formatDate(date) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-UpS', options);
}



/**type type type type type tpye  */ 
var words = ['Full Time', 'Part Time', 'Project Work', 'Flexibile Schedules', 'Full Day', 'Work from Home']; // Add your custom words here

var buttons = document.querySelectorAll('.tags button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var randomIndex = Math.floor(Math.random() * words.length);
        button.innerText = words[randomIndex];
    });
});



