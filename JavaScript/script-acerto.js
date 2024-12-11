document.addEventListener("DOMContentLoaded", () => {
    const messageSpan = document.querySelector(".finish span");
  
    const message = localStorage.getItem("quizMessage");
  
    if (message && messageSpan) {
      messageSpan.textContent = message;
    }
  });