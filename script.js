//tamplate efek transisi menampilkan section yang transparan
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("section1").style.opacity = "1";
    },800);
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("section2").style.opacity = "1";
    }, 1060);
});

//ini adalah fungsi show image di tengah layar
function showImage(img) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

//ini adalah fungsi untuk menutup image
function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}
 //ini adalah transisi untuk menampilkan sertifikat
document.addEventListener("DOMContentLoaded", function() {
    let certificates = document.querySelector(".certificates");
    
    if (certificates) {
        setTimeout(function() {
            certificates.classList.add("show");
        }, 2000);
    }
});