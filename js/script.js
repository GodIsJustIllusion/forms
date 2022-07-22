let enterForm = document.forms.enterForm;
let fff = enterForm.email;
let ddd = enterForm.pass;

let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];

function validate() {
    if (fff.value == "" && ddd.value == "") {
        alert ("Укажите ваше имя") } else {
            modal.style.display = "block";
                
            span.onclick = function () {
                modal.style.display = "none";
            }
            
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
}
