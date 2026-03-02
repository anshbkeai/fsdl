const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault(); // Prevent form submission initially
    alert("Submiting From ");

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Full name is required";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }

    // If everything is valid
    if (isValid) {
        alert("Registration Successful!");
        form.submit();
    }

});