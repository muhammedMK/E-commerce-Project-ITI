var currentLocation = location.href;
var navLinks = document.querySelectorAll("#nav-left ul li a");
var navLength = navLinks.length;

for (var i = 0; i < navLength; i++) {
  if (navLinks[i].href === currentLocation) {
    navLinks[i].classList.add("active");
  }
}

var allOk = true;

function Name() {
  const userName = document.querySelector("#Username").value;
  console.log(userName);
  if (userName == null || !isNaN(userName)) {
    document.querySelector(".nameError").innerText = "Name is required";
    allOk = false;
  } else {
    document.querySelector(".nameError").innerText = "";
  }
}
function Password() {
  const password = document.querySelector("#password").value;
  console.log(password);
  if (password.length < 8) {
    document.querySelector(".passerror").innerText =
      "Password must be 8 chars at least";
    allOk = false;
  } else {
    document.querySelector(".passerror").innerText = "";
  }
}
function Email() {
  const email = document.querySelector("#email").value;
  console.log(email);
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    document.querySelector(".emailerror").innerText = "Email is not valid";
    allOk = false;
  } else {
    document.querySelector(".emailerror").innerText = "";
  }
}
const whatsUp = "https://api.whatsapp.com/send?phone=2001060830983";

function Login() {
  allOk = true;
  Name();
  Password();
  Email();
  if (allOk) {
    setTimeout(() => {
      window.open(whatsUp, "_blank").focus();
    }, 1000);
  }
}
