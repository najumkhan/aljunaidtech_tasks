const form = document.getElementById("contactForm");
    const formMsg = document.getElementById("formMsg");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Grab input values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Basic validation
      if (!name || !email || !subject || !message) {
        formMsg.textContent = "Please fill out all fields.";
        formMsg.className = "error";
        return;
      }

      if (!validateEmail(email)) {
        formMsg.textContent = "Please enter a valid email.";
        formMsg.className = "error";
        return;
      }

      // If valid
      formMsg.textContent = "Your message has been sent successfully!";
      formMsg.className = "success";
      form.reset();
    });

    function validateEmail(email) {
      const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      return re.test(email);
    }