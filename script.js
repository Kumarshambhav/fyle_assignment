gsap.from("#one",{
    x:250,
    duration: 1,
    delay:1
})
gsap.from("#two",{
    x:250,
    duration:2,
    delay:2
})
gsap.from("#three",{
    x:-250,
    duration:2,
    delay:2
})

function togglePopup() {
    var popup = document.getElementById("contactPopup");
    var overlay = document.getElementById("overlay");
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "block";
        overlay.style.display = "block";
    } else {
        popup.style.display = "none";
        overlay.style.display = "none";
    }
}



let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.querySelectorAll('.slide').forEach((slide, index) => {
    slide.addEventListener('mouseover', () => {
        slide.querySelector('img').src = 'design.jpg'; // Change to your design image URL
    });
    slide.addEventListener('mouseout', () => {
        slide.querySelector('img').src = `image${index + 1}.jpg`; // Change back to the original image
    });
});

function changeImage(imagePath) {
    document.getElementById('main-image').src = imagePath;
}

