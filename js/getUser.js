

    const api = "https://dogsapi.origamid.dev/json"

  export default async function getUser(token){
        const response = await fetch(api + "/api/user", {
            method: 'GET', 
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        const dadosJson = await response.json()
        return dadosJson
    }