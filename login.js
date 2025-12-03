// LOGIN & SIGNUP FUNCTIONALITY
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
  
    // 🔐 LOGIN FORM HANDLER
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("login-username").value.trim();
        const password = document.getElementById("login-password").value.trim();
        const error = document.getElementById("login-error");
  
        // ✅ Get saved user from localStorage
        const savedUser = JSON.parse(localStorage.getItem("veggieUser"));
  
        if (savedUser && username === savedUser.username && password === savedUser.password) {
          window.location.href = "index.html";
        } else {
          error.textContent = "Invalid username or password.";
          error.style.color = "#ff6b6b";
        }
      });
    }
  
    // 📝 SIGNUP FORM HANDLER
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("signup-username").value.trim();
        const password = document.getElementById("signup-password").value.trim();
        const message = document.getElementById("signup-message");
  
        if (username && password) {
          // ✅ Save credentials to localStorage
          const user = {
            username: username,
            password: password
          };
  
          localStorage.setItem("veggieUser", JSON.stringify(user));
  
          message.style.color = "#00ff99";
          message.textContent = "Signup successful! Redirecting to login...";
          setTimeout(() => {
            window.location.href = "login.html";
          }, 2000);
        } else {
          message.style.color = "#ff6b6b";
          message.textContent = "Please fill in both username and password.";
        }
      });
    }
  });
  