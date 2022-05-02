async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const trip_id = document.querySelector('#trip-id').value.trim();

  if (username && password && trip_id) {
    const response = await fetch('/api/members', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
        trip_id
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
