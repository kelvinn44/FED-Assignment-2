//Test account - Email: John@doe.com ; Password: Password123
// ^Email and Password are case-sensitive.

const signInButton = document.getElementById("signIn");
const signUpButton = document.getElementById("signUp");
const container = document.getElementById("container");

// Sign In form submission
$("#signInForm").submit(function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  $("#ButtonSignIn").click(); // Trigger click event on the Sign In button
});

// Sign Up form submission
$("#signUpForm").submit(function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  $("#Button-SignUp").click(); // Trigger click event on the Sign Up button
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// Handle sign in form submit
$("#ButtonSignIn").click(function (event) {
  event.preventDefault();
  let email = $("#emailSignIn").val();
  let password = $("#passwordSignIn").val();

  // Make API call to sign in user
  $.ajax({
    type: "GET",
    url: "https://fedproject-3bfe.restdb.io/rest/account",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": "65b1b9947d4b3ea75e7e0415",
    },
    success: function (data) {
      let user = data.find(
        (user) => user.Email == email && user.Password == password
      );
      if (user) {
        alert("Sign in successfully!\n Welcome back " + user.Name + "!");

        // Clear input fields
        $("#emailSignIn").val("");
        $("#passwordSignIn").val("");

        // Set flag to indicate user is logged in
        localStorage.setItem('isLoggedIn', 'true');

        //add data to local storage for current user
        localStorage.setItem('Email', email);
        localStorage.setItem('Name', user.Name);
        localStorage.setItem('Password', password);

        // Redirect to preloader.html the index.html
        window.location.href = "preloader.html";
      } else {
        alert("Invalid email or password, please try again.");
        $("#passwordSignIn").val("");
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
});

// Handle sign up form submit
$("#Button-SignUp").click(function (event) {
  event.preventDefault();
  let name = $("#nameSignUp").val();
  let email = $("#emailSignUp").val();
  let password = $("#passwordSignUp").val();

  // Make API call to sign up user
  $.ajax({
    type: "POST",
    url: "https://fedproject-3bfe.restdb.io/rest/account",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": "65b1b9947d4b3ea75e7e0415",
    },
    data: JSON.stringify({
      Name: name,
      Email: email,
      Password: password,
      Score: 0,
    }),
    success: function (response) {
      alert("Sign up successfully!\n Welcome to Bmazon " + name + "!");

      // Clear input fields
      $("#nameSignUp").val("");
      $("#emailSignUp").val("");
      $("#passwordSignUp").val("");
      
      // Set flag to indicate user is logged in
      localStorage.setItem('isLoggedIn', 'true');

      //add data to local storage for current user
      localStorage.setItem('Email', email);
      localStorage.setItem('Name', name);
      localStorage.setItem('Password', password);

      // Redirect to preloader.html then index.html
      window.location.href = "preloader.html";
    },
    error: function (xhr, status, error) {
      // Parse the error response if available
      let errorMessage = "";
      if (xhr.responseJSON && xhr.responseJSON.message) {
        errorMessage = xhr.responseJSON.message;
      } else {
        errorMessage = "An error occurred while signing up. Please try again later.";
      }
      
      // Display error message
      alert("Sign up failed: " + errorMessage + "\nPlease try again.");
      console.log(error + "\t" + status);
      $("#passwordSignUp").val("");
    },
  });
});