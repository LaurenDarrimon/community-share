const submitClaim = async (event) => {
    event.preventDefault();

    const item_id = document.querySelector("#claim-button").getAttribute("data-id");

    const claimedItem = {
        id: item_id,
        claimed: true,
        // title: "test title",
        // description: "test title",
        // contact_info: "email@blah.com"
      };

    console.log("claimedItem");
    console.log(claimedItem);

    if(item_id){
        const response = await fetch(`/api/items/${item_id}/claim`, {
            method: 'PUT',
            body: JSON.stringify({ claimedItem }),
            headers: { 'Content-Type': 'application/json'},
        } );
        

        if (response.ok) {
            document.location.replace(`/item/${item_id}`)
        } else {
            alert("failed to claim item");
        }
    }
};

document
    .querySelector('#claim-button')
    .addEventListener('click', submitClaim);