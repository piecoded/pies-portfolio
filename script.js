document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});

(function() {
    emailjs.init("rxGnayRMP1UCv4HWU"); 
  })();
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      emailjs.sendForm("service_k9gtmdm", "template_q6fc4jd", form)
        .then(() => {
          alert("Message sent successfully!");
          form.reset();
        }, (error) => {
          alert("Failed to send message: " + error.text);
        });
    });
  });
  