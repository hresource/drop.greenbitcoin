// Call the /api/users endpoint using GET
fetch('/api/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`GET failed: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('GET Response:', data);
  })
  .catch(err => console.error(err));

// Call the /api/users endpoint using POST
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'New User' })
})
  .then(response => {
    if (response.status === 405) {
      console.warn('POST not allowed (405)');
      return;
    }
    return response.json();
  })
  .then(data => {
    if (data) console.log('POST Response:', data);
  })
  .catch(err => console.error(err));
