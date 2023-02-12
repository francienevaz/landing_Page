const  signUpBtn = document.getElementById('signUp');
const  signInBtn = document.getElementById('signIn');
const  container = document.getElementById('container');

signUpBtn.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInBtn.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
})

const passField = document.querySelector(".password");
const showBtn = document.querySelector('.show-password i');

showBtn.onclick = () => {
    if (passField.type === 'password') {
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

