document.getElementById('login-submit').addEventListener('click', function () {
  // get user email
  const emailField = document.getElementById('email');
  const userEmail = emailField.value;
  // get user password
  const passwordField = document.getElementById('password');
  const userPassword = passwordField.value;
  // check email and password
  if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
    window.location.href = 'banking.html';
  }
});
document.getElementById("togglePassword").addEventListener("click", function () {
  const passType = document.getElementById('password').type;
  if (passType == `password`) {
    document.getElementById('password').type = "text";
  } else {
    document.getElementById('password').type = "password";
  }
})