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

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const address = document.getElementById("address").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !number || !address || !message) {
      alert("Please fill out all fields."); 
      return; 
    }
  
   
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset(); 
  });
  