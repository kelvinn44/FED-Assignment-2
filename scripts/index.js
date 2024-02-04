// Function to toggle sign in state
function toggleSignIn() {
    var signInButton = document.getElementById('signInButton');
    if (signInButton.innerText === 'Sign In') {
        // If button is in "Sign In" state, redirect to sign in page
        window.location.href = "signin_signup.html";
    } else {
        // If button is in "Log Out" state, toggle back to "Sign In"
        signInButton.innerText = 'Sign In';
        localStorage.removeItem('isLoggedIn');

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
    }
};
