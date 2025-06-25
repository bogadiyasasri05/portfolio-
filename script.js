document.addEventListener('DOMContentLoaded', () => {
  // Typing Animation
  const typedText = document.querySelector('.typed-text');
  const cursor = document.querySelector('.cursor');
  const roles = ['Web Developer', 'ML Enthusiast', 'Streamlit Expert'];
  let roleIndex = 0;
  let charIndex = 0;
  const typingDelay = 100;
  const erasingDelay = 60;
  const newTextDelay = 1500;

  function type() {
    if (charIndex < roles[roleIndex].length) {
      typedText.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedText.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, typingDelay);
    }
  }

  setTimeout(type, 1000);

  // Contact Form Submission + Thank You Message
  const form = document.querySelector('.contact-form');
  const thankYouMsg = document.getElementById('thank-you-message');

  if (form && thankYouMsg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default reload
      const formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          if (response.ok) {
            form.reset(); // Clear the form
            thankYouMsg.style.display = 'block'; // Show the thank you message
          } else {
            alert('Oops! Something went wrong.');
          }
        })
        .catch((error) => {
          alert('Network error. Please try again later.');
        });
    });
  }
});
