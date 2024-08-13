/* Section 1 */

/*scrolling to sections*/

function scrollToSection(className, link) {
  // Remove 'active' class from all links
  var navLinks = document.querySelectorAll('.item');
  navLinks.forEach(function(navLink) {
    navLink.classList.remove('active');
  });
  
  // Add 'active' class to clicked link
  link.classList.add('active');
  
  // Scroll to section
  var section = document.querySelector(className);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Indicator and responsive behavior
document.addEventListener("DOMContentLoaded", function() {
    var McButton = document.querySelector("[data-hamburger-menu]");
    var nav = document.querySelector(".nav");
    var links = document.querySelectorAll(".nav ul li a");
    var indicator = document.querySelector(".nav .indicator");

    // Function to update indicator position
    function updateIndicator(link) {
        const rect = link.getBoundingClientRect();
        indicator.style.width = `${rect.width}px`;
        indicator.style.left = `${link.offsetLeft}px`;
    }

    // Set initial indicator position
    const activeLink = document.querySelector(".nav ul li a.active");
    if (activeLink) {
        updateIndicator(activeLink);
    }

    McButton.addEventListener("click", function() {
        McButton.classList.toggle("active");
        nav.classList.toggle("active");
    });

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            links.forEach(link => link.classList.remove("active"));
            this.classList.add("active");

            // Update indicator for desktop view
            if (window.innerWidth > 670) {
                updateIndicator(this);
            }
        });
    });
});



function closeNotice() {
  var popup = document.getElementById('Noticepopup');
  popup.style.display = 'none';
  localStorage.setItem('popupShown', 'true');
}

document.addEventListener('DOMContentLoaded', function() {
  // Check if popup has been shown before
  var popupShown = localStorage.getItem('popupShown');
  if (!popupShown) {
    // Show the popup after 3 seconds
    setTimeout(function() {
      var popup = document.getElementById('Noticepopup');
      popup.style.display = 'block';
    }, 3000);
  }
});





    
/*Login*/
let signUpBtn = document.querySelector(".signup-btn");
let signInBtn = document.querySelector(".signin-btn");
let wrapper = document.querySelector(".wrapper");

signUpBtn.addEventListener("click", () => {
  wrapper.classList.add("active");
});

signInBtn.addEventListener("click", () => {
  wrapper.classList.remove("active");
});









/*blur*/
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.bn31'); // Selecting the "LOGIN" link
    const closeLeft = document.querySelector('.closeleft');
    const closeRight = document.querySelector('.closeright');
    const blurBackground = document.querySelector('#blur');

    loginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        wrapper.style.display = 'block';
        blurBackground.classList.add('active');
    });

    closeLeft.addEventListener('click', function() {
        wrapper.style.display = 'none';
        blurBackground.classList.remove('active');
    });

    closeRight.addEventListener('click', function() {
        wrapper.style.display = 'none';
        blurBackground.classList.remove('active');
    });
});




/*section 2*/

/* Radio button validation */
function validate() {
  var valid = false;
  var x = document.getElementById("fitForm").elements["option"];
  
  for (var i = 0; i < x.length; i++) {
    if (x[i].checked) {
      valid = true;
      break;
    }
  }
  
  if (valid) {
    var chosenOption = "";
    for (var i = 0; i < x.length; i++) {
      if (x[i].checked) {
        chosenOption = x[i].value;
        break;
      }
    }
    var vehicleType = "";
    switch (chosenOption) {
      case "option1":
        vehicleType = "bike";
        break;
      case "option2":
      case "option3":
        vehicleType = "car";
        break;
      default:
        vehicleType = "vehicle";
    }
    alert("Chosen " + vehicleType + ". Enjoy your ride!");
  } else {
    alert("Choose your fit Ride.");
    return false;
  }
}




/*section 4*/


/*popup*/

let popup = document.getElementById("Thankspop");
let form = document.getElementById("feedback-form");
let myText = document.getElementById("my-text");

// Function to open the popup
function openPopup() {
  popup.classList.add("open-popup");
  form.reset(); // Reset the form fields

  // Optionally reset the character count display
  document.getElementById("count-result").innerText = "Total characters: 0/155";

  // Uncheck all radio buttons
  let stars = document.querySelectorAll('input[name="rate"]');
  stars.forEach(star => star.checked = false);
}

// Function to close the popup
function closePopup() {
  popup.classList.remove("open-popup");
}

// Add event listener to the feedback text area to update character count
myText.addEventListener("input", () => {
  let count = myText.value.trim().length;
  document.getElementById("count-result").textContent = `Total characters: ${count}/155`;
});

// Validate the review form before submission
function validateReview() {
  let starsChecked = document.querySelector('input[name="rate"]:checked');
  let textLength = myText.value.trim().length;

  if (!starsChecked) {
    alert("Please select a star rating.");
    return false;
  }

  if (textLength === 0) {
    alert("Please write something in the feedback text.");
    return false;
  }

  // If both conditions are met, show the popup
  openPopup();
  return false; // Prevent actual form submission
}





/*review section */

const carousel = document.querySelector('.carousel');

function autoplay() {
  const carouselWidth = carousel.offsetWidth;
  const distanceToScroll = carouselWidth * 2; 
  const transitionDuration = distanceToScroll / 1000; 


  carousel.style.transition = `left ${transitionDuration}s linear`;
  carousel.style.left = `-${distanceToScroll}px`;


  setTimeout(() => {
    const firstItem = carousel.firstElementChild;
    carousel.appendChild(firstItem);
    carousel.style.transition = 'none';
    carousel.style.left = '0';
  }, transitionDuration * 1000);
  
  setTimeout(autoplay, 4500); 
}

autoplay();













/*section 5*/
const inputs = document.querySelectorAll(".About-input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});




/*year*/
document.getElementById("currentYear").textContent = new Date().getFullYear();




/* refresh */
document.addEventListener('DOMContentLoaded', (event) => {
            // Check if the 'refreshed' flag is set in sessionStorage
            if (!sessionStorage.getItem('refreshed')) {
                // Set a timeout to refresh the page after 2 seconds
                setTimeout(() => {
                    // Refresh the page
                    window.location.reload();
                    // Set the 'refreshed' flag in sessionStorage
                    sessionStorage.setItem('refreshed', 'true');
                }, 2000);
            }
        });