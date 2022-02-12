// Handler for Logging Out
const logoutFormHandler = async (event) => {
    event.preventDefault();


    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/logout', {
        method: 'POST',

    });

    if (response.ok) {
        // If successful, redirect the browser to the location page
        document.location.replace(`/location/${user.location_id}`);
    } else {
        console.error("Incorrect email or password")
    }

};

document
    .querySelector('#logout')
    .addEventListener('click', logoutFormHandler);

