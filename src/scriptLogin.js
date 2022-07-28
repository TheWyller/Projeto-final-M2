import {User} from "./controllers/User.js"

const button = document.querySelector('button');

function getInfoUser() {
    let inputLogin = document.getElementById('box__label--label');
    let objLogin = {}
    
        const email = document.getElementById('login--email').value
        const password = document.getElementById('login--password').value
        
        objLogin = {
            email: email,
            password: password
        }
        
        return objLogin

}
 
button.addEventListener('click', async () => {
    
    const infos = getInfoUser()
    let infoUser = await User.userLogin(infos)

    if(typeof infoUser !== 'string') {
        const popup = document.querySelector('.box__popup')
        const popupClose = document.querySelector('.box__close')
        popup.style.display = 'block'
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none'
        })
    } else {
        window.location.href = '../../index.html'
    }
    
})