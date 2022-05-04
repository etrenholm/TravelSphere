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
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.trip-info-form').addEventListener('submit', tripInfoFormHandler);
  