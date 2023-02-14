const passField = document.querySelector(".password");
const showBtn = document.querySelector(".show-password i");

showBtn.onclick = () => {
    if (passField.type === "password") {
        passField.type = "text";
        showBtn.classList.add("hide-btn");
    } else {
        passField.type = "password";
        showBtn.classList.remove("hide-btn");
    }
}

// showBtn.addEventListener('click', () => {
//     if (passField.type === 'password') {
//         passField.type = "text";
//         showBtn.classList.add("hide-btn");
//     } else {
//         passField.type = "password";
//         showBtn.classList.remove("hide-btn");
//     }
// })