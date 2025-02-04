const name = prompt('Ismingiz nima?');
const second = prompt('Familiyangizni kiriting')
const age = prompt('Yoshingiz nechchida?');



document.querySelector('#name').textContent = name;
document.querySelector('#second').textContent = second;
document.querySelector('#age').textContent = age;


const resultElement = document.querySelector('#result');

let admin = prompt(`Ismingiz qanday harflarda yozilsin
    1:Kata
    2:Kichik`);
    if(admin === '1'){
        alert(admin.toUppercase())
    }else if(admin === '2'){
        alert(admin.toLowerCase())
    }else{
    alert('iltimos raqamlardan birini tanlang')
}

    


    