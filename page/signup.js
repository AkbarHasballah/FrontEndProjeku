// Mendapatkan referensi form signup
const signupForm = document.querySelector('.signup-form');

// Menangani submit form
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Mendapatkan nilai input username dan password
  const newUsername = signupForm.querySelector('#newUsername').value;
  const newPassword = signupForm.querySelector('#newPassword').value;

  // Buat data yang akan dikirim ke API
  const data = {
    username: newUsername,
    password: newPassword
  };

  try {
    // Kirim data ke API signup
    const response = await fetch('https://asia-southeast2-projeku-407007.cloudfunctions.net/function-1Signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // Periksa status response
    if (response.ok) {
      // Jika berhasil, tampilkan notifikasi
      alert('Pendaftaran berhasil!');
      // Arahkan ke halaman signin
      window.location.href = '../index.html';
    } else {
      // Jika gagal, tangani error
      console.error('Pendaftaran gagal.');
    }
  } catch (error) {
    // Tangani error ketika fetch atau proses lainnya
    console.error('Terjadi kesalahan:', error);
  }
});
