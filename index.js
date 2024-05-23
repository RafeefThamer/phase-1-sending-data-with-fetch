function submitData(name, email) {
    const url = 'http://localhost:3000/users'; 
    const data = {
        name: name,
        email: email
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(error => {
                throw new Error(error.message);
            });
        }
        return response.json(); 
    })
    .then(json => {
        console.log(json);

        const newId = json.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${newId}`;
        document.body.appendChild(idElement);

        return json;
    })
    .catch(error => {
        console.error('Error:', error);

        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement); 
    });
}

submitData('John Doe', 'john.doe@example.com');
