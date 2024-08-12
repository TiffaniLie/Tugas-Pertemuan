// login.js

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Ambil data pengguna dari localStorage
    const userData = JSON.parse(localStorage.getItem(email));

    // Validasi email dan password
    if (userData && userData.password === password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", email); // Simpan status login
        window.location.href = 'home.html'; // Arahkan ke halaman home setelah login
    } else {
        alert("Invalid email or password! Please try again.");
    }
});
