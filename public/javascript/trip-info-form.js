async function tripInfoFormHandler(event) {
    event.preventDefault();
  
    const location = document.querySelector('#location').value.trim();
    const start_date = document.querySelector('#start-date').value.trim();
    const end_date = document.querySelector('#end-date').value.trim();
  
    if (location && start_date && end_date) {
      const response = await fetch('/api/trips', {
        method: 'post',
        body: JSON.stringify({
          location,
          start_date,
          end_date
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {

        const message = document.querySelector(".trip-info-main")
        const data = await response.json()
        
        message.innerHTML = "<h3>Your trip ID is: " + data.id + ".</h3> <p>Save this ID and use it to create an account. Share this ID with your friends to invite them into your new, private dashboard.</p>"

        document.querySelector('#location').value=""
        document.querySelector('#start-date').value=""
        document.querySelector('#end-date').value=""
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.trip-info-form').addEventListener('submit', tripInfoFormHandler);
  