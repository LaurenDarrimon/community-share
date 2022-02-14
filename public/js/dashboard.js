//PUBLISH button to submit new item calls post route
//need event listener and prevent default

const publishHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#titleInput").value.trim();
  const description = document.querySelector("#itemDescription").value.trim();
  const contact_info = document.querySelector("#contactInfo").value.trim();
  const location_id = document.querySelector("#user-location").getAttribute("data-location");
  const user_id = document.querySelector("#user").getAttribute("data-user");

  if (title && description && location_id) {
    const response = await fetch(`/api/items/location/${location_id}`, {
      method: "POST",
      body: JSON.stringify({ title, description, contact_info, location_id, user_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("new post added");
      document.location.replace(`/dashboard`);
    } else {
      alert("Failed to create project");
    }
  }
};

//when user clicks on publish button, call function
document
  .querySelector(".new-item-form")
  .addEventListener("submit", publishHandler);


// WIDGET CALL
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dejncb9xf',
  uploadPreset: 'y9it5v6r',
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ', result.info);
  }
}
)

document.getElementById("upload_widget").addEventListener("click", function () {
  myWidget.open();
}, false);