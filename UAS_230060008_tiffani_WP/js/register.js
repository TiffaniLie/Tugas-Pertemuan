// register.js

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validasi apakah password dan konfirmasi password cocok
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Cek apakah email sudah terdaftar
    if (localStorage.getItem(email)) {
        alert("Email is already registered! Please use a different email.");
        return;
    }

    // Simpan data ke localStorage
    const userData = {
        fullName: fullName,
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(userData)); // Simpan data dengan email sebagai kunci
    alert("Registration successful! You can now log in.");
    window.location.href = 'login.html'; // Arahkan ke halaman login setelah registrasi
});
