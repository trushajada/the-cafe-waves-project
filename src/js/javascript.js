document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");
    const banner = document.getElementById("home");

    const bannerHeight = banner.offsetHeight;

    window.addEventListener("scroll", () => {
        if (window.scrollY > bannerHeight) {
            header.classList.remove("fixed");
            header.classList.add("relative-header");
        } else {
            header.classList.remove("relative-header");
            header.classList.add("fixed");
        }
    });
});





// About page javascript

document.querySelectorAll('.text-gray-400').forEach(paragraph => {
    paragraph.addEventListener('mouseover', () => {
        paragraph.classList.add('text-white');
    });
    paragraph.addEventListener('mouseout', () => {
        paragraph.classList.remove('text-white');
    });
});

 
// contact page 
  
$(document).ready(function () {
    $('#contactForm').submit(function (event) {
      event.preventDefault(); 
      const name = $('#name').val();
      const email = $('#email').val();
      const number = $('#number').val();
      const address = $('#address').val();
      const message = $('#message').val();

      if (name === "" || email === "" || number === "" || address === "" || message === "") {
        alert("Please fill in all fields.");
        return;
      }
      alert("Form submitted successfully!");

      $('#contactForm')[0].reset();

      $('#submitBtn').text('Submitted').prop('disabled', true);
    });
})