const loginForm = document.getElementById("loginForm");
const popup = document.getElementById("login-popup");
const errorMsg = document.getElementById("errorMsg");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
    errorMsg.textContent = "Username dan password wajib diisi.";
    errorMsg.style.color = "red";
    return;
    } else if (password.length < 6) {
    errorMsg.textContent = "Password minimal 6 karakter.";
    errorMsg.style.color = "red";
    return;
    }

    errorMsg.textContent = ""; 

    
    popup.style.display = "block";
    setTimeout(() => {
    popup.style.opacity = 1;
    }, 10);

    setTimeout(() => {
    popup.style.opacity = 0;
    popup.style.display = "none";
    window.location.href = "userPage.html"; 
    }, 2000);
});

function handleSignup(event) {
    event.preventDefault();

    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (username === "" || password === "") {
        alert("Username dan Password tidak boleh kosong!");
        return;
    }

    if (password.length < 6) {
        alert("Password minimal 6 karakter!");
        return;
    }

    const popup = document.getElementById("signup-popup");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
        window.location.href = "login.html"; 
    }, 2000);
}