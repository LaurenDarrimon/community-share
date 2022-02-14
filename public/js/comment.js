const itemCommentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#item-comment-input').value;
    const item_id = document.querySelector('#item-comment-form').getAttribute('data-id');
    
    if (content && item_id) {
        const response = await fetch(`/api/comments/items/comment/${item_id}`, {
            method: 'POST',
            body: JSON.stringify({ content, item_id }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace(`/item/${item_id}`)
        } else {
            alert("failed to post comment");
        }
    };
}

document
    .querySelector('#item-comment-form')
    .addEventListener('submit', itemCommentHandler);

