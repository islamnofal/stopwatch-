function validateSignIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var signInButton = document.getElementById("signInButton");

  if (email && password) {
    signInButton.removeAttribute("disabled");
    redirectToIndex();
  } else {
    signInButton.setAttribute("disabled", "disabled");
  }
}

function redirectToIndex() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email && password) {
    window.location.href = "index.html";
  } else {
    alert("Please fill in both email and password.");
  }
}
