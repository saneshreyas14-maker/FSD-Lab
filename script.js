function validateForm() {

    let isValid = true;

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Clear previous errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerHTML = "Enter valid email";
        isValid = false;
    }

    // Phone validation
    let phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Phone number is required";
        isValid = false;
    } else if (!phone.match(phonePattern)) {
        document.getElementById("phoneError").innerHTML = "Enter valid 10-digit phone number";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }

    // Confirm Password validation
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        isValid = false;
    }

    return isValid;
}