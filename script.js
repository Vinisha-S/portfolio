AOS.init({
    duration: 1200,
    once: true
});
(function () {
  emailjs.init("erwiF0n3QkY8y-Wzp"); // STEP 4
})();

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_5ze8g28",   // STEP 2
      "template_d2unmcf",  // STEP 3
      this
    )
    .then(() => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(() => {
      alert("Failed to send message. Try again.");
    });
  });

});
