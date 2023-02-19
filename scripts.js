const passField = document.querySelectorAll(".password");
const showBtn = document.querySelectorAll(".show-password i");

showBtn[0].onclick = () => {
    if (passField[0].type === "password") {
        passField[0].type = "text";
        showBtn[0].classList.add("hide-btn");
    } else {
        passField[0].type = "password";
        showBtn[0].classList.remove("hide-btn");
    }
}

showBtn[1].onclick = () => {
    if (passField[1].type === "password") {
        passField[1].type = "text";
        showBtn[1].classList.add("hide-btn");
    } else {
        passField[1].type = "password";
        showBtn[1].classList.remove("hide-btn");
    }
}
