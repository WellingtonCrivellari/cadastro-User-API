export default function initCadastro() {
    
const formulario = document.querySelector('#formCadastro')
const events = ['change', 'submit']
const user = {}
const api = "https://dogsapi.origamid.dev/json"
console.log(formulario);

if(formulario){
    events.forEach((event)=>{
        formulario.addEventListener(event, cadastroUser)
    })  
}

async function postUser(body){
    const response = await fetch(api + '/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    console.log(response);
}

function cadastroUser(e){
    if(e.type === 'change') 
    user[e.target.id] = e.target.value
    else {
        e.preventDefault()
        postUser(user)
    }
}

}