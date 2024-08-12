// Simpan referensi ke elemen-elemen HTML yang dibutuhkan
const consultationForm = document.getElementById('consultation-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const detailsTextarea = document.getElementById('details');
const clientTableBody = document.getElementById('client-body');

// Event listener untuk pengiriman formulir
consultationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan pengiriman default formulir

    // Ambil nilai dari input
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const detailsValue = detailsTextarea.value.trim();

    // Validasi input
    if (nameValue === '' || emailValue === '' || phoneValue === '' || detailsValue === '') {
        alert('Mohon lengkapi semua kolom formulir.');
        return;
    }

    // Buat elemen baris baru untuk ditambahkan ke dalam tabel
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nameValue}</td>
        <td>${emailValue}</td>
        <td>${phoneValue}</td>
        <td>${detailsValue}</td>
    `;

    // Tambahkan baris baru ke dalam tbody tabel
    clientTableBody.appendChild(newRow);

    // Reset formulir setelah berhasil mengirim
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    detailsTextarea.value = '';

    alert('Client berhasil ditambahkan untuk konsultasi!'); // Alert untuk konfirmasi pengiriman
});
