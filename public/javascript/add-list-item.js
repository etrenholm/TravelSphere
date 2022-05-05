async function toDoFormHandler(event) {
    event.preventDefault();
  
    const item_text = document.querySelector('input[name="to-do-item"]').value;
  
    const response = await fetch(`/api/listitems`, {
      method: 'POST',
      body: JSON.stringify({
        item_text
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
  
  document.querySelector('.to-do').addEventListener('submit', toDoFormHandler);
  