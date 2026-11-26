
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


// Mengambil elemen HTML
const skillInput = document.getElementById("skillInput");
const addSkill = document.getElementById("addSkill");
const skillList = document.getElementById("skillList");


let skills = JSON.parse(localStorage.getItem("skills")) || [];

function displaySkills() {

    skillList.innerHTML = "";

    skills.forEach(function(skill, index) {

        const newSkill = document.createElement("div");
        newSkill.classList.add("skill-item");

        const skillText = document.createElement("span");
        skillText.textContent = skill;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Hapus";

        deleteButton.addEventListener("click", function() {

            skills.splice(index, 1);

            saveSkills();
            displaySkills();

        });

        newSkill.appendChild(skillText);
        newSkill.appendChild(deleteButton);

        skillList.appendChild(newSkill);

    });

}
function saveSkills() {

    localStorage.setItem(
        "skills",
        JSON.stringify(skills)
    );

}

addSkill.addEventListener("click", function() {

    const skillName = skillInput.value.trim();

    if (skillName === "") {
        alert("Masukkan nama skill terlebih dahulu!");
        return;
    }

    // Mencegah skill duplikat
    if (skills.some(skill =>
        skill.toLowerCase() === skillName.toLowerCase()
    )) {
        alert("Skill tersebut sudah ada!");
        return;
    }

    // Memasukkan skill ke array
    skills.push(skillName);

    // Menyimpan data
    saveSkills();

    // Menampilkan ulang daftar skill
    displaySkills();

    // Mengosongkan input
    skillInput.value = "";

});
// Menampilkan skill saat halaman pertama kali dibuka
displaySkills();
