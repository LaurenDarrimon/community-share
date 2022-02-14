const submitClaim = async (event) => {
    event.preventDefault();

    const item_id = document.querySelector("#claim-button").getAttribute("data-id");
    console.log('item id', item_id);
    const claimedItem = {
        id: item_id,
        // claimed: true,
        // title: "test title",
        // description: "test title",
        // contact_info: "email@blah.com",
        // location_id: 1,
        // user_id: 1
    };

    console.log("claimedItem");
    console.log(claimedItem);
    console.log('hi');
    if (item_id) {
        const response = await fetch(`/api/items/${item_id}/claim`, {
            method: 'PUT',
            body: JSON.stringify({ claimedItem }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log('response', response);


        document.location.reload();

    }
};

document
    .querySelector('#claim-button')
    .addEventListener('click', submitClaim);