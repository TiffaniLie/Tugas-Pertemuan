document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a new row in the table
    const tableBody = document.getElementById('messages-table').querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${message}</td>`;
    
    // Append the new row to the table
    tableBody.appendChild(newRow);

    // Clear the form fields
    document.getElementById('contact-form').reset();
});
