// PASSWORD SHOW / HIDE//

function showPassword(inputId, icon) {
  const input = document.getElementById(inputId);

  if (input.type === "password") {
    input.type = "text";

    icon.classList.remove("fa-eye");

    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";

    icon.classList.remove("fa-eye-slash");

    icon.classList.add("fa-eye");
  }
}

// SIGN UP//

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = signupForm.querySelector('input[type="text"]').value.trim();

  const email = signupForm.querySelector('input[type="email"]').value.trim();

  const password = signupForm.querySelector('input[type="password"]').value;

  if (username === "") {
    alert("Please enter your username.");
    return;
  }

  if (email === "") {
    alert("Please enter your email.");
    return;
  }

  if (password.length < 6) {
    alert("Password must contain at least 6 characters.");
    return;
  }

  alert("Account created successfully!");

  signupForm.reset();

  // Open Login
  document.getElementById("chk").checked = true;
});

// LOGIN//

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = loginForm.querySelector('input[type="email"]').value.trim();

  const password = loginForm.querySelector('input[type="password"]').value;

  if (email === "") {
    alert("Please enter your email.");
    return;
  }

  if (password === "") {
    alert("Please enter your password.");
    return;
  }

  alert("Login successful!");
});
