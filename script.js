
const tombol = document.getElementById("tombolUbah");

const deskripsi = document.getElementById("deskripsi");

tombol.addEventListener("click", function() {

    deskripsi.textContent = "Halo! Saya Riswan, sedang belajar menjadi Web Developer.";});




// Mengambil tombol Dark Mode
const tombolTema = document.getElementById("tombolTema");

// Memeriksa tema yang tersimpan
const temaTersimpan = localStorage.getItem("tema");

if (temaTersimpan === "dark") {
    document.body.classList.add("dark-mode");
}

// Mengatur tombol Dark Mode
tombolTema.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    // Menentukan tema yang sedang aktif
    const temaAktif = document.body.classList.contains("dark-mode")
        ? "dark"
        : "light";

    // Menyimpan tema ke Local Storage
    localStorage.setItem("tema", temaAktif);

});


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("namaPengunjung").value;

    const pesan = document.getElementById("pesanPengunjung").value;

    const hasil = document.getElementById("hasilForm");

    if (nama.trim() === "" || pesan.trim() === "") {

        hasil.textContent = "Nama dan pesan wajib diisi!";} 
        else {

        hasil.textContent = "Terima kasih, " + nama + "! Pesan berhasil diterima.";

        contactForm.reset();}
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});
backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
document.getElementById("backToTop")