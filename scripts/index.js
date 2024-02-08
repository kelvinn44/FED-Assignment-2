// Function to toggle sign in state
const Name = document.querySelector(".Name");
function toggleSignIn() {
    var signInButton = document.getElementById('signInButton');
    if (signInButton.innerText === 'Sign In') {
        // If button is in "Sign In" state, redirect to sign in page
        window.location.href = "signin_signup.html";
    } else {
        // If button is in "Log Out" state, toggle back to "Sign In"
        signInButton.innerText = 'Sign In';

        // Change button color back to blue
        signInButton.classList.remove('btn-danger');
        signInButton.classList.add('btn-primary');

        localStorage.removeItem('isLoggedIn');
        Name.innerText = "";
        // Display alert when logging out
        alert("You have been logged out successfully!");
    }
}

// Check if user is already logged in on page load
window.onload = function() {
    var signInButton = document.getElementById('signInButton');
    if (localStorage.getItem('isLoggedIn') === 'true') {
        // If user is logged in, change button text to "Log Out"
        signInButton.innerText = 'Log Out';
        let name = localStorage.getItem('Name')
        Name.innerText = `${name}`;
        // Change button color to red
        signInButton.classList.remove('btn-primary');
        signInButton.classList.add('btn-danger');
    }
};