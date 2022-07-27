let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];

let enterForm = document.forms.enterForm;
if (enterForm) {
    let fff = enterForm.email;
    let ddd = enterForm.pass;

    enterForm.addEventListener('submit', function (event) {
        event.preventDefault()
    })

    btn.onclick = function() {
        if (fff.checkValidity() && ddd.checkValidity()) {
            modal.style.display = "block";
            document.querySelectorAll('input').forEach(el=>el.value = '');
        }
    }
}

let regForm = document.forms.regForm;
if (regForm) {
    let nameReg = regForm.name;
    let emailReg = regForm.email;
    let passReg = regForm.pass;
    let passrepeatReg = regForm.passrepeat;

    regForm.addEventListener('submit', function (event) {
        event.preventDefault()
    })

    btn.onclick = function() {
        if (nameReg.checkValidity() && emailReg.checkValidity() && passReg.checkValidity() && passrepeatReg.checkValidity() && passReg.value == passrepeatReg.value) {
            modal.style.display = "block";
            document.querySelectorAll('input').forEach(el=>el.value = '');
        }
    }
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}