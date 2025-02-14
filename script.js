// JavaScript for Login and Signup Pages
document.addEventListener('DOMContentLoaded', () => {
    // Functionality for Login Page
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const username = document.querySelector('#loginUsername').value;
            const password = document.querySelector('#loginPassword').value;

            // Basic validation
            if (username === '' || password === '') {
                alert('Please fill out all fields.');
                return;
            }

            // Simulate login processing
            console.log(`Login attempt: Username=${username}, Password=${password}`);
            alert('Login successful!'); // Replace with actual login logic
        });
    }

    // Functionality for Signup Page
    const signupForm = document.querySelector('#signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            const email = document.querySelector('#signupEmail').value;
            const username = document.querySelector('#signupUsername').value;
            const password = document.querySelector('#signupPassword').value;
            const confirmPassword = document.querySelector('#signupConfirmPassword').value;

            // Basic validation
            if (email === '' || username === '' || password === '' || confirmPassword === '') {
                alert('Please fill out all fields.');
                return;
            }
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // Simulate signup processing
            console.log(`Signup attempt: Email=${email}, Username=${username}`);
            alert('Signup successful!'); // Replace with actual signup logic
        });
    }
});
