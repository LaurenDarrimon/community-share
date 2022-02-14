// Handler for Log In submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the location page
      // document.location.replace(`/location/${user.location_id}`);
      document.location.replace(`/`);
    } else {
      console.error("Incorrect email or password")
    }
  }
};



//   Handler for Sign Up submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  let selection;

  let choice = document.getElementsByName('location');
  console.log('choice: ',choice);
  for ( let i = 0; i < choice.length; i++) {
    if ( choice[i].checked) {
      selection = choice[i].value;
      break;
    }
  }

  console.log(selection);

  console.log(username, password, email, selection);

  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, selection}),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('response: ',response);
    if (response.ok) {
      document.location.replace(`/location/${selection}`);
    } else {
      console.error("Failed to create new account. Please try again")
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);