async function addPostFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="itinerary-title"]').value;
  const url = document.querySelector('input[name="itinerary-link"]').value;
  const post_content = document.querySelector('textarea[name="itinerary-notes"]').value;

  if (post_content && title) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        url,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.add-post').addEventListener('submit', addPostFormHandler);
