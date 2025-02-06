//   Fade in text

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in-text");
  
    elements.forEach((el) => {
      const words = el.innerText.trim().split(" ");
      el.innerHTML = ""; // Clear original text
  
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.style.transitionDelay = `${index * 100}ms`; // Stagger effect
        el.appendChild(span);
  
        // Add a space after each word (except the last one)
        if (index < words.length - 1) {
          el.appendChild(document.createTextNode(" "));
        }
      });
    });
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    elements.forEach((el) => observer.observe(el));
  });
  
//   Fade in containers

  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in-container");
  
    elements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 100}ms`; // Stagger delay per element
    });
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add visibility class to trigger fade-in
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 }
    );
  
    elements.forEach((el) => observer.observe(el)); // Start observing each element
  });
  