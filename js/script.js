const pass = document.querySelector(".password");
const confPass = document.querySelector(".password-confirm");
const iconPass = document.querySelector(".icon-password-one");
const iconConfPass = document.querySelector(".icon-password-two");
const attention = document.querySelector(".attention");

iconPass.onclick = showPass;
iconConfPass.onclick = showPassConf;

function showPass () {
    if (pass.type == 'password') {
        pass.type = 'text';
        toggleIcon(this, false);
    } else {
        pass.type = 'password';
        toggleIcon(this, true);
    }
}

function showPassConf () {
    if (confPass.type == 'password') {
        confPass.type = 'text';
        toggleIcon(this, false);
    } else {
        confPass.type = 'password';
        toggleIcon(this, true);
   };
}

function toggleIcon(icon, isShow) {
    if (isShow) {
        icon.classList.add('fa-eye');
        icon.classList.remove('fa-eye-slash');
    } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    };
}
   
function checkPass() {
    if (pass.value !== "" && confPass !== "") {
        if (pass.value === confPass.value){
            alert('You are welcome');
        } else {
            attention.insertAdjacentHTML('afterbegin', 'Потрібно ввести однакові значення')
        };
    };
}





const btn = document.querySelector(".btn")
btn.onclick = checkPass;