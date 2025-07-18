(function () {
  emailjs.init("tttImP5ad_B34F6Ls"); // ✅ Replace with your public key
})();

// Handle form submission
function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm("service_fw04wnp", "template_2amg8do", "#email-form")
    .then(() => {
      alert("✅ Email sent successfully!");
      document.getElementById("email-form").reset();
    })
    .catch((error) => {
      alert("❌ Failed to send email: " + error.text);
    });
}
