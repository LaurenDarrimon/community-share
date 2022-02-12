// Handler for Logging Out
const logout = async (event) => {
    event.preventDefault();


    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successful, redirect the browser to the location page
        document.location.replace(`/`);
    } else {
        console.error("Failed to log out")
    }

};

document
    .querySelector('#logout')
    .addEventListener('click', logout);

