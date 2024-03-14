
/* NAVIGATION */

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
 

/* SEARCH */


document.addEventListener("DOMContentLoaded", function() {
    var categorySelect = document.getElementById("categorySelect");
    categorySelect.value = "";
    updateSearchJobTitles();
});
function updateSearchJobTitles() {
    var categorySelect = document.getElementById("categorySelect");
    var titleSelect = document.getElementById("titleSelect");
    var category = categorySelect.value;
    titleSelect.innerHTML = "";

    if (category === "Software") {
        addOption(titleSelect, "Software Engineer");
        addOption(titleSelect, "Web Developer");
        addOption(titleSelect, "Mobile App Developer");
        addOption(titleSelect, "Database Administrator");
        addOption(titleSelect, "Systems Analyst");
    } else if (category === "Design") {
        addOption(titleSelect, "Graphic Designer");
        addOption(titleSelect, "UI/UX Designer");
        addOption(titleSelect, "Multimedia Artist");
        addOption(titleSelect, "Art Director");
        addOption(titleSelect, "Motion Designer");W
    } else if (category === "Marketing") {
        addOption(titleSelect, "Digital Marketing Specialist");
        addOption(titleSelect, "Marketing Manager");
        addOption(titleSelect, "Social Media Coordinator");
        addOption(titleSelect, "SEO Specialist");
        addOption(titleSelect, "Content Strategist");
    } else if (category === "Finance") {
        addOption(titleSelect, "Financial Analyst");
        addOption(titleSelect, "Investment Banker");
        addOption(titleSelect, "Accountant");
        addOption(titleSelect, "Financial Manager");
        addOption(titleSelect, "Auditor");
    } else if (category === "Healthcare") {
        addOption(titleSelect, "Registered Nurse");
        addOption(titleSelect, "Physician");
        addOption(titleSelect, "Medical Assistant");
        addOption(titleSelect, "Physical Therapist");
        addOption(titleSelect, "Healthcare Administrator");
    } else if (category === "Education") {
        addOption(titleSelect, "Teacher");
        addOption(titleSelect, "School Counselor");
        addOption(titleSelect, "Principal");
        addOption(titleSelect, "Education Administrator");
        addOption(titleSelect, "Curriculum Developer");
    } else if (category === "Engineering") {
        addOption(titleSelect, "Civil Engineer");
        addOption(titleSelect, "Mechanical Engineer");
        addOption(titleSelect, "Electrical Engineer");
        addOption(titleSelect, "Aerospace Engineer");
        addOption(titleSelect, "Chemical Engineer");
    } else if (category === "Customer_service") {
        addOption(titleSelect, "Customer Service Representative");
        addOption(titleSelect, "Call Center Supervisor");
        addOption(titleSelect, "Customer Success Manager");
        addOption(titleSelect, "Technical Support Specialist");
        addOption(titleSelect, "Client Relations Coordinator");
    } else if (category === "Human") {
        addOption(titleSelect, "HR Manager");
        addOption(titleSelect, "Recruitment Specialist");
        addOption(titleSelect, "Compensation and Benefits Analyst");
        addOption(titleSelect, "Training and Development Coordinator");
        addOption(titleSelect, "HR Generalist");
    } else if (category === "Sales") {
        addOption(titleSelect, "Sales Representative");
        addOption(titleSelect, "Sales Manager");
        addOption(titleSelect, "Account Executive");
        addOption(titleSelect, "Business Development Associate");
        addOption(titleSelect, "Sales Engineer");
    } else if (category === "Legal") {
        addOption(titleSelect, "Lawyer");
        addOption(titleSelect, "Legal Assistant");
        addOption(titleSelect, "Paralegal");
        addOption(titleSelect, "Legal Counsel");
        addOption(titleSelect, "Compliance Officer");
    } else if (category === "Operations") {
        addOption(titleSelect, "Operations Manager");
        addOption(titleSelect, "Supply Chain Analyst");
        addOption(titleSelect, "Logistics Coordinator");
        addOption(titleSelect, "Production Supervisor");
        addOption(titleSelect, "Inventory Control Specialist");
    } else if (category === "Research") {
        addOption(titleSelect, "Research Scientist");
        addOption(titleSelect, "R&D Engineer");
        addOption(titleSelect, "Data Analyst");
        addOption(titleSelect, "Lab Technician");
        addOption(titleSelect, "Product Development Manager");
    } else if (category === "Media") {
        addOption(titleSelect, "Journalist");
        addOption(titleSelect, "Public Relations Specialist");
        addOption(titleSelect, "Content Writer");
        addOption(titleSelect, "Media Planner");
        addOption(titleSelect, "Communications Manager");
    } else if (category === "Retail") {
        addOption(titleSelect, "Store Manager");
        addOption(titleSelect, "Sales Associate");
        addOption(titleSelect, "Merchandiser");
        addOption(titleSelect, "Retail Buyer");
        addOption(titleSelect, "Store Supervisor");
    } 
    else if(category === "Art"){
        addOption(titleSelect,"asd");
        addOption(titleSelect,"posta");
        addOption(titleSelect,"nuvielete");
        addOption(titleSelect,"zhongli");
        addOption(titleSelect,"kazha");

    }
    
    if (!category) {
        addOption(titleSelect, "Select a category first");
    }
}

function searchJobs() {
    var category = document.getElementById("categorySelect").value;
    var title = document.getElementById("titleSelect").value;

    // Check if both category and title are selected
    if (category && title) {
        // Redirect to the search results page with selected category and title
        window.location.href = "filter.html?category=" + encodeURIComponent(category) + "&title=" + encodeURIComponent(title);
    } else {
        // Alert the user to select both category and title before searching
        alert("Please select both a category and a job title before searching.");
    }
}



function addOption(select, text) {
    var option = document.createElement("option");
    option.text = text;
    select.add(option);
}

/* ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT  */
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    if (
      urlParams.has("jobPosted") &&
      urlParams.get("jobPosted") === "true"
    ) {
      const popup = document.createElement("div");
      popup.classList.add("alert");
      popup.innerHTML =
        "<p>Job Posted!</p><img src='pic/check.png' alt='icon'>";
      document.body.appendChild(popup);

      setTimeout(function () {
        document.body.removeChild(popup);
      }, 1000);
    }
  };

  /*UPLOAD UPLOAD UPLOAD UPLOAD UPLOAD UPLOAD UPLOAD UPLOADUPLOAD  */


  document.querySelector(".cv-button").addEventListener("click", function() {
        document.getElementById("file").click();
    });


  /*FILTER FILTER FILTER FILTER FILTER FILTER FILTER */

  function updateFilterJobTitles() {
    // Get the selected category
    var selectedCategory = document.getElementById("categorySelect").value;

    // Fetch job titles based on the selected category (you might use AJAX to fetch data)
    // For now, let's assume you have an array of job titles
    var jobTitles = getJobTitles(selectedCategory);

    // Clear previous options
    var titleSelect = document.getElementById("titleSelect");
    titleSelect.innerHTML = '<option value="">Select a job title</option>';

    // Populate job titles dropdown
    jobTitles.forEach(function(title) {
        var option = document.createElement("option");
        option.text = title;
        option.value = title;
        titleSelect.appendChild(option);
    });
}

function searchFilterJobs() {
    var selectedCategory = document.getElementById("categorySelect").value;
    var selectedTitle = document.getElementById("titleSelect").value;
    // Pass selectedCategory and selectedTitle to the second page
    window.location.href = "filter.html?category=" + encodeURIComponent(selectedCategory) + "&title=" + encodeURIComponent(selectedTitle);
}

// Function to fetch job titles based on selected category (replace with actual data retrieval logic)
function getJobTitles(category) {
    if (category === "Software") {
        return ["Software Engineer", "Software Developer", "Frontend Developer"];
    } else if (category === "Design") {
        return ["Graphic Designer", "UI/UX Designer"];
    } else if (category === "Marketing") {
        return ["Marketing Manager", "Digital Marketer"];
    } else if (category === "Finance") {
        return ["Financial Analyst", "Accountant"];
    } else if (category === "Healthcare") {
        return ["Registered Nurse", "Medical Assistant"];
    } else if (category === "Engineering") {
        return ["Mechanical Engineer", "Electrical Engineer"];
    } else if (category === "Customer") {
        return ["Customer Support Representative", "Customer Success Manager"];
    } else if (category === "Human") {
        return ["HR Manager", "Recruiter"];
    } else if (category === "Sales") {
        return ["Sales Representative", "Sales Manager"];
    } else if (category === "Legal") {
        return ["Lawyer", "Legal Assistant"];
    } else if (category === "Operations") {
        return ["Operations Manager", "Operations Analyst"];
    } else if (category === "Research") {
        return ["Research Scientist", "Research Assistant"];
    } else if (category === "Media") {
        return ["Journalist", "Social Media Manager"];
    } else if (category === "Retail") {
        return ["Retail Sales Associate", "Store Manager"];
    } else {
        return [];
    }
}