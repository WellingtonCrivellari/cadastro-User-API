
export default function pagUser(){

    const titulo = document.querySelector(".titulo")
 
    const userName = window.localStorage.getItem('user')

    if(userName && titulo){
        titulo.innerHTML += ` ${userName}`
    }
    
} 