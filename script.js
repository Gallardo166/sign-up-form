const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordError = document.querySelector("#confirm-password + span.error");

form.addEventListener("submit", (e) => {
    if (password.value != confirmPassword.value) {
        passwordError.textContent = "Passwords do not match";
        e.preventDefault();
    }
});