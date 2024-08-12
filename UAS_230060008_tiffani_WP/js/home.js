// Pengecekan apakah pengguna sudah login
window.onload = function() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("You must log in to access this page.");
        window.location.href = 'login.html'; // Arahkan ke halaman login jika belum login
    }
};

document.querySelector('.login').addEventListener('click', function() {
    localStorage.removeItem("loggedInUser"); // Hapus status login
});
