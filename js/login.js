import getUser from "./getUser.js"

export function initLogin() {

    const token = window.localStorage.getItem('token')
    const urlAtual = 'http://127.0.0.1:5500/Meus%20Projetos/Cadastro%20User%20API/index.html'
    console.log(urlAtual);

    async function getDataU(token) {
        const dadosUser = await getUser(token)

        window.location.href = window.location.href.replace('/index.html', '/pagUser.html')


        console.log(dadosUser);
    }

    if (token && urlAtual === window.location.href) {
        getDataU(token)
    }


    const formLogin = document.querySelector('#loginForm')
    const events = ['change', 'submit']
    const user = {}
    const api = "https://dogsapi.origamid.dev/json"

    if (formLogin) {
        events.forEach((event) => {
            formLogin.addEventListener(event, loginUser)
        })
    }

    function loginUser(e) {
        if (e.type === 'change')
            user[e.target.id] = e.target.value
        else {
            e.preventDefault()
            getToken(user)
        }
    }

    async function getToken(body) {
        const response = await fetch(api + "/jwt-auth/v1/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)

        })

        if (!response.ok) {
            alert('Usuari não existe')
        } else {
            const json = await response.json()
            const userName = json.user_nicename
            const token = json.token
            window.localStorage.setItem('user', userName)
            window.localStorage.setItem('token', token)

            window.location.href = window.location.href.replace('/index.html', '/pagUser.html')
        }


    }
}
