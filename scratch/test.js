async function test() {
  try {
    const res = await fetch('https://mini-project-2-f166.onrender.com/api/v1/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'testuser123@example.com', password: 'password123' })
    });
    console.log(res.status);
    console.log(res.headers.get('set-cookie'));
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
test();
