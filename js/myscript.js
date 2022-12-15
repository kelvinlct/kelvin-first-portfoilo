let barButton = document.querySelector(".fa-bars");
let topbar = document.querySelector(".topbar");
let barElement = document.querySelectorAll(".topbarelement");

//toggle active class to topbar after barbutton press
barButton.addEventListener("click", function () {
  topbar.classList.toggle("active");
});

//disppear top bar after click on mobile mode
barElement.forEach((element) => {
  element.addEventListener("click", function () {
    topbar.classList.toggle("active");
  });
});

//Scrolling Event Listener
let appearbox = document.querySelectorAll(".block-edu");
let scrollbtn = document.querySelector(".scrollTop");
function appear() {
  appearbox.forEach((element) => {
    if (innerHeight - element.getBoundingClientRect().y > 0) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });

  // scroll button appear
  if (window.scrollY > 800) {
    scrollbtn.classList.add("show");
  } else {
    scrollbtn.classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", appear);

//Check form valid
let email = document.getElementById("email");
let postalcode = document.getElementById("postalcode");
let validEmail = /\S+@\S+\.\S+/;
let validpostalCode = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
let form = document.getElementById("mainform");

form.addEventListener("submit", (event) => {
  if (!validEmail.test(email.value)) {
    alert("Email not valid!");
    event.preventDefault();
  } else if (!validpostalCode.test(postalcode.value)) {
    alert("Postal Code not valid");
    event.preventDefault();
  }
});

//Dynamically reveal another input box to enter the hourly rate
let question = document.getElementById("question");
let comment = document.getElementById("comment");
let hiring = document.getElementById("hiring");
let hourlyrate = document.getElementById("hourlyrate");
hiring.addEventListener("click", function () {
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "hourlyRate");
  input.setAttribute("placeholder", "Hourly Rate");
  var check = document.getElementsByName("hourlyRate")[0];
  //check if the hourlyrate button exist
  if (check) {
    hourlyrate.removeChild(check);
  }
  hourlyrate.appendChild(input);
});
comment.addEventListener("click", function () {
  var input = document.getElementsByName("hourlyRate")[0];
  hourlyrate.removeChild(input);
});
question.addEventListener("click", function () {
  var input = document.getElementsByName("hourlyRate")[0];
  hourlyrate.removeChild(input);
});
