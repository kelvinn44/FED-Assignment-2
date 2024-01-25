//TODO: fix

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Handle sign up form submit
// $("#Button-SignUp").click(function (event) {
//   event.preventDefault();
//   let name = $("#nameSignUp").val();
//   let email = $("#emailSignUp").val();
//   let password = $("#passwordSignUp").val();

//   // Make API call to sign up user
//   $.ajax({
//     type: "POST",
//     url: "https://fedproject-3bfe.restdb.io/rest/account",
//     headers: {
//       "Content-Type": "application/json",
//       "x-apikey": "65b1b9947d4b3ea75e7e0415",
//     },
//     data: JSON.stringify({
//       Name: name,
//       Email: email,
//       Password: password,
//     }),
//     success: function (response) {
//       alert("Sign up successfully!");
//     },
//     error: function (error) {
//       console.log(error);
//     },
//   });
// });

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
        alert("Welcome back! " + user.name);

        // TODO: redirect to login home page
        // window.location.href = "index1.html";
      } else {
        alert("Invalid email or password");
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
});
