// Script oleh Andi
document.addEventListener("DOMContentLoaded", function () {

  // Sapa pengunjung ketika halaman dibuka
  console.log("✅ Halaman berhasil dimuat!");

  // Klik header untuk melihat pesan
  const header = document.querySelector("header h1");
  if (header) {
    header.style.cursor = "pointer";
    header.addEventListener("click", function () {
      alert("👋 Halo! Selamat datang di halaman tim kami!");
    });
  }

  // Tampilkan tahun saat ini di footer secara otomatis
  const footer = document.querySelector("footer p");
  if (footer) {
    const tahun = new Date().getFullYear();
    footer.innerHTML = `&copy; ${tahun} Tim Kolaborasi — Semua Hak Dilindungi`;
  }

});
