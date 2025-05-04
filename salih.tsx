fetch('http://localhost:3000')
    .then(res => res.text())
    .then(data => console.log(data))
    .then(() => fetch('http://localhost:3000/api/data'))
    .then(response => response.json())
    .then(data => console.log(data));
