import { User } from "./controllers/User.js";
import { Dom } from "./models/Dom.js";

async function register(e){

    const name = document.querySelector('.cadastro__name').value
    const email = document.querySelector('.cadastro__email').value
    const password = document.querySelector('.cadastro__password').value
    
    e.preventDefault()

    let data = {
        name:name,
        email:email,
        password:password
    }

    const dataFinal = await User.userRegister(data)

    if(typeof dataFinal === 'string' || dataFinal.status === "Error"){

        modalErrorRegisterPage()
        
    }else{

        window.location.href = "./login.html"
    }
}
const button = document.getElementById('cadastro__submit')
button.addEventListener('click',register)


function modalErrorRegisterPage(){

    Dom.modalRegisterError()

    const exitModal = document.querySelector(".error__button button")
    exitModal.addEventListener("click",() => {

        window.location.href = "./cadastro.html"
    })
}

